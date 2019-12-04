// let val
// const list = document.querySelector('ul.collection')
// const listItem = document.querySelector('li.collection-item:first-child')

// // val = list.children[0]
// // val = list.firstElementChild
// // val = list.childElementCount

// //val = listItem.parentElement

// const li = document.createElement('li')
// li.className = 'collection-item'
// li.setAttribute('title', 'hbiba')

// // create textnode and append
// const content = document.createTextNode('Hellow World')
// li.appendChild(content)

// const link = document.createElement('a')
// link.className = 'delete-item secondary-content'
// link.innerHTML = '<i class="fa fa-remove"></i'

// li.appendChild(link)

const card = document.querySelector('.card')
const btn = document.querySelector('.clear-tasks')
const h5 = document.querySelector('h5')

const form = document.querySelector('form')
const task = document.getElementById('task')
const select = document.querySelector('select')
form.addEventListener('keyup', run)

select.addEventListener('change', run)


function run(e) {

    console.log(e.target.value)
}