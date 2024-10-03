function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export default getResponseFromAPI;
