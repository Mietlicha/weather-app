const key = '13NdwrcNSFSCfM1kYLlsOyYCvukpq5ge';

const getWeather = async cityKey => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${cityKey}?apikey=${key}`;

  const respoonse = await fetch(base + query);
  const data = await respoonse.json();

  return data[0];
};

const getCity = async city => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const respoonse = await fetch(base + query);
  const data = await respoonse.json();
  return data[0];
};
