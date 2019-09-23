const form = document.querySelector('#task-form')
const tasklist = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')


// load all event listener


LoadAll()

function LoadAll() {
    form.addEventListener('submit', e => {
        if (taskInput.value === '') {
            alert('add task....')
        }
        const li = document.createElement('li')
        li.className = 'collection-item'
        li.appendChild(document.createTextNode(taskInput.value))

        const link = document.createElement('a')
        link.className = 'delete-item secondary-content'
        link.innerHTML = '<i class="fa fa-remove"></i>'
        li.appendChild(link)
        tasklist.appendChild(li)
        taskInput.value = ''
        e.preventDefault()
    })


    tasklist.addEventListener('click', e => {

        if (e.target.parentElement.classList.contains("secondary-content")) {
            if (confirm('Are you sure...')) {
                e.target.parentElement.parentElement.remove()

            }
        }
    })

    clearBtn.addEventListener('click', e => {
        while (tasklist.firstChild) {
            tasklist.removeChild(tasklist.firstChild)
        }
    })

    filter.addEventListener('keyup', e => {

        const text = e.target.value.toLowerCase()

        document.querySelectorAll('.collection-item').forEach(task => {
            let item = task.firstChild.textContent
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block'
            } else {
                task.style.display = 'none'

            }
        })


    })


}