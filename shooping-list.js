// document.querySelector('header').appendChild(document.createElement('button'))
// document.querySelector('button').id = 'bbb'
// const item = document.createElement('li')
// document.querySelector('ul').appendChild(item)
// item.textContent = 'num 5'

// function addItem(item) {
//     const li = document.createElement('li')
//     li.className = 'item'
//     li.textContent = item
//     document.querySelector('ul').appendChild(li)
// }
// addItem('num 6')

// const header = document.querySelector('header')
// const text = document.createElement('h3')
// text.textContent = 'example text'

// const title = document.querySelector('h1')
// header.insertBefore(text, title)

// function insertAfter(newElement, oldElement){
//     oldElement.insertAdjacentElement("afterend",newElement)
// }
// function insertAfter(newElement, oldElement){
//     oldElement.parentElement.insertBefore(newElement, oldElement.nextSibling)
// }

// insertAfter(text, title)
//  REMOVE
// function removeItem(index){
// const item = document.querySelector(`li:nth-child(${index})`)
// item.remove()
// }
// // removeItem(1)

// const removeItem2 = (index) => document.querySelector(`li:nth-child(${index})`).remove()

// removeItem(4)

// EVENTS
// const clearBtn = document.querySelector('#clear-btn')
// const items = document.querySelectorAll('.item')
// function clearItems() {
//     items.forEach((item) => item.remove())
// }
// clearBtn.onclick = clearItems // - FIRS TWAY
// clearBtn.addEventListener('click', clearItems) // - SECOND TWAY

// clearBtn.addEventListener('click', () => {
//     items.forEach((item) => item.remove())
// }) // - THIRD WAY

const form = document.querySelector('form')
const addItemInput = document.querySelector('form input')
const addItemButton = document.querySelector('form button')
const filter = document.getElementById('filter')
const itemList = document.querySelector('ul')

form.addEventListener('submit',(e) => {
    e.preventDefault()
    const val = addItemInput.value
    const li = document.createElement('li')
    if (val == ''){alert('add item befor submit'); return}
    li.className = 'item'
    const text = document.createTextNode(val)
    li.appendChild(text)
    const span = document.createElement('span')
    span.textContent = 'X'
    
    itemList.appendChild(li).appendChild(span)
})

const x = document.querySelectorAll('.item span')
function removeItem(item){
    item.addEventListener('click',() => item.parentElement.remove()    )
}
a = document.querySelectorAll('li span')
// removeItem(a[1])


for (i, a.length) {
    removeItem(a[i])
}
console.log(a.length)
