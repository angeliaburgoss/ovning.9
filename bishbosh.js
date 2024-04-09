
function runBishBosh() {

    //get values from index form
    const loopTal = parseInt(document.getElementById('loopTal').value);
    const firstNumber = parseInt(document.getElementById('firstNumber').value);
    const secondNumber = parseInt(document.getElementById('secondNumber').value);

    //creates array with numbers 1 to the number given to "loopTal"
    const numArr = Array(loopTal).fill(0).map((_, i) => i + 1);

    // loops through the array and replaces numbers based on conditions
    for (let i = 0; i <= loopTal; i++) {
        if (numArr[i] % firstNumber == 0 && numArr[i] % secondNumber == 0 ) 
        {
            numArr[i] = "Bish-Bosh"
        }
        
        else if (numArr[i] % firstNumber == 0)
        {
            numArr[i] = "Bish"
        }

        else if (numArr[i] % secondNumber == 0)
        {
            numArr[i] = "Bosh"
        }
    }

    //shows result on index
    const resultElement = document.getElementById('result');
    resultElement.textContent = numArr.join(', ');

}





// tidigare kod

// const numArr = Array(100).fill(1).map((n, i) => n + i)
  
// for (let i = 1; i <= 100; i++) {
//   numArr[i] = i;
// }

// for(let i = 1; i <= 100; i++) {
// if (numArr[i] % 3 == 0 && numArr[i] % 4 == 0) {
//     numArr[i] = "Bish-Bosh"
// }
// if (numArr[i] % 3 == 0) {
//     numArr[i] = "Bish"
// }
// if (numArr[i] % 4 == 0) {
//     numArr[i] = "Bosh"
// }

// else{
//   numArr.push(numArr);
// }
// }

// console.log(numArr)