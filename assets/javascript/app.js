//time remaining displays and counts down 
//when time is over the game is over 
//questions are displayed 
//you can only choose one option at a time 
//if you can answer it all you can click done

//end of game 
//displays counts 
//ALL DONE
//Correct answers
//incorrect answers 
//unanswered  

$(document).ready(function () {
    var questionpool = [
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
    








});