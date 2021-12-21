// // alert("it's working");

// // console.log(4 + 4);
// // console.log(3 + 4);
// // console.error("oh no");
// // console.log(3 + 5, "hello", true);

// // if (1 === 1) {
// //   console.log("it's true!");
// // }

// // Performance Review
// // 3 - superstar
// // 2 - meets expectations
// // 1 - needs improvement
// // anything else is wtf.

// // let rating = 123;

// // if (rating === 3) {
// //   console.log("you are a superstar!");
// // } else if (rating === 2) {
// //   console.log("meets expectations");
// // } else {
// //   console.log("invalid rating");
// // }
// // let highScore = 1430;
// // let userScore = 2200;

// // if (userScore >= highScore) {
// //   console.log(`Congratulations, you have the new high score of ${userScore}`);
// //   highScore = userScore;
// // } else {
// //   console.log(
// //     `good game, your score of ${userScore} did not beat the high score of ${highScore}`
// //   );
// // }

// // let password = "hello123";

// // if (password.length >= 6) {
// //   if (password.indexOf(" ") === -1) {
// //     console.log("valid password");
// //   } else {
// //     console.log("password cannot contain spaces");
// //   }
// // } else {
// //   console.log("password must be 6 or more characters");
// // }

// // with logical operators

// // && used if you only need something to be true no other feedback is required

// // let password = "hello123";

// // if (password.length >= 6 && password.indexOf(" ") === -1)
// //   console.log("valid password");
// // } else {
// //   console.log("invalid password");
// // }

// // Arrays & Objects //

// const student = {
//   firstName: 'David',
//   lastName: 'Jones',
//   strengths: ['Music', 'Art'],
//   strengths: ['Phys Ed', 'maths'],
//   exams: {
//     midterm: 92,
//     final: 88,
//   },
// };

// const avg = (student.exams.midterm + student.exams.final) / 2;

// const game = {
//   player1: {
//     username: 'Kristina',
//     playingAs: 'X'
//   }
//   {
//     player2: 'Matt',
//     playingAs: 'O'
// }
//   board: [
//     ['O', null, 'X', 'O'],
//     ['X', 'O', 'X'],
//     [null, 'O', 'X'],
//   ],
// };

// const student = {
//   firstName: 'david',
//   lastName: 'jones',
//   strengths: ['physical ed', 'music', 'maths'],
// };

// LOOPS //

// repeat hello x 10
// for (let i = 1; i <= 10; i++) {
//   console.log('hello!');
// }

// perfect squares - 1x1, 2x2, 3x3 etc
// for (let num = 1; num <= 20; num++) {
//   console.log(`${num}x${num} = ${num * num}`);
// }

for (let number = 1; number <= 50; number++) {
  console.log(`${number}x${number} = ${number * number}`);
}
