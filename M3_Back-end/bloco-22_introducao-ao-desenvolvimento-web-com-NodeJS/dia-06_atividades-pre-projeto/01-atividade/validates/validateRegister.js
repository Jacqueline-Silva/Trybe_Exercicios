const regex = /\S+@\S+.com/;
const ERR = 401;

function validateRegister(request, response, next) {
 const { username, email, password } = request.body;

 if (username.length <= 3) {
  return response.status(ERR).json({ message: 'invalid data' });
 }

 if (!regex.test(email)) {
  return response.status(ERR).json({ message: 'invalid data' });
 }

 if (password.length < 4 || password.length > 8) {
  return response.status(ERR).json({ message: 'invalid data' });
 }

 next();
}

module.exports = validateRegister;