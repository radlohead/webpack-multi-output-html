import fetch from 'cross-fetch'
import '../css/style.scss'
import icon from '../images/icon_01.png'

class Square {
    constructor() {
        this.root = document.querySelector('#root')
    }
    async func() {
        const responseData = await fetch(
            'https://jsonplaceholder.typicode.com/posts/1'
        )
        const response = await responseData.json()
        console.log('func2', response)
    }
    event() {
        document.querySelector('.title').addEventListener('click', () => {
            this.func()
        })
    }
    render() {
        this.root.innerHTML += `
            <h1 class="title">hello</h1>
            <img src=${icon} />
        `
    }
    task() {
        this.func()
        this.render()
        this.event()
    }
}

const test = new Square()
test.task()
