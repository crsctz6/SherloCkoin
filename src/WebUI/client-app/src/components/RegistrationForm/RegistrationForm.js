import React from 'react'
import GetListed from '../../pages/GetListed'
import {FormWrapper,HeadingContainer,Title,Paragraph,Form,Label,Plus,UploadImg} from './RegistrationFormStyleElements'
import {Input,FileInput,DateInput,RadioInput,TextArea} from '../../elements/InputElement'
import addImg from '../../photos/plus.png'
import {useForm} from "react-hook-form"
function RegistrationForm() {

  const hiddenFileInput = React.useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const {register, handleSubmit} = useForm();
  const onSubmit = (newCoin) =>
  {
    console.log(newCoin);
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
            <FileInput {...register("logo")}  onClick={handleClick}>
            <Plus src={addImg}/>
            <UploadImg>Update Image</UploadImg>
                <input type="file"
              ref={hiddenFileInput}
              style={{display:'none'}} />
            </FileInput>
            <Label>Name</Label>
            <Input {...register("name")}/>
            <Label>Symbol</Label>
            <Input {...register("symbol")}/>
            <Label>Description</Label>
            <TextArea {...register("description")} width='60%' height='130px'/>
            <Label>Contract Address</Label>
            <Input {...register("contractAddress")}  width='400px'/>
            <Label>Launch Date</Label>
            <DateInput {...register("launchDate")} type={'date'} width='250px'/>
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
            <Input type="submit" value="Submit" />
        </Form>


    </FormWrapper>
  )
}

export default RegistrationForm