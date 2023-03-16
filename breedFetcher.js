const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (err,res,body) => {
  if (err) {
    console.log(err);
  }
  
  if (body === []) {
    return;
  }

  const data = JSON.parse(body);
  console.log(data[0].description)
})