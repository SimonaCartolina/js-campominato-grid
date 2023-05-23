
const ulElement= document.querySelector('ul');

function createElement(tagName, classList){
    const liElement= document.createElement('li');
    liElement.classList.add('liElement');
    liElement.innerHTML= 'This is a li';
    return liElement;
}

const button= document.querySelector('button');

button.addEventListener('click', function(){
    for(let i=0; i<100; i++){
        liElement= createElement('li');
        ulElement.appendChild(createElement('li', 'liElement'));
    }
    button.disabled=true;

})

.liElement.addEventListener('click', function(){
    li.style.backgroundColor="white";
})
