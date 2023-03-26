import React, { useState } from 'react';
import './signup.scss';
import {
  Input,
  InputRightElement,
  Button,
  InputGroup,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';




const SingUp = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
  
    <div className="signup-form">
        <h1>SingnUp</h1>
      <Input type="text" placeholder="User Name" />
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
      <Link to={"/login"}>
      <Button variant={'link'}>Already have an account!</Button>
      </Link>
      <Button colorScheme={"purple"}>SingUp</Button>
    </div>
    

    </>
  );
};

export default SingUp;
