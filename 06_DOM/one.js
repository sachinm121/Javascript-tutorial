document.getElementById('title');
document.getElementById('title').id;
document.getElementById('title').className;
document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')
document.getElementById('title').setAttribute('class', 'test heading')

const title = document.getElementById('title');
title
{/* <h1 id=​"title" class=​"heading">​DOM introduction​</h1> */}

title.style.backgroundColor = 'red';
'red'
title.style.padding = '15px';
'15px'
title.style.borderRadius = '15px';
'15px'

title.innerHTML
'DOM introduction <span style="display: none;">test text</span>'

title.innerText
'DOM introduction'

title.textContent
'DOM introduction test text'

document.getElementsByClassName('heading')
// HTMLCollection [h1#title.heading, title: h1#title.heading]

ocument.querySelector('h2')
{/* <h2>​Lorem ipsum dolor sit.​</h2> */}
​
document.querySelector('#title')
{/* <h1 id=​"title" class=​"heading">​…​</h1>​ */}

document.querySelector('.heading')
{/* <h1 id=​"title" class=​"heading">​…​</h1>​ */}

document.querySelector('input[type="password"]')
{/* <input type=​"password" id name fdprocessedid=​"p26den">​ */}


document.querySelector('ul')
{/* <ul>​…​</ul>​<li class=​"list-item">​…​</li>​<li class=​"list-item">​…​</li>​<li class=​"list-item">​…​</li>​<li class=​"list-item">​…​</li>​</ul>​ */}
const ullist = document.querySelector('ul')

ullist
{/* <ul>​…​</ul>​<li class=​"list-item">​…​</li>​<li class=​"list-item">​…​</li>​<li class=​"list-item">​…​</li>​<li class=​"list-item">​…​</li>​</ul>​ */}
const firstItem = ullist.querySelector('li')

firstItem
{/* <li class=​"list-item">​…​</li>​::marker​"one"</li>​ */}

firstItem.style.backgroundColor = 'green';
'green'
firstItem.style.padding = '10px';
'10px'

firstItem.innerText
'one'
firstItem.innerText = 'five'
'five'


const tempLiList = document.querySelectorAll('li')
undefined
tempLiList.style.color = 'red';
// VM18175:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:24
// (anonymous) @ VM18175:1
tempLiList[0].style.color = 'red';
'red'


const tempLiList = document.querySelectorAll('li')
undefined
tempLiList
NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item]
tempLiList.forEach((li) => {
    li.style.color = 'pink';
})