const form = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.daytime');
const icon = document.querySelector('.icon img');

const saveLocalStorage = city => {
  localStorage.setItem('city', city);
};

const updateData = data => {
  const { cityDetails, weatherCondition } = data;

  //update html template
  details.innerHTML = `
<h5 class="my-3">${cityDetails.EnglishName}</h5>
<div class="my-3">${weatherCondition.WeatherText}</div>
<div class="display-4 my-4">
  <span>${weatherCondition.Temperature.Metric.Value}</span>
  <span>&deg;C</span>
</div>
`;

  const timeSrc = weatherCondition.IsDayTime ? `img/day.svg` : `img/night.svg`;
  time.setAttribute('src', timeSrc);

  const iconSrc = `img/icons/${weatherCondition.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  card.classList.remove('d-none');
};

const updateUi = async city => {
  const cityDetails = await getCity(city);
  const weatherCondition = await getWeather(cityDetails.Key);

  return {
    cityDetails,
    weatherCondition
  };
};

form.addEventListener('submit', e => {
  e.preventDefault();

  const city = form.city.value.trim();
  saveLocalStorage(city);

  updateUi(city)
    .then(data => updateData(data))
    .catch(err => console.log(err));
});

if (localStorage.getItem('city')) {
  updateUi(localStorage.getItem('city'))
    .then(data => updateData(data))
    .catch(err => console.log(err));
}
