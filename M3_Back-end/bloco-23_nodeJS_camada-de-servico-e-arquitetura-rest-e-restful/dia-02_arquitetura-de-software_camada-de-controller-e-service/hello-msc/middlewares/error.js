module.exports = (err, _req, res, _next) => {
  // Qualquer erro será recebido sempre por esse middleware
  // Então a primeira coisa que fazemos é identificar qual o tipo do erro.

  // Se for um erro do Joi (é um erro de validação)
  if (err.isJoi) {
    return res.status(400) // 400 Bad Request
      // E com a mensagem gerada pelo Joi
      .json({ error: { message: err.details[0].message } });
  }

  // Caso não seja um erro do Joi, pode ser um erro de domínio ou um erro inesperado.
  // Construímos, então, um mapa que conecta um erro de domínio a um status HTTP.
  const statusByErrorCode = {
    notFound: 404, // 404 Not Found
    alreadyExists: 409, // 409 Conflict
  };

  const status = statusByErrorCode[err.code] || 500; // 500 Internal Server Error

  res.status(status).json({ error: { message: err.message } });
};