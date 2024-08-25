// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


const averageScore = function(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

const dolphinsScore1 = averageScore(96, 108, 89);
const koalasScore1 = averageScore(88, 91, 110);
const dolphinsScore2 = averageScore(97, 112, 101);
const koalasScore2 = averageScore(109, 95, 123);
const dolphinsScore3 = averageScore(97, 112, 101);
const koalasScore3 = averageScore(109, 95, 106);

if (dolphinsScore1 > koalasScore1 && dolphinsScore1 >= 100) {
    console.log(`Dolphins win the first competition with an average score of ${dolphinsScore1}`);
}
else if (koalasScore1 > dolphinsScore1 && koalasScore1 >= 100) {
    console.log(`Koalas win the first competition with an average score of ${koalasScore1}`);
}
else if (dolphinsScore1 === koalasScore1 && dolphinsScore1 >= 100) {
    console.log(`The first competition is a draw with both teams having an average score of ${dolphinsScore1}`);
}
else {
    console.log(`No team wins the first competition.`);
}

if (dolphinsScore2 > koalasScore2 && dolphinsScore2 >= 100) {
    console.log(`Dolphins win the second competition with an average score of ${dolphinsScore2}`);
}
else if (koalasScore2 > dolphinsScore2 && koalasScore2 >= 100) {
    console.log(`Koalas win the second competition with an average score of ${koalasScore2}`);
}
else if (dolphinsScore2 === koalasScore2 && dolphinsScore2 >= 100) {
    console.log(`The second competition is a draw with both teams having an average score of ${dolphinsScore2}`);
}
else {
    console.log(`No team wins the second competition.`);
}

if (dolphinsScore3 > koalasScore3 && dolphinsScore3 >= 100) {
    console.log(`Dolphins win the third competition with an average score of ${dolphinsScore3}`);
}
else if (koalasScore3 > dolphinsScore3 && koalasScore3 >= 100) {
    console.log(`Koalas win the third competition with an average score of ${koalasScore3}`);
}
else if (dolphinsScore3 === koalasScore3 && dolphinsScore3 >= 100) {
    console.log(`The third competition is a draw with both teams having an average score of ${dolphinsScore3}`);
}
else {
    console.log(`No team wins the third competition.`);
}

