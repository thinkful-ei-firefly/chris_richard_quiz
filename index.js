'use strict';

function main() {

    let questionNum = 0; //0=begin, E=end
    let score = 0; //initial score = 0;

    //data for questions
    let dataSet = {
        q1: {
            text:'question1: a is correct',
            options: ['a', 'b', 'c', 'd'],
            answer: 'a',
        },
        q2: {
            text:'question1: b is correct',
            options: ['a', 'b', 'c', 'd'],
            answer: 'b',
        },
        q3: {
            text:'question1: c is correct',
            options: ['a', 'b', 'c', 'd'],
            answer: 'c',
        },
        q4: {
            text:'question1: d is correct',
            options: ['a', 'b', 'c', 'd'],
            answer: 'd',
        },
        q5: {
            text:'question1: a is correct',
            options: ['a', 'b', 'c', 'd'],
            answer: 'a',
        }
    }

//initialize <main>

/*$(main).html(`
    <form class="quiz" methode="post">
    <fieldset name='quiz'>
    <ledgend>Get Started</ledgend>
    <button class='go' type='go'>Quiz Time</button>
    `)
*/

$(main).on('click', '.go', event => {

});

//function updates mainhtml
//want the main html to look like
const question = 'some Question';
const optionA = 'Answer A';
const optionB = 'Answer B';
const optionC = 'Answer C';
const optionD = 'Answer D';
const optionE = 'Answer E';
`<form class='quiz' method='post'>
<fieldset>${question}</fieldset>  
  <label for='question'>${optionA}</label>
  <input type='radio' id='a' value='Answer A'/>
  <label for='Answer A'>${optionB}</label>
  <input type='radio' id='b' value='Answer B'/>
  <label for='Answer B'>${optionC}</label>
  <input type='radio' id='c' value='Answer C'/>
  <label for='Answer C'>${}</label>
  <input type='radio' id='d' value='Answer D'/>
  <label for='Answer D'>${}</label>
  <input type='radio' id='e' value='Answer E'/>
  <label for='Answer A'>${}</label>
  <button type='submit' class='go'>Check Answer</button
</form>`

//function update question number text

//function update score

//function check answer

//function if wrong

//function if correct

//function check to see if answer is correct

//function start quiz

}

main();