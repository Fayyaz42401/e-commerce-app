import React, { useContext, useState, useEffect } from 'react';
import { contextData } from '../../Context';
import {
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Card,
  Image,
  Stack,
  IconButton,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import './cart.scss';
import { Delete, Star } from '@mui/icons-material';

const Cart = () => {
  const { cartItems , subtotal , total, shipping , tax } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const incrementHandler = id => {
    dispatch({ type: 'addToCart', payload: { id } });
    dispatch({type: 'calculateAmount'})
  };
  const decrementHandler = id => {
    dispatch({ type: 'decrement', payload: id });
    dispatch({type: 'calculateAmount'})

  };
  const deleteHandler = id => {
    dispatch({ type: 'delete', payload: id });
    dispatch({type: 'calculateAmount'})

  };

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map(i => (
            <CartBox
              image={i.image}
              name={i.title}
              price={i.price}
              desc={i.description}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              rating={i.rating && i.rating.rate}
              count={i.rating && i.rating.count}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1 style={{textAlign:'center' , fontSize:'3rem'}}>No Items Yet</h1>
        )}
      </main>
      <HStack alignItems={'center'} position='fixed' bg='#efefef' p='4' zIndex={'2'} bottom={'0'} w='full' justifyContent={'space-around'} shadow='var(--shadow)' >
        <h1>Subtotal : ${subtotal}</h1>
        <h1>Tax : ${tax}</h1>
        <h1>Shipping : ${shipping}</h1>
        <Heading>Total : ${total}</Heading>

      </HStack>
    </div>
  );
};

const CartBox = ({
  name,
  image,
  desc,
  id,
  qty,
  rating,
  count,
  incrementHandler,
  decrementHandler,
  deleteHandler,
}) => {
  return (
    <>
      <div className="cart-box">
        <Card
          my="4"
          shadow={'var(--shadow)'}
          key={id}
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          w='60%'
        >
          <HStack alignItems={'center'} >
            <Image
              objectFit="contain"
              maxW={{ base: '100%', sm: '200px' }}
              w="100%"
              h="150px"
              src={image}
            />
          </HStack>

            <CardBody >
              <Heading size="md">{name}</Heading>

              {/* <Text py="2">{desc}</Text> */}
              <HStack sx={{ alignItems: 'center' }}>
                <Text fontSize={'1.2rem'}>{rating} </Text>
                <Star />
                <p>({count})</p>
              </HStack>
              <HStack my={'2'}>
                <Button
                  size="md"
                  isDisabled={qty <= 1 ? true : false}
                  onClick={() => decrementHandler(id)}
                >
                  <MinusIcon />
                </Button>
                <p>{qty}</p>
                <IconButton
                  size="md"
                  icon={<AddIcon />}
                  onClick={() => incrementHandler(id)}
                />
              </HStack>
              <HStack justifyContent={'space-between'} w='full' >
                <Button variant="solid" colorScheme="purple">
                  Buy Now
                </Button>
                <Button
                  variant="solid"
                  colorScheme="red"
                  onClick={() => deleteHandler(id)}
                >
                  <Delete />
                </Button>
              </HStack>
            </CardBody>

        </Card>
      </div>
    </>
  );
};

export default Cart;
