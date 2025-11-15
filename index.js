'use Strict';

const lang = document.getElementById('lang')
const title = document.getElementById('web-title')
const blogClick = document.getElementById('blog-link')
const catchCopy = document.getElementById('catch-copy')

const titleList = [
    'Juno | Currently under development...',
    'Juno | Get started with \"Juno\"',
    'Juno | Languages that work with Java',
    'Juno | Wide range from beginners to advanced users'
]

let i = 0
setInterval(() => {
    document.title = titleList[i]
    i = (i + 1) % titleList.length
    console.log(titleList[i])
}, 10000)

// Blogの外部リンク
function externalLink(message) {
    alert(message)
}
function externalLink() {
    alert('Move to external site (Japanese)');
}