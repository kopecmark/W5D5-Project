const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function addNumbers (sum = 0, numsLeft, completionCallback) {
  // if sum
    if(numsLeft > 0) {
      reader.question("What is your number?", function (answer) {
        sum += parseInt(answer);
        numsLeft -=1;
        console.log("Partial sum: " + sum);
        addNumbers(sum, numsLeft, completionCallback);
      });
    } else {

      completionCallback(sum);

    }
}

const addNum = new addNumbers(0, 3, (el) => {
  console.log(`Total sum: ${el}`);
  reader.close();
});
