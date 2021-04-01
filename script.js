'use strict'



let number = Math.trunc(Math.random()*20)+1
let score = Number(document.querySelector('.score').textContent)
let highscore = 0
// console.log(number)

document.querySelector('.again').addEventListener('click',function(){
    number = Math.trunc(Math.random()*20)+1
    document.querySelector('.message').textContent = 'Start guessing...'
    score = 20
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
})

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    if(!guess){
        document.querySelector('.message').textContent = 'No number!'
    }else if(guess === number){
        document.querySelector('.message').textContent = 'Parabéns, você acertou!'
        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = number

        if(score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    }else if(guess !== number){
        
        if(score === 0){
            document.querySelector('.message').textContent = 'Game over!'
        }else{
            score--
            document.querySelector('.message').textContent = guess > number ? 'Muito alto!' : 'Muito baixo!'
            document.querySelector('.score').textContent = score
        }
    }
})
