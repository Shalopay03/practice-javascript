/*1. Знайти суму ряду послідовних чисел від lim1 до lim2. Наприклад, якщо lim1=5, lim2=8,
то ця сума 5+6+7+8.
2. Завдання розв’язати через цикл for, цикл while, створення функції.*/
///////////////////////////////////

function forLoopImplementation(lim1, lim2){

    let sum=0;
    for(let i=lim1; i<=lim2; i++)
    {
        sum+= i;
    }
    return sum;
}

function whileLoopImplementation(index, lastIndex){

    let sum=0;
    while(index<=lastIndex){
        sum+=index;
        index++;
    }
    return sum;
}

const firstTask = document.querySelector("#first-task");
firstTask.addEventListener('click', () => {


    let lim1, lim2;
    lim1=parseInt(prompt("Enter lim1:"));
    lim2=parseInt(prompt("Enter lim2:"));

    //checking whether user entered number
    if(isNaN(lim1) || isNaN(lim1) || lim1>lim2){
        alert("Wrong input. Try again.");
        return;
    }

    alert(`for loop implementation: ${forLoopImplementation(lim1, lim2)}`);
    alert(`while loop implementation: ${whileLoopImplementation(lim1, lim2)}`);
});

///////////////////////////////////////////////

/*3. Реалізувати стрілкову (стрелочную) функцію добутку двох чисел. Реализовать
стрелочную функцию произведения двух чисел.*/
///////////////////////////////////
const secondTask = document.querySelector("#second-task");
secondTask.addEventListener('click', () => {
    let firstNumber, secondNumber;
    firstNumber=parseInt(prompt("Enter first number:"));
    secondNumber=parseInt(prompt("Enter second number:"));

    //checking whether user entered number
    if(isNaN(firstNumber) || isNaN(secondNumber)){
        alert("Wrong input. Try again.");
        return;
    }

    let productArrowFunction = (a, b) => alert(a*b);
    productArrowFunction(firstNumber, secondNumber);    
});
