
//Imports
import data from '../data.json' assert {type: 'json'};
console.log(data)


//Variaveis e seletores
const commentInput = document.querySelector('#commentInput')
const sendInput = document.querySelector('#send-comment')
const container = document.querySelector('.comments')


//Eventos
sendInput.addEventListener('click', () => {   

    container.innerHTML += `
        <div class="comment">
            <div class="img-comment">
                <img 
                    src="./images/avatars/image-${data.currentUser.username}.png"
                    id="commentImg">
                </img>
            </div>
            <div class="text-comment">
                <p>${commentInput.value}</p>
            <div
        </div>

    `
    
    
})