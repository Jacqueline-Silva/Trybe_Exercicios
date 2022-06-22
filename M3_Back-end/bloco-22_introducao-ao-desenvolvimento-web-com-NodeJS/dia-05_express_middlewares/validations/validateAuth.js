function validateAuth(request, response, next) {
  const { authorization } = request.headers;

  if (!authorization || authorization.length !== 16) {
    return response.status(401).json({ message: 'Token inválido!' });
  }

  next();
};

module.exports = validateAuth;