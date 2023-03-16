const {fetchBreedDescription} = require('./breedFetcher');
const args = process.argv.slice(2);

const breedName = args[0];

fetchBreedDescription(breedName, (err, desc) => {
  if (err) {
    console.log('Error fetch details:', err);
  } else {
    console.log(desc[0].description);
  }
})

