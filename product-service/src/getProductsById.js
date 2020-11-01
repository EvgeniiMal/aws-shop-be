'use strict';

import productData from './productsData.json';

export const getProductsById = async (event) => {
  console.log("ENVIRONMENT VARIABLES\n" + JSON.stringify(process.env, null, 2))
  console.log('EVENT\n', JSON.stringify(event, null, 2))

  const { productId } = event.pathParameters;
  const product = productData.find((el) => el.id === productId);

  return {
    statusCode: product ? 200 : 404,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(product ? product : {message: 'Not Found!'})
  };
};