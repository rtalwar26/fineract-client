const fs = require('fs');
console.log('Checking .env .....');
let a = fs.existsSync('.env');
!a && (() => { throw new Error('.env not found! Please setup the .env file as mentioned in the README.md'); })();
console.log('.env found. running tests ..... ');
// , (exists) => {
//     console.log(exists ? 'Found' : 'Not Found!');
// }); 
