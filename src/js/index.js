import fetch from 'cross-fetch'
import '../css/style.scss'
import numbers from './module'
import icon from '../images/icon_01.png'

class Square {
    constructor(numbers) {
        this.numbers = numbers
        this.root = document.querySelector('#root')
    }
    async func() {
        const responseData = await fetch(
            'https://jsonplaceholder.typicode.com/posts/1'
        )
        const response = await responseData.json()
        console.log('func2', response)
    }
    get() {
        this.root.innerHTML += this.numbers.map(x => x * x)
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
        this.get()
        this.render()
        this.event()
    }
}

const test = new Square(numbers)
test.task()
