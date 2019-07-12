'use strict';

function main() {

  console.log('loaded main funciton');
  console.log($('button').attr($('class'));

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

  //initialize <main> with start
  $(main).html(`
        <form class="quiz" methode="post">
        <fieldset name='quiz'>
        <ledgend>Get Started</ledgend>
        <button class='begin' type='go'>Quiz Time</button>
        `
  );

  //listener for the start quiz button id = 'begin'
  $(main).on('click', '#begin', event => {
    event.preventDefault();
    //updating main HTML with the question 1 details.
    updateHtml(getQuestionHtml(dataSet.q1.text, dataSet.q1.options, dataSet.q1.answer));
  });

  //listener for the check anwser button id = 'check'
  //checks to see if the ansewer is correct
  //goes to wrong or correct
  //increments questionNum by one
  //updates score
  $(main).on('click', '#check', event => {
    event.preventDefault();
    //get the answer chosen
    const choice = $(event.target).val();
    const result = isRight(choice);
    if (result) {
      let a = getCorrectHtml();
      updateHtml(a);
      updateScore();
    } else {
      let a = getWrongHtml();
      updateHtml(a);
    }
    return questionNum++;
  });

  //listener for the next question button id = 'next'
  //the next button will be on a correct or wrong answer page
  //update question number html
  $(main).on('click', '#next', event => {
    event.preventDefault();
    if (questionNum < dataSet.length) {
      if (questionNum === 1) { 
        updateHtml(getQuestionHtml(dataSet.q1.text, dataSet.q1.options, dataSet.q1.answer));            
      }else if (questionNum === 2) { 
        updateHtml(getQuestionHtml(dataSet.q2.text, dataSet.q2.options, dataSet.q2.answer));            
      } else if (questionNum === 3) { 
        updateHtml(getQuestionHtml(dataSet.q3.text, dataSet.q3.options, dataSet.q3.answer));            
      } else if (questionNum === 4) { 
        updateHtml(getQuestionHtml(dataSet.q4.text, dataSet.q4.options, dataSet.q4.answer));            
      } else if (questionNum === 5) { 
        updateHtml(getQuestionHtml(dataSet.q5.text, dataSet.q5.options, dataSet.q5.answer));            
      } else {
        // update to End html
        updateHtml(getEndHtml());
      }
    }
    return questionNum++;
  });

  //listener for the restart quiz button id = 'restart'
  $(main).on('click', '#restart', event => {
    event.preventDefault();
    updateHtml(getStartHtml());
    questionNum = 0;
    score = 0;
    return questionNum, score;
    //update html
  });

  function getQuestionHtml(question, options) {
    const questionHtml = `
        <form class='quiz' method='post'>
        <fieldset>${question}</fieldset>
        <input type='radio' id='a' value='AnswerA'/>
        <label for='AnswerA'>${options[0]}</label>
        <input type='radio' id='b' value='AnswerB'/>
        <label for='AnswerB'>${options[1]}</label>
        <input type='radio' id='c' value='AnswerC'/>
        <label for='AnswerC'>${options[2]}</label>
        <input type='radio' id='d' value='AnswerD'/>
        <label for='AnswerD'>${options[3]}</label>
        <input type='radio' id='e' value='AnswerE'/>
        <label for='AnswerE'>${options[4]}</label>
        <button type='check' id='check'>Check Answer</button
        </form>`;
    return questionHtml;
  }

  function getStartHtml() {
    const a =`
      <form class="quiz" methode="post">
      <fieldset name='quiz'>
      <ledgend>Get Started</ledgend>
      <button id='begin' type='go'>Quiz Time</button>
      `;
    return a;
  }

  function getEndHtml() {
    const a =`
      <form class="quiz" methode="post">
      <fieldset name='quiz'>
      <ledgend>Get Started</ledgend>
      <button id='restart' type='go'>Quiz Time</button>
      `;
    return a;
  }

  function getWrongHtml() {
    const a =`
        <form class="quiz" methode="post">
        <fieldset name='quiz'>
        <ledgend>Quiz</ledgend>
        <p>Incorrect :(</p>
        <button class='next' type='go'>Next Question</button>
        `;
    return a;
  }

  function getCorrectHtml() {
    const a =`
      <form class="quiz" methode="post">
      <fieldset name='quiz'>
      <ledgend>Quiz</ledgend>
      <p>Correct!</p>
      <button class='Next' type='go'>Next Question</button>
      `;
    return a;
  }
  
  //updates the html inside of main
  function updateHtml(htmlCode) {
    $('main').html(htmlCode);
  }

  //function update score
  function updateScore() {
    return score++;
    //could update score html here
  }

  //check answer function
  function isRight(choice, answer) {
    return true; //will need to fix this later, to check if answer is correct
  }
}

main();