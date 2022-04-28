import React, { useState, useRef, useEffect } from "react";
import { Form, Input, Button, MagnifyImg, SearchPanel, Ul, ResultItems, TextContainer } from "./InputBarStyledComponents";
import search from '../../assets/magnify.png'
import { useNavigate  } from 'react-router-dom';
const InputBar = (props) => {
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const [options, setOptions] = useState();
  const formRef = useRef();
  const inputFocus = useRef();
  const navigate = useNavigate();
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'})}

  useEffect(() => {
    setOptions(props.options)
  }, []);

  useEffect(() => {
    let opt = props.options.filter(e => 
      e.name.toLowerCase().includes(input.toLowerCase()) 
      || e.symbol.toLowerCase().includes(input.toLowerCase()))
    setOptions(opt)
  }, [input]);

  const onFormSubmit = (e) => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInput("");
    setBarOpened(false);
    // After form submit, do what you want with the input value
  };

  return (
    options && 
    <SearchPanel>
      <Form
       onSubmit={onFormSubmit}
        barOpened={barOpened}
        onClick={(e) => {
          e.stopPropagation();
          // When form clicked, set state of baropened to true and focus the input
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        // on focus open search bar
        onFocus={() => {
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        // on blur close search bar
        onBlur={() => {
          setBarOpened(false);
        }}
        ref={formRef}
      >
        <Button  barOpened={barOpened}>
          <MagnifyImg src={search}/>
        </Button>
          <Input
            onChange={(e) => setInput(e.target.value)}
            ref={inputFocus}
            value={input}
            barOpened={barOpened}
            placeholder="Search coins..."
          />
      </Form>
      <Ul barOpened={barOpened}>
          {options.map((option, index) => {
              return (
              <ResultItems 
              key={index} 
              onMouseDown  = {(e)=> {
                navigate('/details/' + option.id); 
                scrollToTop();
              }}
              >
                <TextContainer><img src={option.logo} height="30px" width = "30px" alt="logoCoin"/></TextContainer>
                <TextContainer>{option.name}</TextContainer>
                <TextContainer>{option.symbol}</TextContainer>
              </ResultItems>
              )})}
      </Ul>
    </SearchPanel>
  );
};

export default InputBar;
