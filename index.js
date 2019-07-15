'use strict';

/*
Things to Add

-add a11y and aria

-Polished and professional look.
*/


let dataSet = {
  q1: {
    text:'What city has two Presidents buried in a church?',
    options: ['New York, N.Y.', 'Sacramento, CA.', 'Quincy, MA.', 'Santa Fe, N.M.', 'Denver, CO.'],
    answer: 'answerC',
    correct: 'Your answer of Quincy, MA is correct!',
    wrong: 'That is incorrect.\n The correct answer is Quincy, MA.'
  },
  q2: {
    text:'What President wrote the Gettysburg Address',
    options: ['George Washington', 'Chester A. Arthur', 'Franklin Pierce', 'John F. Kennedy', 'Abraham Lincoln'],
    answer: 'answerE',
    correct: 'Your answer of Abraham Lincoln is correct',
    wrong: 'That is incorrect.\n The correct answer is Abraham Lincoln.'
  },
  q3: {
    text:'Who was the 5th President of the United States?',
    options: ['Andrew Jackson', 'Optimus Prime', 'James Madison', 'James Monroe', 'John Quincy Adams'],
    answer: 'answerD',
    correct: `James Monroe was the fifth president of the United States, having served in office from 
              1817 to 1825. Many people assume Abraham Lincoln was the fifth president because he appears 
              on the $5 bill. Lincoln was actually the 16th president.`,
    wrong: `The correct answer is James Monroe.\n James Monroe was the fifth president of the United States, 
            having served in office from 1817 to 1825. Many people assume Abraham Lincoln was the fifth 
            president because he appears on the $5 bill. Lincoln was actually the 16th president.`
  },
  q4: {
    text:'What does the “S” in Harry S. Truman’s name stand for?',
    options: ['Stanely', 'Nothing', 'Steven', 'Sherman', 'Samuel'],
    answer: 'answerB',
    correct: `The S in President Truman’s name is actually a compromise his parents made between both of 
              his grandfather’s names, Anderson Shipp Truman and Solomon Young. There is still controversy
              today about whether there should be a period after the S.`,
    wrong: `The correct answer is Nothing!\n The S in President Truman’s name is actually a compromise his parents made between both of 
    his grandfather’s names, Anderson Shipp Truman and Solomon Young. There is still controversy
    today about whether there should be a period after the S.`
  },
  q5: {
    text:'What state produced the most U.S. presidents?',
    options: ['a', 'Virginia', 'c', 'd', 'e'],
    answer: 'answerB',
    correct: `Eight U.S. presidents were born in Virginia, and Ohio was close behind, having produced seven 
              presidents.`,
    wrong: `The correct answer is Virginia. Eight U.S. presidents were born in Virginia, and Ohio was close 
            behind, having produced seven presidents.`,
  },
  q6: {
    text:'Who was the first president to be born in the United States?',
    options: ['a', 'b', 'c', 'Marin Van Buren', 'e'],
    answer: 'answerA',
    correct: `Yes, the Constitution requires the U.S. president be a natural-born citizen, but the first 
              seven presidents were born before the United States gained independence, meaning they were 
              British subjects. Martin Van Buren, the eighth president, was born in New York in 1782.`,
    wrong: `The Correct answer is Martin Van Buren\n Yes, the Constitution requires the U.S. president be 
            a natural-born citizen, but the first seven presidents were born before the United States gained 
            independence, meaning they were British subjects. Martin Van Buren, the eighth president, was 
            born in New York in 1782.`
  },
  q7: {
    text:'How many presidents died in office?',
    options: ['a', 'b', 'c', 'Eight', 'e'],
    answer: 'answerD',
    correct: `The presidents that died while in office were William Henry Harrison, Zachary Taylor, Abraham 
              Lincoln, James A. Garfield, William McKinley, Warren G. Harding, Franklin D. Roosevelt, and John 
              F. Kennedy.`,
    wrong: `The Correct anser is eight.\n The presidents that died while in office were William Henry Harrison, 
            Zachary Taylor, Abraham Lincoln, James A. Garfield, William McKinley, Warren G. Harding, 
            Franklin D. Roosevelt, and John F. Kennedy.`
  },
  q8: {
    text: `Which president served two non-consecutive terms?\n That’s right: One president served twice, with 
          another president in between.`,
    options: ['a', 'b', 'c', 'd', 'Grover Clevaland'],
    answer: 'answerE',
    correct: `President Cleveland served in office from 1885 to 1889 and then again from 1893 to 1897. He was 
              the 22nd and 24th president of the United States.`,
    wrong: `The correct anser is Grover Clevaland. President Cleveland served in office from 1885 to 1889 and 
            then again from 1893 to 1897. He was the 22nd and 24th president of the United States`
  },
  q9: {
    text: 'What year did Alexander Hamilton become president?',
    options: ['a', 'Never', 'c', 'd', 'e'],
    answer: 'answerB',
    correct: `Great Job! Alexander Hamilton was never president; he was just a very well known man that 
              contributed a lot to politics. Though he was never the commander in chief, he did serve as the 
              country’s first secretary of the treasury from 1789 to 1795, as well as found the first U.S. 
              political party, the Federalists.`,
    wrong: `Trick question! Alexander Hamilton was never president; he was just a very well known man that 
            contributed a lot to politics. Though he was never the commander in chief, he did serve as the 
            country’s first secretary of the treasury from 1789 to 1795, as well as found the first U.S. 
            political party, the Federalists.`,
  }
};

