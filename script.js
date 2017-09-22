var score = 0;
var count = 0;
function jeopardyQuestionC1() {
  var txt;
  var answer = prompt("Question: What building is the school of business located in?", "");

  if (answer == "Tanner Building" || answer == "tanner building" || answer == "TNRB") {
    txt = "Congrats!";
    score += 100;
  } 
  else {
    txt = "Wrong!";
    score -= 100;
  }
  alert(txt);
  count++;
  document.getElementById("C1").innerHTML = "";
  document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;

  if (count == 16) {
    alert("Game Over!  Your final score was: $" + score);
  }
}

function jeopardyQuestionC2() {
  var txt;
  var answer = prompt("Question: What animal is Cosmo?", "");

    if (answer == "A Cougar" || answer == "a cougar" || answer == "cougar" || answer == "Cougar") {
      txt = "Congrats!";
      score += 100;
    } 
    else {
      txt = "Wrong!";
      score -= 100;
    }
    alert(txt);
    count++;
    document.getElementById("C2").innerHTML = "";
    document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;
    
    if (count == 16) {
      alert("Game Over!  Your final score was: $" + score);
    }
  }

function jeopardyQuestionC3() {
  var txt;
  var answer = prompt("Question: When was the last time we beat Utah in the Holy War?", "");

  if (answer == "2009") {
    txt = "Congrats!";
    score += 100;
  } 
  else {
    txt = "Wrong! It was 2009 you casuals.";
    score -= 100;
  }
  alert(txt);
  count++;
  document.getElementById("C3").innerHTML = "";
  document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;
  
  if (count == 16) {
    alert("Game Over!  Your final score was: $" + score);
  }
}

function jeopardyQuestionC4() {
  var txt;
  var answer = prompt("Question: Who is the president of BYU?", "");

  if (answer == "Kevin J Worthen" || answer == "Kevin Worthen" || answer == "President Worthen" || answer == "Kevin J. Worthen") {
    txt = "Congrats!";
    score += 100;
  } 
  else {
    txt = "Wrong! BYU's president is Kevin J. Worthen.";
    score -= 100;
  }
  alert(txt);
  count++;
  document.getElementById("C4").innerHTML = "";
  document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;
  
  if (count == 16) {
    alert("Game Over!  Your final score was: $" + score);
  }
}

function jeopardyQuestionC5() {
  var txt;
  var answer = prompt("Question: What building replaced the Widtsoe Building?", "");

  if (answer == "The Life Science Building" || answer == "the life science building" || answer == "The LSB" || answer == "LSB") {
    txt = "Congrats!";
    score += 200;
  } 
  else {
    txt = "Wrong!";
    score -= 200;
  }
  alert(txt);
  count++;
  document.getElementById("C5").innerHTML = "";
  document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;
  
  if (count == 16) {
    alert("Game Over!  Your final score was: $" + score);
  }
}

function jeopardyQuestionC6() {
  var txt;
  var answer = prompt("Question: How long has Cosmo been BYU's mascot?", "");

  if (answer == "64 Years" || answer == "64 years" || answer == "Since 1953" || answer == "since 1953") {
    txt = "Congrats!";
    score += 200;
  } 
  else {
    txt = "Wrong! He became the school's mascot in 1953, making this his 64th year.";
    score -= 200;
  }
  alert(txt);
  count++;
  document.getElementById("C6").innerHTML = "";
  document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;
  
  if (count == 16) {
    alert("Game Over!  Your final score was: $" + score);
  }
}

function jeopardyQuestionC7() {
  var txt;
  var answer = prompt("Question: How many official sports teams does BYU have?", "");

  if (answer == "19 teams" || answer == "19" || answer == "Nineteen" || answer == "nineteen") {
    txt = "Congrats!";
    score += 200;
  } 
  else {
    txt = "Wrong! BYU has 9 male teams and 10 female teams, making 19 total teams.";
    score -= 200;
  }
  alert(txt);
  count++;
  document.getElementById("C7").innerHTML = "";
  document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;
  
  if (count == 16) {
    alert("Game Over!  Your final score was: $" + score);
  }
}

function jeopardyQuestionC8() {
  var txt;
  var answer = prompt("Question: What is the minimum GPA requirement for full tuition in the college of Physical and Mathematical Sciences?", "");

  if (answer == "3.95" || answer == "3.95 GPA") {
    txt = "Congrats!";
    score += 200;
  } 
  else {
    txt = "Wrong!";
    score -= 200;
  }
  alert(txt);
  count++;
  document.getElementById("C8").innerHTML = "";
  document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;
  
  if (count == 16) {
    alert("Game Over!  Your final score was: $" + score);
  }
}

function jeopardyQuestionC9() {
  var txt;
  var answer = prompt("Question: Which building contains a particle accelerator?", "");

  if (answer == "The Eyering Science Center" || answer == "Eyering Science Center" || answer == "The ESC" || answer == "ESC") {
    txt = "Congrats!";
    score += 300;
  } 
  else {
    txt = "Wrong! BYU's particle accelerator can be found in the basement of the Eyering Science Center.";
    score -= 300;
  }
  alert(txt);
  count++;
  document.getElementById("C9").innerHTML = "";
  document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;
  
  if (count == 16) {
    alert("Game Over!  Your final score was: $" + score);
  }
}

