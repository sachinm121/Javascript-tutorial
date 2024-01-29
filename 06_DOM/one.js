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


