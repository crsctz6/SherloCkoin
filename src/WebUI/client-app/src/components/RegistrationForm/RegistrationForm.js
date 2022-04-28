import React, {useState} from 'react'
import {FormWrapper,HeadingContainer,Title,Paragraph,Form,Label,Plus,UploadImg, ErrorMessage} from './RegistrationFormStyleElements'
import {Input,FileInput,DateInput,RadioInput,ButtonInput,TextArea} from '../../elements/InputElement'
import addImg from '../../assets/plus.png'
import {useForm} from "react-hook-form"
import {CoinClient} from "../SheloCkoinApi.ts"
import configData from "../../config.json"

const SERVER_URL = configData.REACT_APP_SERVER_URL;
function RegistrationForm() {
  const [logo, setLogo] = useState();
  const {register, handleSubmit, reset, formState: { errors }} = useForm();
  const hiddenFileInput = React.useRef(null);


  const handleClick =  () => {
    hiddenFileInput.current.click();
  };
  const uploadImage = async (e) => {
    hiddenFileInput.current.click();
    const logoImg = await convertToBase64(e.target.files[0]).then();
    setLogo(logoImg);
  };
 
  const onSubmit = (newCoin) =>
  {
    const callApi = async (newCoin) => {
      let client = new CoinClient(SERVER_URL);
      let response = await client.create(newCoin);
      return response;
    };

    newCoin.isInPresale = newCoin.isInPresale === "on" ? true : false;
    newCoin.logo = logo;
    callApi(newCoin).then(data => 
      {
        reset();
        setLogo('');
      });
  };

  const convertToBase64 = (file) => 
  {
      return new Promise((resolve, reject)=>
      {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result)
        };
        
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
  }

  return (
    <FormWrapper>
        <HeadingContainer>
            <Title>
                Get listed
            </Title>
            <Paragraph>
                 Fill in the form in order to get listed to SherloCkoin. After submiting the data, your coin will be listed on our portal.
            </Paragraph>
        </HeadingContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>Logo</Label>
            <FileInput   onClick={handleClick}>
              {logo ? <Plus src={logo}/> : <Plus src={addImg}/>}
            <UploadImg>Update Image</UploadImg>
                <input type="file"
              ref={hiddenFileInput}
              onChange = {(e)=> {
                uploadImage(e);
              }}
              style={{display:'none'}} />
            </FileInput>
            <Label>Name</Label>
            <Input {...register("name", { required: true })}/>
            {errors.name?.type === 'required' && <ErrorMessage>**Name is required</ErrorMessage>}
            <Label>Symbol</Label>
            <Input {...register("symbol", { required: true })}/>
            {errors.symbol?.type === 'required' && <ErrorMessage>**Symbol is required</ErrorMessage>}
            <Label>Description</Label>
            <TextArea {...register("description")} width='60%' height='130px'/>
            <Label>Contract Address</Label>
            <Input {...register("contractAddress", { required: true })}  width='400px'/>
            {errors.contractAddress?.type === 'required' && <ErrorMessage>**Contract Address is required</ErrorMessage>}
            <Label>Launch Date</Label>
            <DateInput {...register("launchDate", { required: true })} type={'date'} width='250px'/>
            {errors.launchDate?.type === 'required' && <ErrorMessage>**Launch Date is required</ErrorMessage>}
            <Label>Presale Phase?</Label>
            <RadioInput {...register("isInPresale")} type={'radio'} width='400px'/>
            <Label>Website Link</Label>
            <Input {...register("websiteLink")} width='400px'/>
            <Label>Twitter Link</Label>
            <Input {...register("twitterLink")} width='400px'/>
            <Label>Telegram Link</Label>
            <Input {...register("telegramLink")} width='400px'/>
            <Label>Discord Link</Label>
            <Input {...register("discordLink")} width='400px'/>
            <ButtonInput type="submit"
                         value="Submit"
                         width='170px'
                         height='50px'
                         font-size='18px'
                         tableButton={false}/>
        </Form>
    </FormWrapper>
  )
}

export default RegistrationForm