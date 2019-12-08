const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

load()

function load() {
    form.addEventListener('submit', e => {
        e.preventDefault()
        if (taskInput.value === '') {
            alert('Add a task')
        }

        const li = document.createElement('li')
        li.className = 'collection-item'

        li.appendChild(document.createTextNode(taskInput.value))
        link = document.createElement('a')
        link.className = 'delete-item secondary-content'
        link.innerHTML = '<i class="fa fa-remove"></i>'
        li.appendChild(link)
        taskList.appendChild(li)
        taskInput.value = ''
    })


}

taskList.addEventListener('click', e => {


    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure !!')) {
            e.target.parentElement.parentElement.remove()

        }
    }
})

clearBtn.addEventListener('click', e => {
    if (confirm('Are you sure ')) {
        taskList.innerHTML = ''
    }
})
filter.addEventListener('keyup', e => {



    const text = e.target.value.toLowerCase()
    document.querySelectorAll('.collection-item').forEach(val => {
        //val.firtChild.textContent === text ? val.style.display = 'block' : val.style.display = 'none'
        const item = val.firstChild.textContent
        if (item.indexOf(text) != -1) {
            val.style.display = 'block'
        } else {
            val.style.display = 'none'
        }
    })



})