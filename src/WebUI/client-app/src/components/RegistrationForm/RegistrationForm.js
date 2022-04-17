import React from 'react'
import GetListed from '../../pages/GetListed'
import {FormWrapper,HeadingContainer,Title,Paragraph,Form,Label} from './RegistrationFormStyleElements'
import {Input} from '../../elements/InputElement'
function RegistrationForm() {
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
            
            <Label>Name</Label>
            <Input/>
            <Label>Symbol</Label>
            <Input/>
            <Label>Description</Label>
            <Input width='740px' height='130px'/>
            <Label>Contract Address</Label>
            <Input width='400px'/>
            <Label>Launch Date</Label>
            <Input width='400px'/>
            <Label>Presale Phase?</Label>
            <Input width='400px'/>
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