//Task 1
 const calculateTriangleAreaBySides = () => {
    const side1 = +document.getElementById('side1').value;
    const side2 = +document.getElementById('side2').value;
    const side3 = +document.getElementById('side3').value;

    const s = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    document.getElementById('result1').innerText = area;
}

// Task 2
const calculateTriangleAreaBySidesAndAngle = () => {
    const sideA = +document.getElementById('sideA').value;
    const sideB = +document.getElementById('sideB').value;
    const angleC = +document.getElementById('angleC').value;

    const radians = (angleC * Math.PI) / 180;
    const area = (sideA * sideB * Math.sin(radians)) / 2;

    document.getElementById('result2').innerText = area;
};




//Task 3
const calculateTriangleAreaByBaseAndHeight = () => {
    const base = +document.getElementById('base').value;
    const height = +document.getElementById('height').value;

    const area = (base * height) / 2;

    document.getElementById('result3').innerText = area;
}


//Task 5
const calculateTriangleAreaBySidesAndRadius = () => {
    const sideX = +document.getElementById('sideX').value;
    const sideY = +document.getElementById('sideY').value;
    const sideZ = +document.getElementById('sideZ').value;
    const radius = +document.getElementById('radius').value;

    const semiPerimeter = (sideX + sideY + sideZ) / 2;
    const area = (sideX * sideY * sideZ) / (4 * radius);

    document.getElementById('result5').innerText = area;
}

//Task 6
const checkPalindrome = () => {
    const inputNumber = document.getElementById('palindromeInput').value;
    const reversedInput = inputNumber.split('').reverse().join('');
    const isPalindrome = (inputNumber == reversedInput);

    document.getElementById('result6').innerText = isPalindrome ? 'Це паліндром' : 'Це не паліндром';
}

//Task 7
const checkAnagram = () => {
    const word1 = document.getElementById('word1').value.toLowerCase().split('').sort().join('').trim();
    const word2 = document.getElementById('word2').value.toLowerCase().split('').sort().join('').trim();

    const result = (word1 === word2) ? 'Це анаграма' : 'Це не анаграма';
    document.getElementById('result7').innerText = result;
}

//Task 8
const calculateFibonacci = () => {
    const number = parseInt(document.getElementById('fibonacciInput').value);

    let a = 1, b = 0;

    for (let i = 2; i <= number; i++) {
        let temp = a;
        a = a + b;
        b = temp;
    }

    document.getElementById('result8').innerText = b;
}


//Task 9
const checkIfFibonacciNumber = () => {
    const number = parseInt(document.getElementById('fibonacciCheckInput').value);
    let a = 1, b = 0, temp;

    while (b < number) {
        temp = a;
        a = a + b;
        b = temp;
    }

    const result = (b === number) ? 'Належить послідовності' : 'Не належить послідовності';
    document.getElementById('result9').innerText = result;
}