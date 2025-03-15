let callCalc = document.querySelector("#calculator--icon")
let calc = document.querySelector(".calculator")
let callKeys = document.querySelector('.keys--calc')
let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.operator')
let enter = document.querySelector('.enter')
let clean = document.querySelector('.clean')
let screen = document.querySelector('.internal--screen-calc')
let close = document.querySelector('.close')
let minimize = document.querySelector('.mini')
let expand = document.querySelector('.expand')

expand.addEventListener('click', () => {
    calc.style.width = calc.style.width === '350px' ? '100%' : '350px'
    calc.style.height = calc.style.height === '500px' ? '91%' : '500px'
    calc.style.left = calc.style.left === '35%' ? '0px' : '35%'
    calc.style.top = calc.style.top === '20px' ? '0px' : '20px'

})

close.addEventListener('click', () => {
    calc.style.display = calc.style.display === 'flex' ? 'none' : 'none'
    clear()
})

minimize.addEventListener('click', () => {
    calc.style.display = calc.style.display === 'flex' ? 'none' : 'none'
})

callCalc.addEventListener('click', () =>{
    calc.style.display = calc.style.display === 'none' ? 'flex' : 'flex'
})

let numberOne = 0
let numberTwo = 0
let indicador = false
let contOperator
let continueCalc
let result

operators.forEach(operator => {
    operator.addEventListener('click', ()=>{
        operation(operator.textContent)
    })
})

numbers.forEach(number => {
    number.addEventListener('click', ()=>{if(!continueCalc){calculo(number)
        }
    })
})

enter.addEventListener('click', ()=> {
    solution(numberOne, numberTwo, contOperator)
    continueCalc = true
})

clean.addEventListener('click', ()=>{
    clear()
})

function calculo(number){
    if(continueCalc){
        numberOne = result.toString()
        numberTwo = ''
        continueCalc = false
        indicador = false
    }

    if(!indicador){
        numberOne +=(number.textContent)
        screen.textContent = numberOne
        }
        else{
            numberTwo += (number.textContent)
            screen.textContent = numberTwo
        }
    }


function operation(operator){
   if(continueCalc){
        numberOne = result.toString()
        numberTwo = ''
        continueCalc = false
   }

   if(numberOne && contOperator && numberTwo){
        solution(numberOne, numberTwo, contOperator)
        numberOne = result.toString()
        numberOne = ""
        continueCalc = false
   }else if(!numberOne){
        numberOne = screen.textContent;
   }

   console.log(numberOne, numberTwo)

   indicador = true
   contOperator = operator
   screen.textContent = contOperator
}

function solution(numberOne, numberTwo, contOperator){
    numberOne = parseFloat(numberOne)
    numberTwo = parseFloat(numberTwo)

    switch(contOperator){
        case "+":
            result = numberOne + numberTwo
            break
        case "-":
            result = numberOne + numberTwo
            break
        case "*":
            result = numberOne * numberTwo
            break
        case "/":
            result = numberOne / numberTwo
            break
    }
    screen.textContent = result
    indicador = false
    continueCalc = true
}

function clear(){
    screen.textContent = 0
    numberOne = 0
    numberTwo = 0
    indicador = false
    continueCalc = false
    result = 0
    calculo
}

