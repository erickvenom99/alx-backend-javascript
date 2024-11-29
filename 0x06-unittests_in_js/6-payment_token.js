//Asynchronus function
const getPaymentTokenFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    }
  });
};
export default getPaymentTokenFromAPI;
