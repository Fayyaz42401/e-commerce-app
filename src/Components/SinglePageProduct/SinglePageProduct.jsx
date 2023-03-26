import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './singleproduct.scss';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  IconButton,
} from '@chakra-ui/react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';

const SinglePageProduct = () => {
  const { id } = useParams();
  const toast = useToast();

  const singleApi = `https://fakestoreapi.com/products/`;
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    const fetchSingleProduct = async url => {
      const res = await fetch(url);
      const data = await res.json();
      setSingleProduct(data);
    };
    fetchSingleProduct(`${singleApi}${id}`);
  }, []);

  return (
    <div className="single-product-section">
      <div className="poster-side">
        <img src={singleProduct.image} alt="" />
      </div>

      <div className="detail-side">
        <h1>{`${singleProduct.title?.slice(0, 30)}... `}</h1>
        <h2>{`${singleProduct.description?.slice(0, 100)}... `}</h2>
        <h2>Category : {singleProduct.category}</h2>
        <h1>Price : ${singleProduct.price}</h1>
        <h1>Rating : {singleProduct.rating && singleProduct.rating.rate}</h1>
        <h1>
          Total Sold : {singleProduct.rating && singleProduct.rating.count}
        </h1>

        <div className="btn-count">
          <IconButton
            colorScheme="purple"
            aria-label="Call Segun"
            size="md"
            icon={<AddIcon />}
          />
          <p>1</p>
          <IconButton
            colorScheme="purple"
            aria-label="Call Segun"
            size="md"
            icon={<MinusIcon />}
          />
        </div>
        <div className="buy-btn">
          <Button
            variant="solid"
            colorScheme="purple"
            rightIcon={<ShoppingCartIcon />}
            onClick={() => {
              toast({
                title: 'SUCCESSFULLY',
                description: 'Add to Cart',
                status: 'success',
                duration: 1000,
                isClosable: true,
                position: 'top',
              });
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SinglePageProduct;
