const crypto = require('crypto');

function anotherInsecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  var suffix = crypto.randomBytes(4).toString('hex'); // Generate a secure random suffix
  var password = "sssAAAA" + suffix;
  return password;
}