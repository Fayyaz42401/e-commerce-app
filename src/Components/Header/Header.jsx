import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { Button, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Input, Stack, InputGroup, InputRightElement } from '@chakra-ui/react';
import Hamburger from 'hamburger-react'
import SingUp from '../SingUp/SingUp';
import { useSelector } from 'react-redux';



const Cart = () =>{
  
 const {cartItems} = useSelector(state => state.cart)
  return(
    <>
      <Link to={'/cart'}>
       <Button mx="20px" variant={'ghost'}  ><ShoppingCartIcon />
       <p style={{color :'purple'}} > ({cartItems.length})</p></Button>
      </Link>

    </>
  )
}

const NavbarLeft = () => {
  return (
    <div className="navbar-left">
      <Link className="nav-link" to={'/'}>
        Home
      </Link>
      <Link className="nav-link" to={'/product'}>
        Product
      </Link>
      <Link className="nav-link" to={'/about'}>
        About
      </Link>
      <Link className="nav-link" to={'/contact'}>
        Contact
      </Link>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <Stack spacing={4} >
        <InputGroup >
          <Input
            type="search"
            placeholder="search..."
            focusBorderColor="#a29bfe"
          />
          <InputRightElement
            children={
              <IconButton variant='ghost'>
                <SearchIcon  />
              </IconButton>
            }
          />
        </InputGroup>
      </Stack>
    </div>
  );
};
const LoginButton = () => {

  return (
    <div className="navbar-right">
      <Link to={"/signup"}>
      <Button colorScheme={'purple'}>Register</Button>
      </Link>
    </div>
  );
};

const Header = () => {

  const [navbaOpen , setNavbarOpen] = useState(false)

  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>E-Commerce</h1>
        </div>

        <div className="navbar">
          <NavbarLeft />
          <div>

          <SearchBar /> 
          <Cart />
          <LoginButton />
          </div>
        </div>


        <div  className='menu-btn'  >
        <Cart />

        <button onClick={()=>setNavbarOpen(!navbaOpen)}>
           <Hamburger toggled={isOpen} toggle={setOpen} o/>

        </button>
        </div>
      </div>
      {
        navbaOpen ?   <div className="navbar-responsive">
        <NavbarLeft />
        <LoginButton />
      </div> : ''
      }

      <div className='responsive-search-bar'>
        <SearchBar />
      </div>
      
    </>
  );
};

export default Header;
