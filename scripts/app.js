const form = document.querySelector('.change-location');

const updateUi = async city => {
  const cityDetails = await getCity(city);
  const weatherCondition = await getCity(cityDetails.Key);

  return {
    cityDetails,
    weatherCondition
  };
};

form.addEventListener('submit', e => {
  e.preventDefault();

  const city = form.city.value.trim();

  updateUi(city)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
