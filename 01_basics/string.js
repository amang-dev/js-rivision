
// const name = "aman"
// const repoCount = 50
// console.log(`My name is ${name} My repo count is ${repoCount}`)


// const gameName = new String('amangupta')

// console.log(gameName[0])

// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('n'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(0, 4)
// console.log(anotherString);

// const newStr = "    aman       "
// console.log(newStr);
// console.log(newStr.trim());


// const url1 = "https://aman-gupta.me/"
// console.log(url1.replace("me", "com"));
// console.log(url1.includes("aman"));


// const sentance = "the-quick-brown-fox-in-lazy-day"
// console.log(sentance.split("-"));


//? ****** More String Methods ******


// let text = "my name"
// let url = "https://aman-gupta.me/"

// let anchor = text.anchor(url)
// console.log(anchor);


//? *******************************************************************************


//! Some important string methods in JavaScript include:

// charAt(index): Returns the character at the specified index in a string.

// concat(...strings): Combines two or more strings and returns a new string.

// indexOf(searchValue, startIndex): Returns the index of the first occurrence of a specified value in a string, starting the search at the specified index.

// lastIndexOf(searchValue, startIndex): Returns the index of the last occurrence of a specified value in a string, searching backwards from the specified index.

// includes(searchValue, startIndex): Returns true if a string contains a specified value, otherwise false.

// startsWith(searchValue, startIndex): Returns true if a string starts with a specified value, otherwise false.

// endsWith(searchValue, length): Returns true if a string ends with a specified value, otherwise false.

// slice(startIndex, endIndex): Extracts a section of a string and returns a new string.

// substring(startIndex, endIndex): Extracts a substring from a string between two specified indices.

// toLowerCase(): Converts a string to lowercase.

// toUpperCase(): Converts a string to uppercase.

// trim(): Removes whitespace from both ends of a string.



const newStr1 = new String('aman-g-ab-naba-ik')
console.log(newStr1[2])

console.log(newStr1.__proto__)

console.log(newStr1.length);

console.log(newStr1.toUpperCase());
console.log(newStr1.charAt(1));
console.log(newStr1.indexOf('m'));

const newString2 = newStr1.substring(0,2)
console.log(newString2);

const newString3 = newStr1.slice(0, 2)
console.log(newString3);


 console.log(newStr1.split("-"));