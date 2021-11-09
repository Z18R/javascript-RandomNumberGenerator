const random = document.getElementById('random')
const btn = document.getElementById('btn')

let num10 = 10
let num5 = 5

btn.addEventListener('click', a)
function a(){
    let randomGen = Math.random() * (num10 - num5 )
    random.innerHTML = randomGen
}
const random1 = document.getElementById('random1')
const btn1 = document.getElementById('btn1')

btn1.addEventListener('click', b)
function b(){
    let randomGen = Math.floor(Math.random() * (num10 - num5 + 1))
    random1.innerHTML = randomGen
}
