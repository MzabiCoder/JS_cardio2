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


        // local storage
        Storage(taskInput.value)

        taskInput.value = ''
        e.preventDefault()
    })

    document.addEventListener('DOMContentLoaded', () => {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = []
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }

        tasks.forEach(task => {
            const li = document.createElement('li')
            li.className = 'collection-item'
            li.appendChild(document.createTextNode(task))

            const link = document.createElement('a')
            link.className = 'delete-item secondary-content'
            link.innerHTML = '<i class="fa fa-remove"></i>'
            li.appendChild(link)
            tasklist.appendChild(li)
        })
    })

    const Storage = (task) => {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = []
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }



    tasklist.addEventListener('click', e => {

        if (e.target.parentElement.classList.contains("secondary-content")) {
            if (confirm('Are you sure...')) {
                e.target.parentElement.parentElement.remove()

                removeE(e.target.parentElement.parentElement)

            }
        }
    })

    function removeE(taskItem) {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = []
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }

        tasks.forEach((task, i) => {
            if (taskItem.textContent === task) {
                tasks.splice(i, 1)
            }
        })

        localStorage.setItem('tasks', JSON.stringify('tasks'))
    }

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

