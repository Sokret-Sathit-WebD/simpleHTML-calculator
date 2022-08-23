// const form = document["calculator"]

// form.addEventListener("submit", function(event){
//     event.preventDefault()

//     const sum = (firstNum + secNum)
//     const diff = (firstNum + secNum)
//     const multi = (firstNum * secNum)

//     const sum = document.createElement('h1')

//     form.addEventListener("click", function(){
//         h1.textContent = sum
//         document.getElementsByTagName("body")[0].append(h1)
//     })

// })








const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    
    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
                        
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const intergerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(intergerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = intergerDigits.toLocaleString('en', {maximumFractionDigits: 0 })
        }
    }
                        
                        
                        updateDisplay() {
                            
                        }
                    }
                    
                    
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
                    
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener(button => {
    button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
    })

})

allClearButton.addEventListener()

deleteButton.addEventListener()