// 4, 5 e 6 ---------------------------------------------------------

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => // 6 - função para falha 
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (temperature, failure) => {
  const currentTemperature = getMarsTemperature();
  const success = Math.random() < 0.6;
  console.log(success)

  /* setTimeout(() => console.log(`Mars temperature is: ${currentTemperature} degree Celsius`), messageDelay());  */ 
  setTimeout(() => {
    if (success) temperature(currentTemperature) // 5 - callback temperatura
    else failure('Robot is busy'); // 6 - callback de falha
  }, messageDelay())
}

// sendMarsTemperature();
  // "Mars temperature is: 20 degree Celsius"

sendMarsTemperature(temperatureInFahrenheit);
  // Pode dar "TypeError" pois aqui não tem segunda callback
  // "It is currently 47ºF at Mars"

sendMarsTemperature(greet); 
  // Pode dar "TypeError" pois aqui não tem segunda callback
  // "Hi there! Curiosity here. Right now is 53ºC at Mars"

sendMarsTemperature(temperatureInFahrenheit, handleError);
  // "It is currently 47ºF at Mars", ou "Error getting temperature: Robot is busy"

sendMarsTemperature(greet, handleError);
  // "Hi there! Curiosity here. Right now is 53ºC at Mars", ou "Error getting temperature: Robot is busy"