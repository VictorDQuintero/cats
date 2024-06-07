// asyncBreeds.js
const fs = require("fs");

const breedDetailsFromFile = function (breed, whenDone) {
  // whenDone is a callback function
  console.log("breedDetailsFromFile: Calling readFile...");

  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");

    if (!error) {
      whenDone(data); // whenDone takes data and because printOutCarBreed is in its place when calling breedDetailsFromFile(), printOut...() gets data and prints it
    }
  });
};

const printOutCatBreed = (breed) => {
  console.log("Return Value: ", breed);
};

breedDetailsFromFile("Bombay", printOutCatBreed);
