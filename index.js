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
        }
        q2: {
            text:'question1: b is correct',
            options: ['a', 'b', 'c', 'd'],
            answer: 'b',
        }
        q3: {
            text:'question1: c is correct',
            options: ['a', 'b', 'c', 'd'],
            answer: 'c',
        }
        q4: {
            text:'question1: d is correct',
            options: ['a', 'b', 'c', 'd'],
            answer: 'd',
        }
        q5: {
            text:'question1: a is correct',
            options: ['a', 'b', 'c', 'd'],
            answer: 'a',
        }
    }

//initialize <main>

$(main).html(`
    <form class="quiz" methode="post">
    <fieldset name='quiz'>
    <ledgend>Get Started</ledgend>
    <button class='go' type='go'>Quiz Time</button>
    `)

$(main).on('click', '.go' event => {

});

//function updates mainhtml

//function update question number text

//function update score

//function check answer

//function if wrong

//function if correct

//function check to see if answer is correct

//function start quiz



}

main();