$(document).ready(function () {
    var qPool = [
        {
            question: "What's the most effective Poke ball in the game?",
            choice: ["Great Ball", "Ultra Ball", "Heal Ball", "Master Ball"],
            answer: 3,
        },
        {
            question: "How many gym badges must a traniner collect before challenging the Elite Four?",
            choice: ["2", "5", "8", "10"],
            answer: 2,
        },
        {
            question: "What are the three types of starter Pokemon?",
            choice: ["Fighting, Psychic and Ghost", "Electric, Ground and Poison", "Dragon, Flying and Normal", "Grass, Fire, and Water"],
            answer: 3,
        },
        {
            question: "Who is the god off all Pokemon?",
            choice: ["Bidoof", "Mew", "Pikachu", "Arceus"],
            answer: 3,
        },
        {
            question: "Which Pokemon appears as the mascot of this fandom?",
            choice: ["Pichu", "Pikachu", "Raichu", "Dedenne"],
            answer: 1,
        },
        {
            question: "What is the largest Pokemon?",
            choice: ["Onix", "Joltik", "Wailord", "Rayquaza"],
            answer: 2,
        }];

    var correctCount = 0;
    var wrongCount = 0;
    var unanswered = 0;
    var timer = 15;
    var intervalId;
    var userGuess = "";
    var running = false;
    var qCount = qPool.length;
    var pick;
    var index;
    var holder = [];
    var questionsAsked = [];


    //start game 
    $("#startOver").hide();
    //click start button to start game
    //click start to play  
    $("#start").on("click", function () {
        //on click the button disappears
        $("#start").hide();
        //quiz shows up and timer starts
        runTimer();
        displayQuestion();
        for (var i = 0; i < qPool.length; i++) {
            holder.push(qPool[i]);
        }
    })

    //timer start
    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }

    //timer countdown
    function decrement() {
        $("#timer").html("<h3>Time remaining: " + timer + "</h3>");
        timer--;

        //stop timer if reach 0
        if (timer === 0) {
            unanswered++;
            stop();
            $("#answer").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            nextquestion();
        }
    }

    //timer stop
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
    //randomly pick question in array if not already shown
    //display question and loop though and display possible answers
    function displayQuestion() {
        //generate random index in array
        index = Math.floor(Math.random() * qPool.length);
        while (questionsAsked.indexOf(index) >= 0) {
            index = Math.floor(Math.random() * qPool.length);
        }
        questionsAsked.push(index);
        pick = qPool[index];

        //iterate through answer array and display
        $("#question").html("<h2>" + pick.question + "</h2>");
        for (var i = 0; i < pick.choice.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.choice[i]);
            //assign array position to it so can check answer
            userChoice.attr("data-guessvalue", i);
            $("#answer").append(userChoice);
        }

        //click function to select answer and outcomes
        $(".answerchoice").on("click", function () {
            //grab array position from userGuess
            userGuess = parseInt($(this).attr("data-guessvalue"));

            //correct guess or wrong guess outcomes
            if (userGuess === pick.answer) {
                stop();
                correctCount++;
                userGuess = "";
                $("#answer").html("<p>Correct!</p>");
                nextquestion();

            } else {
                stop();
                wrongCount++;
                userGuess = "";
                $("#answer").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
                nextquestion();
            }
        })
    }
    function nextquestion() {
        //run the score screen if all questions answered
        //end of game 
        //displays counts 
        //Correct answers
        //incorrect answers 
        //unanswered
        //resets timer for each new question
        var newtime = setTimeout(function () {
            $("#answer").empty();
            timer = 15;

            if ((wrongCount + correctCount + unanswered) === qCount) {
                $("#question").empty();
                $("#question").html("<h3>Game Over!  Here's how you did: </h3>");
                $("#answer").append("<h4> Correct: " + correctCount + "</h4>");
                $("#answer").append("<h4> Incorrect: " + wrongCount + "</h4>");
                $("#answer").append("<h4> Unanswered: " + unanswered + "</h4>");
                $("#startOver").show();
                correctCount = 0;
                wrongCount = 0;
                unanswered = 0;

            } else {
                runTimer();
                displayQuestion();
            }
        }, 2000);
    }

    //starts over and starts another game.
    $("#startOver").on("click", function () {
        questionsAsked = [];
        $("#startOver").hide();
        $("#answer").empty();
        $("#question").empty();
        for (var i = 0; i < holder.length; i++) {
            qPool.push(holder[i]);
        }
        runTimer();
        displayQuestion();
    })
});