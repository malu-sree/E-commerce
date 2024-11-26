// const bcrypt = require('bcryptjs');

// // Hash password
// const hashPassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(password, salt);
// };

// // Compare passwords
// const comparePassword = async (enteredPassword, hashedPassword) => {
//   return await bcrypt.compare(enteredPassword, hashedPassword);
// };

// module.exports = { hashPassword, comparePassword };

const bcrypt = require('bcrypt');

// Hash password
const hashPassword = async (password) => {
  // Generate salt with 10 rounds
  const salt = await bcrypt.genSalt(10);
  // Hash password with the generated salt
  return await bcrypt.hash(password, salt);
};

// Compare entered password with the stored hashed password
const comparePassword = async (enteredPassword, hashedPassword) => {
  // Compare the plain entered password with the hashed password
  return await bcrypt.compare(enteredPassword, hashedPassword);
};

module.exports = { hashPassword, comparePassword };

