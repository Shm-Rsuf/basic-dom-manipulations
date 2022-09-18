"use strict"
/*
-----DOM Manipulations-----
1.Select Elements{
  **getElementById(),
  **document.querySelector() & document.querySelectorAll()
  // document.getElementById--sometimes we will use it
  // const getSome2 = document.getElementById('second-heading');

  // document.getElementsByClassName
  // const getSome3 = document.getElementsByClassName('country');

  // document.getElementsByTagName
  // const getTag = document.getElementsByTagName('button');

  // document.querySelector & document.querySelectorAll--most of the cases we will use these..
  // const getSome = document.querySelector('#main-heading');
  // const getCountry = document.querySelectorAll('.country');
  // console.log(getSome)
  // console.log(getCountry)
  // console.log(getTag);
}
*/
/* 2.Styling Elements{

  // const title = document.querySelector('#main-heading');
  // title.style.color = 'crimson';
  // title.style.backgroundColor = 'black';
  // title.style.fontSize = '3rem';
}
// const countries = document.querySelectorAll('.country');
// for (let i = 0; i < countries.length; i++) {
//   countries[i].style.color = 'crimson';
//   countries[i].style.backgroundColor = 'black';
//   countries[i].style.fontSize = '2rem';
*/
// }
// 3.Create Elements
// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// li.textContent = 'Afg';

// ul.insertAdjacentElement('beforeend', li)
// console.log(ul);
// console.log(li.textContent);

// const h1 = document.querySelector('#main-heading');
// h1.setAttribute('class', 'main-headline');
// h1.setAttribute('width', '300px');

// h1.removeAttribute('class');
// h1.removeAttribute('width');

// console.log(h1.getAttribute('width'));
// console.log(h1.getAttribute('class'));

// h1.classList.add('main-headline', 'myCountry', 'myName');
// h1.classList.remove('myName', 'myCountry');

// let a = 10;

// if (a === 0) h1.classList.toggle('bangla')


// 4.Node Traversals
// const ul = document.querySelector('ul');
// console.log(ul.parentElement);
// console.log(ul.parentNode);
// console.log(ul.children);
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// const h1 = document.querySelector('#main-heading');

// console.log(h1.nextSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousElementSibling);

// 5.Events Handlers

// const input = document.querySelector('.input');
// const btn = document.querySelector('.btn');
// const ul = document.querySelector('ul');

// btn.addEventListener('click', () => {
//   const li = document.createElement('li');
//   li.classList.add('country');
//   li.textContent = input.value;
//   ul.append(li);
//   input.value = '';
// })