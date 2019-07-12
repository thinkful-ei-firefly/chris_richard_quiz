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
  };

  //initialize <main>

  /*$(main).html(`
        <form class="quiz" methode="post">
        <fieldset name='quiz'>
        <ledgend>Get Started</ledgend>
        <button class='go' type='go'>Quiz Time</button>
        `)
    */
  //listener for the start quiz button id = 'begin'
  $(main).on('click', '.begin', event => {
    const question = dataSet.q1.text;
    const options = dataSet.q1.options;
    const answer = dataSet.q1.answer;
    const a = getQuestionHtml(question, options, answer);
    updateHtml(a);
  });

  //listener for the check anwser button id = 'check'
  $(main).on('click', '.check', event => {
    //check answer
    //if correct
    //call ifCorrect function 
    //if incorrect
    //call ifWrong function
    //update html


  });

  //listener for the next question button id = 'next'
  $(main).on('click', '.next', event => {
    questionNum++;
    //update html

  });

  //listener for the restart quiz button id = 'restart'
  $(main).on('click', '.restart', event => {
    questionNum = 0;
    score = 0;
    //update html
  });

  function getQuestionHtml(question, options) {
    const questionHtml = `
        <form class='quiz' method='post'>
        <fieldset>${question}</fieldset>
        <input type='radio' id='a' value='AnswerA'/>
        <label for='AnswerA'>${option[0]}</label>
        <input type='radio' id='b' value='AnswerB'/>
        <label for='AnswerB'>${option[1]}</label>
        <input type='radio' id='c' value='AnswerC'/>
        <label for='AnswerC'>${option[2]}</label>
        <input type='radio' id='d' value='AnswerD'/>
        <label for='AnswerD'>${option[3]}</label>
        <input type='radio' id='e' value='AnswerE'/>
        <label for='AnswerE'>${option[4]}</label>
        <button type='check' class='go'>Check Answer</button
        </form>`;
  }

  function getStartHtml() {
      const a =`
      <form class="quiz" methode="post">
      <fieldset name='quiz'>
      <ledgend>Get Started</ledgend>
      <button class='begin' type='go'>Quiz Time</button>
      `;
      return a;
  }

  function getEndHtml() {
      const a =`
      <form class="quiz" methode="post">
      <fieldset name='quiz'>
      <ledgend>Get Started</ledgend>
      <button class='restart' type='go'>Quiz Time</button>
      `
  }
  
  //function update question number text

  function updateScore() {
      return score++;
  }

  //function ifWrong function
    //set html to wrong answer
    //call updateScore function is not needed
    //call mainHtml function

  //function ifCorrect
    //set html to correct answer
    //call updateScore function
    //call mainHtml function


}

main();