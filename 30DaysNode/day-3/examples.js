const fs = require("fs")
const data = `
    This is a story about a man
    A man who is wellknown for is manly deeds
    A man who can show his heoric features 
    A man who can control his anger when required.
    A very powerful man he was.
`

// Using literals
const pattern = /man/gim;
const output_arr = data.match(pattern)
console.log(output_arr)
console.log("This count is ", output_arr.length)

// Using constructor

const constructorPattern = new RegExp("man", "gim")
const conOutput = data.match(constructorPattern)
console.log(conOutput)
console.log("the length with constructorPattern ", conOutput.length)


// HTML tags finding
var str = `
    <html>
    <head>
    </head>
    <body>
    </body>
    </html>
    <f5sr?>
    <"b>
`;
var htmlPattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

var myarray = str.match( htmlPattern );
console.log(myarray)
var len = myarray.length;
console.log("Occurrences of pattern in the string is : " + len);



// Email validation
									
var str = 'rjbitdemo@gmail.com'
var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

var res = str.match( emailPattern );
if(res){
	console.log("Valid email address");
    console.log(res)
}else{
	console.log("Please enter a valid email address");
}


// Validating Hexa decimal number
									
var str = 'FFFFFF'
var Hexpattern = /^[a-fA-F0-9]+$/g;

var res = str.match( Hexpattern );
if(res){
	console.log("Valid Hexadecimal number");
    console.log(res)
}else{
	console.log("Not a valid Hexadecimal number");
}
	
// Password pattern

var pstr = 'Aa#1aaabcde'
var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;

var res = pstr.match( passwordPattern );
if(res){
	console.log("Valid password");
    console.log(res)
}else{
	console.log("Not a valid password");
}
	