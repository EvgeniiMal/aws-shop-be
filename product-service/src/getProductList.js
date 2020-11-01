'use strict';

import productData from './productsData.json';

export const getProductList = async (event) => {
  console.log("ENVIRONMENT VARIABLES\n" + JSON.stringify(process.env, null, 2))
  console.log('EVENT\n', JSON.stringify(event, null, 2))

  return {
    statusCode: 200,
    body: JSON.stringify(
      productData
    ),
  };
};