let questionNum = 0;
let score = 0;

function submitHandle(){

  //button press listener
  $('main').submit(e => {
    
    e.preventDefault();

    //Get the id of the button pressed.
    //The button id will be different for each section of the quiz.
    //begin , check , next , restart
    let buttonId = $(e.target).attr('id');
    console.log(buttonId);

    //buttonId = begin occures on the start quiz page.
    //When pressed, we will update <main> (contains question text)
    //the question number text and score text.
    if (buttonId === 'begin') {
      updateMain(getQuestionHtml(dataSet[Object.keys(dataSet)[questionNum]].text, dataSet[Object.keys(dataSet)[questionNum]].options));
      questionNumTextUpdate();
      $('#score').html(`Score: ${score}`);
    }

    //buttonId = check occures on any question page.
    //check the answer and go to the correct or wrong page.
    else if (buttonId === 'check') {

      //radio button is required
      if (!$('input[name=\'quiz\']', this).is(':checked')) {
        alert('Please select an answer');
        return false;
      }
      
      // get the users input choice
      const choice = $('input[name=\'quiz\']:checked').val();
      
      // get the answer from the dataSet
      const answer = dataSet[Object.keys(dataSet)[questionNum]].answer;
      
      //compair if true go to correct, if false go to wrong
      if (choice === answer) {
        console.log(dataSet[Object.keys(dataSet)[questionNum]].correct);
        scoreUpdate();
        $('#score').html(`Score: ${score}`);
        updateMain(getCorrectHtml(dataSet[Object.keys(dataSet)[questionNum]].correct));
      } 
      else {
        updateMain(getWrongHtml(dataSet[Object.keys(dataSet)[questionNum]].wrong));
      }

      //update the question to the next one
      questionNumUpdate();
    }

    //buttonId = next is on a wrong or correct answer page.
    else if (buttonId === 'next') {
      //Load the next question, unless it is the last
      if (questionNum < Object.keys(dataSet).length) {
        //update to the next question
        updateMain(getQuestionHtml(dataSet[Object.keys(dataSet)[questionNum]].text, dataSet[Object.keys(dataSet)[questionNum]].options));
        questionNumTextUpdate();
      }
      //load the end of quiz.
      else {
        updateMain(getEndHtml());
        $('#question').html('');
      }
    }

    //buttonId = restart is on the end page
    //when pressed it restarts the quiz.
    else if (buttonId === 'restart') {
      updateMain(getStartHtml());
      questionNumUpdate(true);
      scoreUpdate(true);
      $('#score').html('');
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

  function getWrongHtml(wrongText) {
    const a =`<form id='next' method='post' action="/some-server-endpoint">
    <h2>${wrongText}</h2>
    <button type='check' id='check'>Next Question</button
    </form>`;
    return a;
  }

  function getCorrectHtml(correctText) {
    const a =`<form id='next' method='post' action="/some-server-endpoint">
    <h2>${correctText}</h2>
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

  //updates quesionNum variable
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
