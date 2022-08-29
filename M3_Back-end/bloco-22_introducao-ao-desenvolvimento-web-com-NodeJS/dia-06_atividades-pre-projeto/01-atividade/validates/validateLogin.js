const regex = /\S+@\S+\.com/;
const ERR = 400;

function validateLogin(request, response, next) {
 const { email, password } = request.body;
 const pass = password.toString()

 if (!regex.test(email)) {
  return response.status(ERR).json({ message: 'email or password is incorrect' });
 }

 if (pass.length < 4 || pass.length > 8) {
  return response.status(ERR).json({ message: 'email or password is incorrect' });
 }

 next();
}

module.exports = validateLogin;