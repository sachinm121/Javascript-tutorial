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


document.getElementsByClassName('list-item')
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

const tempClassList = document.getElementsByClassName('list-item')
undefined
tempClassList.forEach((item) => {
    console.log(item)
})
// VM23012:1 Uncaught TypeError: tempClassList.forEach is not a function
    // at <anonymous>:1:15



const convertedArray = Array.from(tempClassList);
undefined
convertedArray
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object

convertedArray.forEach((li) => {
    console.log(li);
})
// VM24316:2 <li class=​"list-item" style=​"color:​ pink;​ --darkreader-inline-color:​ #ffa0b1;​" data-darkreader-inline-color>​…​</li>​
// VM24316:2 <li class=​"list-item" style=​"color:​ pink;​ --darkreader-inline-color:​ #ffa0b1;​" data-darkreader-inline-color>​…​</li>​
// VM24316:2 <li class=​"list-item" style=​"color:​ pink;​ --darkreader-inline-color:​ #ffa0b1;​" data-darkreader-inline-color>​…​</li>​
// VM24316:2 <li class=​"list-item" style=​"color:​ pink;​ --darkreader-inline-color:​ #ffa0b1;​" data-darkreader-inline-color>​…​</li>​
// undefined

convertedArray.forEach((li) => {
    li.style.backgroundColor = 'blue';
})