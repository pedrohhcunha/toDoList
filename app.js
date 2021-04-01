const addBtn = document.querySelector('#addBtn')
const input = document.querySelector('#input')
const list = document.querySelector('.list')
var tasks = []
var removeBtn = []
let cout = 0

addBtn.addEventListener('click', addTask)
document.addEventListener('keypress', (e) => {
    if(e.keyCode === 13){
        addTask()
    }
})
for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeTasK(i))
}
function addTask(){
    if(input.value){
        var div = document.createElement('div')
        div.classList.add('tarefa')
        list.appendChild(div)
        tasks.push(div)

        var h2 = document.createElement('h2')
        h2.innerText = input.value
        var h2s = document.querySelectorAll('h2')
        h2s.forEach(element => {
            if(element.innerText == input.value || (input.value + " (" + cout + ")") == element.innerText){
                cout ++
            }
        });
        if(cout <= 0){
            h2.innerText = input.value
        } else {
            h2.innerText = input.value + " (" + cout + ")"
            cout = 0
        }
        div.appendChild(h2)

        var button = document.createElement('button')
        button.classList.add('done')
        button.innerText = "Mark as Done"
        div.appendChild(button)
        removeBtn.push(button)
        button.addEventListener('click', () => {
            list.removeChild(tasks[removeBtn.indexOf(button)])
        })
        input.value = ""
    }
}