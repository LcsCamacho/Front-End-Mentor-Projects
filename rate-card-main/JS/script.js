var nota = 0

function recebeNota1() {
    nota = 1
    if (document.querySelector(`#rating-1`).style.backgroundColor == 'rgb(251, 116, 19)') {
        for(let i = 5; i >= nota; i--) 
            document.querySelector(`#rating-${i}`).style.backgroundColor = 'hsl(219, 9%, 29%)'
    }else{
        document.querySelector('#rating-1').style.backgroundColor = 'hsl(25, 97%, 53%)'
    }
}

function recebeNota2() {
    nota = 2
    if (document.querySelector(`#rating-2`).style.backgroundColor == 'rgb(251, 116, 19)') {
        for(let i = 5; i >= nota; i--) 
            document.querySelector(`#rating-${i}`).style.backgroundColor = 'hsl(219, 9%, 29%)'
    }else{
        for (let index = 1; index <= nota; index++) {
            document.querySelector(`#rating-${index}`).style.backgroundColor = 'hsl(25, 97%, 53%)'
        }

    }
}

function recebeNota3() {
    nota = 3
    if (document.querySelector(`#rating-3`).style.backgroundColor == 'rgb(251, 116, 19)') {
        for(let i = 5; i >= nota; i--) 
            document.querySelector(`#rating-${i}`).style.backgroundColor = 'hsl(219, 9%, 29%)'
    }else{
        for (let index = 1; index <= nota; index++) {
            document.querySelector(`#rating-${index}`).style.backgroundColor = 'hsl(25, 97%, 53%)'
        }
    }
}

function recebeNota4() {
    nota = 4
    if (document.querySelector(`#rating-4`).style.backgroundColor == 'rgb(251, 116, 19)') {
        for(let i = 5; i >= nota; i--) 
            document.querySelector(`#rating-${i}`).style.backgroundColor = 'hsl(219, 9%, 29%)'
    }else{
        for (let index = 1; index <= nota; index++) {
            document.querySelector(`#rating-${index}`).style.backgroundColor = 'hsl(25, 97%, 53%)'
        }
    }
}

function recebeNota5() {    
    nota = 5
    if (document.querySelector(`#rating-5`).style.backgroundColor == 'rgb(251, 116, 19)') {
        document.querySelector(`#rating-5`).style.backgroundColor = 'hsl(219, 9%, 29%)'
    }else{
        for (let index = 1; index <= nota; index++) {
            document.querySelector(`#rating-${index}`).style.backgroundColor = 'hsl(25, 97%, 53%)'
        }
    }
}

function alternaTela() {
    document.querySelector('.card').style.display = "none"
    document.querySelector('.card-secundary').style.display = "flex"
    document.querySelector('.thanks-rating').innerHTML = 
    `<p>
        You selected ${nota} out of 5
    </p>
    `  
}