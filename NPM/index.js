// Write a code to call "https://dummyjson.com/test" with the help of axios
const axios = require("axios");

// axios
//   .get("https://dummyjson.com/test")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });
async function fetchData() {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke",
    );
    console.log("Data fetched successfully:");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
