import React from 'react'
import GetListed from '../../pages/GetListed'
import {FormWrapper,HeadingContainer,Title,Paragraph,Form,Label,Plus,UploadImg} from './RegistrationFormStyleElements'
import {Input,FileInput,DateInput,RadioInput,TextArea} from '../../elements/InputElement'
import addImg from '../../photos/plus.png'
function RegistrationForm() {

  const hiddenFileInput = React.useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
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
        <Form>
            <Label>Logo</Label>
            <FileInput  onClick={handleClick}>
            <Plus src={addImg}/>
            <UploadImg>Update Image</UploadImg>
                <input type="file"
              ref={hiddenFileInput}
              style={{display:'none'}} />
            </FileInput>
            <Label>Name</Label>
            <Input/>
            <Label>Symbol</Label>
            <Input/>
            <Label>Description</Label>
            <TextArea width='60%' height='130px'/>
            <Label>Contract Address</Label>
            <Input width='400px'/>
            <Label>Launch Date</Label>
            <DateInput type={'date'} width='250px'/>
            <Label>Presale Phase?</Label>
            <RadioInput type={'radio'} width='400px'/>
            <Label>Website Link</Label>
            <Input width='400px'/>
            <Label>Twitter Link</Label>
            <Input width='400px'/>
            <Label>Telegram Link</Label>
            <Input width='400px'/>
            <Label>Discord Link</Label>
            <Input width='400px'/>
        </Form>


    </FormWrapper>
  )
}

export default RegistrationForm