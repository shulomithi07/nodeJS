var crypto = require("crypto")
algo = "aws-256-ctr"
password = "RJ23edrf"


function encrypt(text){
    var cipher = crypto.createCipheriv(algo, password)
    var ciphered = cipher.update(text, 'utf-8', 'hex')
    ciphered += cipher.final('hex')
    return ciphered
}

function decrypt(text){
    var decipher = crypto.createDecipheriv(algo, password)
    var deciphered = decipher.update(text, 'hex', 'utf8')
    deciphered += decipher.final('hex')
}

var text = "TEXT to CIPHER"
var e = encrypt(text)
console.log(e)

var d = decrypt(text)
console.log(d)