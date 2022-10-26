var nota = 0

function recebeNota1() {
    nota = 1
    document.querySelector('#rating-1').style.backgroundColor = 'hsl(25, 97%, 53%)'
}

function recebeNota2() {
    nota = 2
    document.querySelector('#rating-1').style.backgroundColor = 'hsl(25, 97%, 53%)'
    document.querySelector('#rating-2').style.backgroundColor = 'hsl(25, 97%, 53%)'
}

function recebeNota3() {
    nota = 3
    document.querySelector('#rating-1').style.backgroundColor = 'hsl(25, 97%, 53%)'
    document.querySelector('#rating-2').style.backgroundColor = 'hsl(25, 97%, 53%)'
    document.querySelector('#rating-3').style.backgroundColor = 'hsl(25, 97%, 53%)'
    
}

function recebeNota4() {
    nota = 4
    document.querySelector('#rating-1').style.backgroundColor = 'hsl(25, 97%, 53%)'
    document.querySelector('#rating-2').style.backgroundColor = 'hsl(25, 97%, 53%)'
    document.querySelector('#rating-3').style.backgroundColor = 'hsl(25, 97%, 53%)'
    document.querySelector('#rating-4').style.backgroundColor = 'hsl(25, 97%, 53%)'
}

function recebeNota5() {    
    nota = 5
    document.querySelector('#rating-1').style.backgroundColor = 'hsl(25, 97%, 53%)'
    document.querySelector('#rating-2').style.backgroundColor = 'hsl(25, 97%, 53%)'
    document.querySelector('#rating-3').style.backgroundColor = 'hsl(25, 97%, 53%)'
    document.querySelector('#rating-4').style.backgroundColor = 'hsl(25, 97%, 53%)'
    var rating5 = document.querySelector('#rating-5').style.backgroundColor = 'hsl(25, 97%, 53%)'
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