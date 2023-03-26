import React, { useContext, useState } from 'react';
import './productcard.scss';
import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Stack,
  Heading,
  IconButton,
} from '@chakra-ui/react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { contextData } from '../../Context';
import { useDispatch } from 'react-redux';

const ProductCard = ({ arr }) => {
  const cartData = useContext(contextData);
  const toast = useToast();
  const [Icon, setIcon] = useState(true);
  const dispatch = useDispatch();

  const addToCartHandler = options => {
    dispatch({ type: 'addToCart', payload: options });
    dispatch({ type: 'calculateAmount' });

    toast({
      title: 'SUCCESSFULLY',
      description: 'Add to Cart',
      status: 'success',
      duration: 1000,
      isClosable: true,
      position: 'top',
    });
  };

  return (
    <>
      {arr.map((item, index) => {
        return (
          <div className="product-card" key={item.id}>
            <Card w={'full'} h="full">
              <CardBody alignItems="center" justifyContent={'center'}>
                <Link to={`/product/${item.id}`}>
                  <Image
                    w="100%"
                    h="150px"
                    objectFit={'contain'}
                    src={item.image}
                    transition=".2s ease-in-out"
                    _hover={{ transform: 'scale(1.1)' }}
                  />
                  <Stack mt="6">
                    <Heading size="md">{`${item.title.slice(
                      0,
                      20
                    )}...`}</Heading>
                    <Text fontSize="2xl">${item.price}</Text>
                  </Stack>
                </Link>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup justifyContent={'space-between'} w="full">
                  <Button
                    variant="ghost"
                    colorScheme="purple"
                    onClick={() => {
                      setIcon(!Icon);
                      toast({
                        title: Icon
                          ? 'Add Your Favourite'
                          : 'Remove Your Favourite',
                        description: 'asd',
                        status: Icon ? 'success' : 'warning',
                        duration: 1000,
                        isClosable: true,
                        position: 'top',
                      });
                    }}
                  >
                    <IconButton
                      icon={<FavoriteBorderIcon />}
                     />
                    {/* {Icon ?  : <FavoriteIcon />} */}
                  </Button>
                  <Button
                    variant="solid"
                    colorScheme="purple"
                    rightIcon={<ShoppingCartIcon />}
                    onClick={() =>
                      addToCartHandler(
                        item,
                        Object.defineProperty(item, 'quantity', { value: '1' })
                      )
                    }
                  >
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
