/*Add your JavaScript here*/

/*Store the scores for each era*/
var fearlessScore = 0;

var speakNowScore = 0;

var redScore = 0;

var nineteenEightyNineScore = 0;

var reputationScore = 0;

var folkloreScore = 0;

/*Store HTML: elements using the DOM*/
var result = document.getElementById("result");

/*Restart button using the DOM*/
var restart = document.getElementById("restart");

/*Store the number of answers clicked on*/
var questionCount = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");
var q1a6 = document.getElementById("q1a6");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");
var q2a6 = document.getElementById("q2a6");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");
var q3a6 = document.getElementById("q3a6");

/*Listen for click on answer buttons and call function if clicked */

q1a1.addEventListener("click", red);
q1a2.addEventListener("click", speakNow);
q1a3.addEventListener("click", fearless);
q1a4.addEventListener("click", nineteenEightyNine);
q1a5.addEventListener("click", reputation);
q1a6.addEventListener("click", folklore);

q2a1.addEventListener("click", reputation);
q2a2.addEventListener("click", nineteenEightyNine);
q2a3.addEventListener("click", red);
q2a4.addEventListener("click", fearless);
q2a5.addEventListener("click", speakNow);
q2a6.addEventListener("click", folklore);

q3a1.addEventListener("click", fearless);
q3a2.addEventListener("click", red);
q3a3.addEventListener("click", nineteenEightyNine);
q3a4.addEventListener("click", reputation);
q3a5.addEventListener("click", folklore);
q3a6.addEventListener("click", speakNow);

restart.addEventListener("click", restartQuiz);

function red(){
  redScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " redScore = " +redScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }

}

function speakNow(){
  speakNowScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " speakNowScore = " +speakNowScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }

}

function fearless(){
  fearlessScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " fearlessScore = " +fearlessScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }

}

function nineteenEightyNine(){
  nineteenEightyNineScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " nineteenEightyNineScore = " +nineteenEightyNineScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }

}

function reputation(){
  reputationScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " reputationScore = " +reputationScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }

}

function folklore(){
  folkloreScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " folkloreScore = " +folkloreScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }

}

/*Update quiz result*/
function updateResult(){
    if (redScore >=2){
      result.innerHTML = "You should listen to Red! Your vivid personality matches perfectly with songs like I Knew You Were Trouble, We Are Never Ever Getting Back Together, Starlight, and of course, Red!"
      console.log("You should listen to Red! Your vivid personality matches perfectly with songs like I Knew You Were Trouble, We Are Never Ever Getting Back Together, Starlight, and of course, Red!");
     } else if (speakNowScore >=2){
       result.innerHTML = "You should listen to Speak Now!If anyone knew all the lyrics to Sparks Fly, Haunted, Mine, and Mean, it'd undoubtedly be you."
        console.log("You should listen to Speak Now! If anyone knew all the lyrics to Sparks Fly, Haunted, Mine, and Mean, it'd undoubtedly be you.");
     } else if (fearlessScore >=2){
       result.innerHTML = "You should listen to Fearless! You'd definetly listen to Love Story, You Belong With Me, Forever & Always, and The Way I Loved You on repeat."
       console.log("You should listen to Fearless! You'd definetly listen to Love Story, You Belong With Me, Forever & Always, and The Way I Loved You on repeat.");
     } else if (nineteenEightyNineScore >=2){
       result.innerHTML = "You should listen to 1989! Blank Space, Wildest Dreams, Bad Blood, and All You Had to Do Was Stay are must-have for your playlist!"
        console.log("You should listen to 1989! Blank Space, Wildest Dreams, Bad Blood, and All You Had to Do Was Stay are must-have for your playlist!");
     } else if (reputationScore >=2){
       result.innerHTML = "You should listen to reputation! You're definetly the most compatible with this iconic era that features bad b*tch songs like Look What You Made Me Do, Delicate, End Game, and ...Ready For It?."
        console.log("You should listen to reputation! You're definetly the most compatible with this iconic era that features bad b*tch songs like Look What You Made Me Do, Delicate, End Game, and ...Ready For It?.");
     } else if (folkloreScore >=2){
       result.innerHTML = "You should listen to folklore! Is your favorite season autumn Could you spend all day with a good book or love being surrounded by nature? Well if yes, then you'd adore exile, august, cardigan, and the last great american dynasty."
        console.log("You should listen to folklore! Is your favorite season autumn Could you spend all day with a good book or love being surrounded by nature? Well if yes, then you'd adore exile, august, cardigan, and the last great american dynasty.");
     }
}

if (redScore >= 2){
  console.log("You should listen to Red! Your vivid personality matches perfectly with songs like I Knew You Were Trouble, We Are Never Ever Getting Back Together, Starlight, and of course, Red!");
}

if (speakNowScore >= 2){
  console.log("You should listen to Speak Now! If anyone knew all the lyrics to Sparks Fly, Haunted, Mine, and Mean, it'd undoubtedly be you.")
}

if (fearlessScore >= 2){
  console.log("You should listen to Fearless! You'd definetly listen to Love Story, You Belong With Me, Forever & Always, and The Way I Loved You on repeat.")
}

if (nineteenEightyNineScore >= 2){
  console.log("You should listen to 1989! Blank Space, Wildest Dreams, Bad Blood, and All You Had to Do Was Stay are must-have for your playlist!")
}

if (reputationScore >= 2){
  console.log("You should listen to reputation! You're definetly the most compatible with this iconic era that features bad b*tch songs like Look What You Made Me Do, Delicate, End Game, and ...Ready For It?.")
}

if (folkloreScore >= 2){
  console.log("You should listen to folklore! Is your favorite season autumn Could you spend all day with a good book or love being surrounded by nature? Well if yes, then you'd adore exile, august, cardigan, and the last great american dynasty.")
}


function restartQuiz() {
  result.innerHTML = "You should listen to...";
  questionCount = 0;
  redScore = 0;
  speakNowScore = 0;
  fearlessScore = 0;
  nineteenEightyNineScore = 0;
  reputationScore = 0;
  folkloreScore = 0;
  console.log("questionCount = " + questionCount + "\t" + "redScore = " + redScore + "\t" + "speakNowScore = " + speakNowScore + "\t" + "fearlessScore = " + fearlessScore + "\t" + "nineteenEightyNineScore = " + nineteenEightyNineScore + "\t" + "reputationScore = " + reputationScore + "\t" + "folkloreScore = " + folkloreScore);

  if (questionCount == 0){
    console.log("The Quiz is Reset!");
  }

}


