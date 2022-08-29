const ERR = 401;

function validateSignup(request, response, next) {
  const { email, password, firstName ,phone } = request.body;

  if (!email || !password || !firstName || !phone) {
    return response.status(ERR).json({ message: 'missing fields' });
  }
  next();
};

module.exports = validateSignup;