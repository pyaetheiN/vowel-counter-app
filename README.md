# Vowel Counter

My take on a Beginner JavaScript project.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Get alerts according to the inputs

### Links

- Live Site URL: https://pyaethein.github.io/vowel-counter-app/

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- SASS
- Vanilla JavaScript

### What I learned

- REGEX - `/i` case insensitive 
- using `text.match(pattern).length;` to get numbers of vowels in a string

```js
let text = input.value;

if(!text.match(pattern)){
  alert(`There are no vowels!`)
  return;
}

let length = text.match(pattern).length;

text.match(pattern).length > 1 
  ? alert(`There are ${length} vowels!`)
  : alert(`There is 1 vowel!`);
```

### Useful resources

- https://stackoverflow.com/questions/29450399/counting-number-of-vowels-in-a-string-with-javascript

## Author

- Email - pyaethein246@gmail.com
- Twitter - [@pt_boyyy](https://www.twitter.com/pt_boyyy)