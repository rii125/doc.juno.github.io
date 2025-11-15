'use Strict';

// DOM variable
const lang = document.getElementById('lang')
const title = document.getElementById('web-title')
const blogClick = document.getElementById('blog-link')
const catchCopy = document.getElementById('catchCopy')

// Array variable
const titleList = [
    'Juno | Currently under development...',
    'Juno | Get started with \"Juno\"',
    'Juno | Languages that work with Java',
    'Juno | Wide range from beginners to advanced users'
]

// Const variable
const changeMs = 1000  // 1000 = 1sec
const sec = 10
const titleCount = sec * changeMs

// Can change variable
let i = 0

/**
* @test console.log(catchCopy.innerText)
*
*/

setInterval(() => {
    document.title = titleList[i]
    catchCopy.innerText = titleList[i]
    i = (i + 1) % titleList.length
    /** @test console.log(titleList[i]) */
}, titleCount)

// Blog external link
function externalLink(message) {
    alert(message)
}
function externalLink() {
    alert('Move to external site (Japanese)');
}