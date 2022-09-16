let bcrypt = require('bcrypt');

function checkPass(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = checkPass;
