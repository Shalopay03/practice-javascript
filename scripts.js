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
        console.log("Wrong input. Try again.");
        return;
    }
    
    console.log("Task 1:");
    console.log(`for loop implementation: ${forLoopImplementation(lim1, lim2)}`);
    console.log(`while loop implementation: ${whileLoopImplementation(lim1, lim2)}`);
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
        console.log("Wrong input. Try again.");
        return;
    }

    let productArrowFunction = (a, b) => console.log(`${a}*${b}=${a*b}`);
    console.log("Task 2:");
    productArrowFunction(firstNumber, secondNumber);    
});


///////////////////////////////////////////////

/*Масив одновимірний
3.1 Створити числовий масив та проініціалізувати його.
3.2. Вивести розмір масива
3.3. Вивести елементи з парними індексами
3.4. Вивести тільки парні елементи
3.5. Вивести індекси нульових елементів (елемент дорівнює нулю)
3.6. Обчислити кількість нульових елементів*/


//3.1 Створити числовий масив та проініціалізувати його.
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 0];

const thirdTask=document.querySelector("#third-task");
thirdTask.addEventListener('click', () => {
    console.log("Task 3:");

    //array output
    console.log(`Array: ${array}`);

    //3.2. Вивести розмір масива
    console.log(`Array length: ${array.length}`);

    //3.3. Вивести елементи з парними індексами
    console.log("Elements with even index:");
    for(let i=0; i < array.length; i+=2){
        console.log(array[i]);
    }

    //3.4. Вивести тільки парні елементи
    console.log("Even elements:");
    array.forEach(element => { 
        if(element%2===0) console.log(element);
    });

    //3.5. Вивести індекси нульових елементів (елемент дорівнює нулю)
    //3.6. Обчислити кількість нульових елементів
    let numberOfZeroElements=0;
    console.log("Indexes of elements that equal zero:");
    for(let i=0; i < array.length; i++){
        if(array[i]===0) 
        {
            numberOfZeroElements++;
            console.log(i);
        }
    }
    console.log(`Number of elements that equal zero: ${numberOfZeroElements}`);

    
});