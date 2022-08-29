const fetch = require('node-fetch');

const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

const headers = new fetch.Headers({
  Authorization: API_TOKEN,
  'Content-Type': 'application/json',
});

const body = JSON.stringify({
  name: 'Tryber',
  email: 'tryber@betrybe.com',
  password: 'Tr1b3r'});

// Para aquecer, vamos começar com uma requisição do tipo `GET`
fetch('https://postman-echo.com/post?param1=teste', { 
    headers,
    method: 'POST',
    body, })
  .then((response) => {
    if (!response.ok) return Promise.reject(response);

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples (status !== de 2xx), simplesmente logamos o status no console
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    // Caso tenha acontecido um erro de rede, logamos o erro todo
    console.error(errorOrResponse);
  });