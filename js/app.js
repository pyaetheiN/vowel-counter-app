const form = document.querySelector('.form'),
      input = document.querySelector('.form__input'),
      btn = document.querySelector('.form__btn'),
      pattern = /[aeiou]/gi;

form.addEventListener('submit', check);

function check(e){
  e.preventDefault();

  let text = input.value;

  if(!text.match(pattern)){
    alert(`There are no vowels!`)
    return;
  }

  let length = text.match(pattern).length;

  text.match(pattern).length > 1 
    ? alert(`There are ${length} vowels!`)
    : alert(`There is 1 vowel!`);
}