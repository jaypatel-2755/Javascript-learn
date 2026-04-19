const name = "Jay"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("GTA-JayPatel")

//console.log(gameName[0]);
//console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('T'));

const newString = gameName.substring(0, 3);
console.log(newString);

const anotherString = gameName.slice(-11, 4);
console.log(anotherString);

const newStringOne = "  Hello world   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.youtube.com/jay%20patel"

console.log(url.replace("%20", "-"));
console.log(url.includes("youtube"));

console.log(gameName.split("-"));