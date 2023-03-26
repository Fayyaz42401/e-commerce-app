import React,{useState} from 'react'
import "./login.scss"
import {
    Input,
    InputRightElement,
    Button,
    InputGroup,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';



const Login = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
  return (
    
    <div className="signup-form">
        <h1>Login</h1>
      <Input type="email" placeholder="Enter Email" />

      <InputGroup size="md" border={"var(--main)"}>
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Link to={"/signup"}>
      <Button variant={'link'}>Create an account!</Button>
      </Link>
      <Button colorScheme={"purple"}>Login</Button>
    </div>
  )
}

export default Login