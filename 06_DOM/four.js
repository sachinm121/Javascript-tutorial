const ul = document.querySelector('.language');

//brute force solution
// function addLanguage(langName){
//     const li = document.createElement('li');

//     li.innerHTML = langName;

//     ul.appendChild(li);
// }

// addLanguage("java");
// addLanguage("python");




//optimal solution
function addLanguageOpt(langName){
    const li = document.createElement('li');
    const textNode = document.createTextNode(langName);
    li.appendChild(textNode);
    ul.appendChild(li);
}

addLanguageOpt('Java')
addLanguageOpt('Python')


// Edit
const secondLang = document.querySelector('li:nth-child(2)');
// secondLang.innerHTML = 'C++'
const newli = document.createElement('li');
newli.textContent = 'C++';
secondLang.replaceWith(newli);

const firstLang = document.querySelector('li:first-child');
firstLang.outerHTML = `<li>TypeScript</li>`

//Remove
const lastLang = document.querySelector('li:last-child');
lastLang.remove()