function jeopardyQuestionC10() {
  var txt;
  var answer = prompt("Question: In what year did BYU purchase a pair of cougar cubs to excite fans at athletic events?", "");

  if (answer == "1924" || answer == "In 1924") {
    txt = "Correct! The pair of baby cougars were purchased for fifty cents each!";
    score += 300;
  } 
  else {
    txt = "Wrong! BYU purchased two baby cougars for fifty cents each in 1924 and housed them on the South side of campus until 1929 when they managed to break out of their cages.";
    score -= 300;
  }
  alert(txt);
  count++;
  document.getElementById("C10").innerHTML = "";
  document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;
  
  if (count == 16) {
    alert("Game Over!  Your final score was: $" + score);
  }
}

function jeopardyQuestionC11() {
  var txt;
  var answer = prompt("Question: In what year did BYU win the NCAA football tournament?", "");

  if (answer == "1984" || answer == "In 1984" || answer == "in 1984") {
    txt = "Correct! BYU was the only undefeated team in division 1-A.";
    score += 300;
  } 
  else {
    txt = "Wrong! In 1984, BYU was the only undefeated team at the conclusion of the college football season.";
    score -= 300;
  }
  alert(txt);
  count++;
  document.getElementById("C11").innerHTML = "";
  document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;
  
  if (count == 16) {
    alert("Game Over!  Your final score was: $" + score);
  }
}

function jeopardyQuestionC12() {
  var txt;
  var answer = prompt("Question: What percentage of BYU students are from Utah?", "");

  if (answer == "31%" || answer == "31" || answer == "31 percent") {
    txt = "Correct! Nearly one third of BYU students come from Utah.";
    score += 300;
  } 
  else {
    txt = "Wrong! 31% of BYU students come from Utah, 17% from California, and 7% from Idaho.";
    score -= 300;
  }
  alert(txt);
  count++;
  document.getElementById("C12").innerHTML = "";
  document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;
  
  if (count == 16) {
    alert("Game Over!  Your final score was: $" + score);
  }
}

function jeopardyQuestionC13() {
  var txt;
  var answer = prompt("Question: Which building was constructed over an old cemetary?", "");

  if (answer == "The Maeser Building" || answer == "The MSRB" || answer == "MSRB" || answer == "Maeser Building") {
    txt = "Correct! It's a little creepy, right?";
    score += 400;
  } 
  else {
    txt = "Wrong! The Karl G. Maeser Building was constructed over the old Fort Field cemetary.";
    score -= 400;
  }
  alert(txt);
  count++;
  document.getElementById("C13").innerHTML = "";
  document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;
  
  if (count == 16) {
    alert("Game Over!  Your final score was: $" + score);
  }
}

function jeopardyQuestionC14() {
  var txt;
  var answer = prompt("Question: From where did the Cosmobile originate?", "");

  if (answer == "The Brick Oven" || answer == "Brick Oven" || answer == "brick oven" || answer == "Glee Zumbrennen") {
    txt = "Correct! The Cosmobile was donated by the owner of Brick Oven, Glee Zumbrennen, in 2001.";
    score += 400;
  } 
  else {
    txt = "Wrong! The Cosmobile was donated in 2001 by Brick Oven to make Cosmo more interactive with the community and athletic events.";
    score -= 400;
  }
  alert(txt);
  count++;
  document.getElementById("C14").innerHTML = "";
  document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;
  
  if (count == 16) {
    alert("Game Over!  Your final score was: $" + score);
  }
}

function jeopardyQuestionC15() {
  var txt;
  var answer = prompt("Question: Who wrote the BYU fight song?", "");

  if (answer == "Clyde D. Sandgren" || answer == "Clyde D Sandgren" || answer == "Clyde Sandgren") {
    txt = "Correct! It was written by Clyde D. Sandgren in 1932.";
    score += 400;
  } 
  else {
    txt = "Wrong! The Cougar Fight Song was composed by Clyde D. Sandgren in 1932. However, it was not copyrighted and presented to the University until 1947.";
    score -= 400;
  }
  alert(txt);
  count++;
  document.getElementById("C15").innerHTML = "";
  document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;
  
  if (count == 16) {
    alert("Game Over!  Your final score was: $" + score);
  }
}

function jeopardyQuestionC16() {
  var txt;
  var answer = prompt("Question: What year was the iconic Y created on the mountain East of campus?", "");

  if (answer == "1907" || answer == "In 1907" || answer == "year 1907") {
    txt = "Correct! Y mountain was painted in 1907 by the graduating class of Brigham Young High School.";
    score += 400;
  } 
  else {
    txt = "Wrong! The graduating class of Brigham Young High School painted the Y in 1907, and originally meant to have the letters BYU.";
    score -= 400;
  }
  alert(txt);
  count++;
  document.getElementById("C16").innerHTML = "";
  document.getElementById("T1").innerHTML = "BYU Jeopardy</br>Score: $" + score;
  
  if (count == 16) {
    alert("Game Over!  Your final score was: $" + score);
  }
}