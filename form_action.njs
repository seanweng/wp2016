#!/user/seanweng/git/wp2016
var querystring = require('querystring');
var param=querystring.parse(process.env.QUERY_STRING);

console.log('Content-type: text/html;charset=utf-8\n');

console.log('<h1>Welcome Back!!</h1>');
