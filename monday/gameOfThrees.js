// Challenge Description
// The input is a single number: the number at which the game starts. Write a program that plays the 3s game, and outputs a valid sequence of steps you need to take to get to 1. Each step should be output as the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.

// Input Description
// The input is a single number: the number at which the game starts.

// gameOfThree(100);
// Output Description
// The output is a list of valid steps that must be taken to play the game. Each step is represented by the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.

// //OUTPUT:
// 100 -1
// 33 0
// 11 1
// 4 -1
// 1

// pseudoCode:

//1. declare a function that takes a single number as parameter.
//2.  use 'while' loop to continue playing the game until the number becomes 1.
//3. Inside the loop, it checks the remainder of the number divided by 3 to determine the next step.
//4. If the reminder is 0, it divides the number by 3 and outputs the number follwed by 0.
//5. If the remainder plus1 is divisible by 3, it adds 1 to the number, divides it by 3, and outputs the number followed by 1.
//6. If the rermainder minus1 is divisible by 3, it substracts 1 from the number, divides it by 3, and outputs the number followed by -1.
//7. Finally, when the number becomes 1, it outputs just 1 to end the sequence.

function gameOfThree(number) {
  while (number !== 1) {
    if (number % 3 === 0) {
      console.log(number + " 0");
      number /= 3;
    } else if ((number + 1) % 3 === 0) {
      console.log(number + " 1");
      number = (number + 1) / 3;
    } else if ((number - 1) % 3 === 0) {
      console.log(number + " -1");
      number = (number - 1) / 3;
    }
  }
  console.log("1");
}

gameOfThree(100);

// Diagram:

// number     num /3?     num+1 /3?      num-1  /3?    output
//  100         no           no             yes         100 -1
//   33         yes                                      33  0
//   11         no           yes                         11 +1
//   4          no           no             yes           4 -1
//   1                                                    1
