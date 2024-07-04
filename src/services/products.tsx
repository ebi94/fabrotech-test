import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const listProduct = async () => {
  const config = {
    method: "get",
    url: `${baseUrl}products?limit=0`,
  };

  try {
    const response = await axios(config);
    return response.data; // Return the response data directly
  } catch (error) {
    console.log(error);
    return null; // Optionally return null or handle the error appropriately
  }
};

const detailProduct = async () => {
  const config = {
    method: "get",
  };

  try {
    const response = await axios(config);
    return response.data; // Return the response data directly
  } catch (error) {
    console.log(error);
    return null; // Optionally return null or handle the error appropriately
  }
};

export { listProduct, detailProduct };
