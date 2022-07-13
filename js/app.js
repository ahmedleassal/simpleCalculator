// selecting all elements we need

// the main body of the calculator
const calculator = document.querySelector('.calculator-container');

// div that inputs shows on
const input = document.querySelector('.input-numbers');

// div that the result shows on
const output = document.querySelector('.output-numbers');

// btn to delete input div
const deleteBtn = document.querySelector('.delete-btn');

// // all buttons exept equal button
// const btn = document.querySelectorAll('button');

// // button that is equal sign (=)
// const equalBtn = document.querySelector('.equal-btn');

calculator.addEventListener('click', (e) => {

    // showing data in the input field
    if(e.target.className === 'number-btn') {
        let showndata = e.target.dataset.value;
        input.innerText = input.innerText + showndata;
    }

    // showing result in the output feild
    if(e.target.className === 'equal-btn') {
        let inputData  = input.innerText;
        output.innerText = eval(inputData);
        input.innerText = null
    }

    // delete one number
    if(e.target.className === 'delete-btn') {
        let inputArr = Array.from(input.innerText);
        inputArr.pop();
        input.innerText = inputArr.join('');
    }
    // clearing the input feild
    if(e.target.className === 'ac-btn') {
        input.innerText = null;
    }
})