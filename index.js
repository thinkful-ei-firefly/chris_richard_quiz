'use strict';
function submitHandle(){

  let dataSet = {
    q1: {
      text:'What city has two Presidents buried in a church?',
      options: ['New York, N.Y.', 'Sacramento, CA.', 'Quincy, MA.', 'Santa Fe, N.M.', 'Denver, CO.'],
      answer: 'answerC',
    },
    q2: {
      text:'What President wrote the Gettysburg Address',
      options: ['George Washington', 'Chester A. Arthur', 'Franklin Pierce', 'John F. Kennedy', 'Abraham Lincoln'],
      answer: 'answerE',
    },
    q3: {
      text:'Who was the 5th President?',
      options: ['Andrew Jackson', 'Optimus Prime', 'James Madison', 'James Monroe', 'John Quincy Adams'],
      answer: 'answerD',
    },
    q4: {
      text:'question4: d is correct',
      options: ['a', 'b', 'c', 'd', 'e'],
      answer: 'answerD',
    },
    q5: {
      text:'question5: e is correct',
      options: ['a', 'b', 'c', 'd', 'e'],
      answer: 'answerE',
    },
    q6: {
      text:'question6: a is correct',
      options: ['a', 'b', 'c', 'd', 'e'],
      answer: 'answerA',
      correct: 'Some responce Correct page',
      wrong: 'some wrong text'
    },
    q7: {
      text:'question7: b is correct',
      options: ['a', 'b', 'c', 'd', 'e'],
      answer: 'answerB',
    },
    q8: {
      text:'question8: c is correct',
      options: ['a', 'b', 'c', 'd', 'e'],
      answer: 'answerC',
    },
    q9: {
      text:'question9: d is correct',
      options: ['a', 'b', 'c', 'd', 'e'],
      answer: 'answerD',
    },
    q10: {
      text:'question10: e is correct',
      options: ['a', 'b', 'c', 'd', 'e'],
      answer: 'answerE',
    }
  };

  let questionNum = 0;
  let score = 0;

  //button press listener
  $('main').submit(e => {
    e.preventDefault();
    let imgId = $(e.target).attr('id');
    if (imgId === 'begin') {
      updateMain(getQuestionHtml(dataSet[Object.keys(dataSet)[questionNum]].text, dataSet[Object.keys(dataSet)[questionNum]].options));
      questionNumTextUpdate();
      $('#score').html(`Score: ${score}`);
    }
    else if (imgId === 'check') {
      
      // get the users input choice
      const choice = $('input[name=\'quiz\']:checked').val();
      
      // get the answer from the dataSet
      const answer = dataSet[Object.keys(dataSet)[questionNum]].answer;
      
      //compair if true go to correct, if false go to wrong
      questionNumUpdate();
      if (choice === answer) {
        scoreUpdate();
        $('#score').html(`Score: ${score}`);
        updateMain(getCorrectHtml());
      } 
      else {
        updateMain(getWrongHtml());
      }
    }
    else if (imgId === 'next') {
      if (questionNum < Object.keys(dataSet).length) {
        //update to the next question
        updateMain(getQuestionHtml(dataSet[Object.keys(dataSet)[questionNum]].text, dataSet[Object.keys(dataSet)[questionNum]].options));
        questionNumTextUpdate();
      }
      else {
        updateMain(getEndHtml());
        $('#question').html('');
      }
    }
    else if (imgId === 'restart') {
      updateMain(getStartHtml());
      questionNumUpdate(true);
      scoreUpdate(true);
      $('#score').html(``);
      return questionNum = 0;
    }
  });

  function getQuestionHtml(question, options) {
    const questionHtml = `
        <form id='check' method='post' action="/some-server-endpoint">
        <h2>${question}</h2>
        <p>
        <input type='radio' id='choiceA' 
          name='quiz' value='answerA'/>
        <label for='AnswerA'>${options[0]}</label></br>
        <input type='radio' id='choiceB'
          name='quiz' value='answerB'/>
        <label for='AnswerB'>${options[1]}</label></br>
        <input type='radio' id='choiceC'
          name='quiz' value='answerC'/>
        <label for='AnswerC'>${options[2]}</label></br>
        <input type='radio' id='choiceD'
          name='quiz' value='answerD'/>
        <label for='AnswerD'>${options[3]}</label></br>
        <input type='radio' id='choiceE'
          name='quiz' value='answerE'/>
        <label for='AnswerE'>${options[4]}</label></br>
        </p>
        <button type='check' id='check'>Check Answer</button
        </form>`;
    return questionHtml;
  }

  function getStartHtml() {
    const a =`
      <form id="begin" action="/some-server-endpoint">
      <p>Are You Ready to Get Started?</p>
      <button type="submit">Start Quiz</button>
      </form>`;
    return a;
  }

  function getEndHtml() {
    const a =`
    <form id="restart" action="/some-server-endpoint">
    <p>This is the End of the quiz. You did great!!!</p>
    <p>Your score is ${score} out of ${Object.keys(dataSet).length}</p>
    <p>Would you like to play again</p>
    <button type="submit">Let's play Again!!!</button>
    </form>`;
    return a;
  }

  function getWrongHtml() {
    const a =`<form id='next' method='post' action="/some-server-endpoint">
    <h2>That's Incorrect :(</h2>
    <button type='check' id='check'>Next Question</button
    </form>`;
    return a;
  }

  function getCorrectHtml() {
    const a =`<form id='next' method='post' action="/some-server-endpoint">
    <h2>Great! You got it right!</h2>
    <button type='check' id='check'>Next Question</button
    </form>`;
    return a;
  }
  
  //updates the html inside of main
  function updateMain(htmlCode) {
    $('main').html(htmlCode);
  }

  //Updates score variable
  function scoreUpdate(reset = false) {
    if (reset) {
      score = 0;
      return score;
    }
    return score++;
  }

  //updates questionNum variable
  function questionNumUpdate(reset = false) {
    if (reset){
      questionNum = 0;
      return questionNum;
    }
    return questionNum++;

  }

  function questionNumTextUpdate() {
    let a = `Question ${questionNum + 1} of ${Object.keys(dataSet).length}`;
    $('#question').html(a);
  }
}

submitHandle();



/*Things left to do
  
  make choosing a radio button required

*/