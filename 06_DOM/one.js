// Get the element with id 'title'
const title = document.getElementById('title');

// Accessing properties of the title element
const titleId = title.id;
const titleClassName = title.className;
const titleIdAttribute = title.getAttribute('id');
const titleClassAttribute = title.getAttribute('class');

// Set the class attribute of the title element to 'test heading'
title.setAttribute('class', 'test heading');

// Modify the styles of the title element
title.style.backgroundColor = 'red';
title.style.padding = '15px';
title.style.borderRadius = '15px';

// Access different text content properties of the title element
const innerHTMLContent = title.innerHTML;
const innerTextContent = title.innerText;
const textContent = title.textContent;

// Select elements using various selectors
const h2Element = document.querySelector('h2');
const titleById = document.querySelector('#title');
const titleByClass = document.querySelector('.heading');
const passwordInput = document.querySelector('input[type="password"]');
const ulElement = document.querySelector('ul');

// Access the first li element within the ul
const firstItem = ulElement.querySelector('li');

// Modify styles and content of the first li element
firstItem.style.backgroundColor = 'green';
firstItem.style.padding = '10px';
firstItem.innerText = 'five';

// Select all li elements and change their color to pink using forEach
const tempLiList = document.querySelectorAll('li');
tempLiList.forEach((li) => {
    li.style.color = 'pink';
});

// Convert HTMLCollection to an array and change the background color of li elements
const tempClassList = document.getElementsByClassName('list-item');
const convertedArray = Array.from(tempClassList);
convertedArray.forEach((li) => {
    li.style.backgroundColor = 'blue';
});
