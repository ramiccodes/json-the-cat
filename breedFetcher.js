const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err,res,body) => {
  const data = JSON.parse(body);
    callback(err, data);
})
}

module.exports = {fetchBreedDescription};

