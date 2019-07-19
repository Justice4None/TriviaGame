// Initialize Variables

/*Trivia Bank */

const questions = {
    rpgs: [{
        question: "When was the first Fallout game released?",
        answers: {
            a: "1989",
            b: "1994",
            c: "1997",
            d: "2001"
        },
        correctAnswer: "c"
    },
    {
        question: "What company created the Elder Scrolls game series?",
        answers: {
            a: "Interplay Studios",
            b: "Obsidian Entertainment",
            c: "BioWare",
            d: "Bethesda Game Studios"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the setting of Pillars of Eternity II?",
        answers: {
            a: "The Deadfire Archipelago",
            b: "The Aedyr Empire",
            c: "Dyrwood",
            d: "Old Valia"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the title held by the protagonist in The Elder Scrolls V: Skyrim?",
        answers: {
            a: "Dragonborn",
            b: "The Champion of Cyrodiil",
            c: "The Nerevarine",
            d: "The Hero of Kvatch"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name of your player character in Assassin's Creed?",
        answers: {
            a: "Ezio Auditore da Firenze",
            b: "Altaïr Ibn-LaʼAhad",
            c: "Aveline de Grandpré",
            d: "Alexios"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the basic plot summary for Fallout: New Vegas?",
        answers: {
            a: "You happily live in a Vault, until one day your father leaves and throws the Vault into a state of panic. You follow his trail, hoping to find answers about the past.",
            b: "You take refuge in a Vault from the nuclear onslaught outside, but you're cryogenically frozen in a sick experiment run by Vault-Tec. You wake up to find your infant son missing and your spouse dead. You set out on a quest to find them.",
            c: "You leave your Vault to find a replacement water purification chip before your people run out of clean drinking water. Along the way, you uncover a sinister plan to assimilate all human life into a 'grand plan'.",
            d: "You are a courier, on your way to make an important delivery, when you are shot in the head. You're dug up and nursed back to health, and begin your quest for vengeance and answers."
        },
        correctAnswer: "d"
    },
    {
        question: "Who are the two warring factions in The Elder Scrolls V: Skyrim?",
        answers: {
            a: "The Stormcloaks and the Aldmeris Dominion",
            b: "The Empire and the Aldmeris Dominion",
            c: "The Empire and the Stormcloaks",
            d: "The Empire, the Stormcloaks, and the Aldmeris Dominion"
        },
        correctAnswer: "c"
    },
    {
        question: "In 2003, what company accquired the rights to the Fallout franchise?",
        answers: {
            a: "Black Isle Studios",
            b: "Obsidian Entertainment",
            c: "Bethesda Game Studios",
            d: "BioWare"
        },
        correctAnswer: "c"
    },
    {
        question: "What game was developed by BioWare?",
        answers: {
            a: "Pillars of Eternity",
            b: "Assassin's Creed",
            c: "Dragon's Dogma: Darkness Arisen",
            d: "Mass Effect"
        },
        correctAnswer: "d"
    },
    {
        question: "In what year was the last game in the S.T.A.L.K.E.R. trilogy released?",
        answers: {
            a: "2007",
            b: "2009",
            c: "2012",
            d: "2015"
        },
        correctAnswer: "b"
    }
],
    fps: [{
        question: "What company started the Call of Duty franchise?",
        answers: {
            a: "Treyarch",
            b: "Infinity Ward",
            c: "Sledgehammer Games",
            d: "Dice"
        },
        correctAnswer: "b"
    },
    {
        question: "In what year was Battlefield: 2142 released?",
        answers: {
            a: "2001",
            b: "2006",
            c: "2008",
            d: "2016"
        },
        correctAnswer: "b"
    },
    {
        question: "Who is the main antagonist of Borderlands 2?",
        answers: {
            a: "Colonel Zarpedon",
            b: "Commandant Steele",
            c: "Interplanetary Ninja Assassin Clap-Trap",
            d: "Handsome Jack"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the endgame content in the Destiny franchise called?",
        answers: {
            a: "Quests",
            b: "Grinding",
            c: "Raids",
            d: "Missions"
        },
        correctAnswer: "c"
    },
    {
        question: "What was the first Call of Duty: Nazi Zombies map to be released?",
        answers: {
            a: "Kino der Toten",
            b: "Der Reise",
            c: "Verruckt",
            d: "Nacht der Untoten"
        },
        correctAnswer: "d"
    },
    {
        question: "What company created the Metro game series?",
        answers: {
            a: "Capcom",
            b: "4A Games",
            c: "Ubisoft",
            d: "Rockstar"
        },
        correctAnswer: "b"
    },
    {
        question: "In what year was the ground-breaking Medal of Honor released?",
        answers: {
            a: "1995",
            b: "1998",
            c: "1999",
            d: "2002"
        },
        correctAnswer: "c"
    },
    {
        question: "What publisher was given exclusive development rights for Star Wars by Disney?",
        answers: {
            a: "EA",
            b: "Activision",
            c: "Sony",
            d: "Ubisoft"
        },
        correctAnswer: "a"
    },
    {
        question: "Development studio Crytek was responsible for what ground-breaking shooter?",
        answers: {
            a: "Far Cry",
            b: "Star Wars: Battlefront",
            c: "Battlefield: Bad Company 2",
            d: "Crysis"
        },
        correctAnswer: "d"
    },
    {
        question: "Which popular competitive shooter has taken the world by storm?",
        answers: {
            a: "Overwatch",
            b: "Counter-Strike: Global Offensive",
            c: "Tom Clancy's Rainbow Six: Siege",
            d: "PlayerUnknown's Battlegrounds"
        },
        correctAnswer: "b"
    }

    ],
    general: [{
        question: "Who is Mario's brother?",
        answers: {
            a: "Luigi",
            b: "Wario",
            c: "Waluigi",
            d: "Toadstool"
        },
        correctAnswer: "a"
    },
    {
        question: "Who is the antagonist throughout the Legend of Zelda franchise?",
        answers: {
            a: "Zelda",
            b: "Link",
            c: "Mipha",
            d: "Ganondorf"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the most recent entry in the Legend of Zelda franchise?",
        answers: {
            a: "A Link to the Past",
            b: "Windwaker",
            c: "Breath of the Wild",
            d: "Twilight Princess"
        },
        correctAnswer: "c"
    },
    {
        question: "How many games are there in the Dark Souls franchise?",
        answers: {
            a: "2",
            b: "3",
            c: "6",
            d: "8"
        },
        correctAnswer: "b"
    },
    {
        question: "Who is the original creator of Mario?",
        answers: {
            a: "Shigeru Miyamoto",
            b: "Hideo Kojima",
            c: "Koji Kondo",
            d: "Reggie Fils-Aimé"
        },
        correctAnswer: "a"
    },
    {
        question: "When was the PlayStation released in America?",
        answers: {
            a: "1990",
            b: "1992",
            c: "1995",
            d: "1999"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the highest-selling video game console?",
        answers: {
            a: "Nintendo Wii",
            b: "Sony PlayStation 2",
            c: "Nintendo DS",
            d: "Microsoft Xbox 360"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the highest selling video game of all time?",
        answers: {
            a: "Pokémon Red/Green/Blue/black",
            b: "Grand Theft Auto V",
            c: "Minecraft",
            d: "Tetris"
        },
        correctAnswer: "c"
    },
    {
        question: "When was the hugely popular World of Warcraft released?",
        answers: {
            a: "2004",
            b: "2009",
            c: "2011",
            d: "2013"
        },
        correctAnswer: "a"
    },
    {
        question: "When was the earliest known video game made?",
        answers: {
            a: "1945",
            b: "1950",
            c: "1967",
            d: "1978"
        },
        correctAnswer: "b"
    },
       
    ]}


// Variables
const gameDiv = $('#game');
const quizThemeDiv = $('#quiz-theme');
const startButton = $('#start');
const timerDiv = $('#timer');
const choicesDiv = $('#choices');
const currentQuestionDiv = $('#current-question');
var theme;
var counter;
var updater;
var time = 10;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
const constructedQs = [];
const constructedAs = [];
const correctArray = [];
var currentQuestion;
var currentQuestionNumber = 1;
var playerchoice = '';
var currentCorrectAnswer = '';

// Functions

resetTimer = () => {
    time = 30;
}
startTimer = () => {
    updater = setInterval(updateTimer, 1000);
    counter = setInterval(count, 1000);
}
stopTimer = () => {
    clearInterval(counter);
    clearInterval(updateTimer);
}
count = () => {
    time--;
    if (time > 0) {
        updateTimer();
    } else {
        stopTimer();
        updateTimer();
    }
}
updateTimer = () => {
    console.log(time);
    timerDiv.empty().html("Time remaining:<br>" + time);
}

startGame = () => {
    // Click the start button to begin game
    $(startButton).on('click', function () {
        console.log('hello')
        startButton.hide(500);
        window.setTimeout(function () {
            gameDiv.slideDown(100);
        }, 500);
        window.setTimeout(function () {
            quizThemeDiv.slideDown(1500);
        }, 500)
    })
};

     // Choose a video game for the questions
    /*RPGs*/
    $('#rpgs').on('click', function () {
        build("rpgs");
        quizThemeDiv.slideUp(1000);
        window.setTimeout(function () {
            currentQuestionDiv.show(1500);
            choicesDiv.show(1500);
            timerDiv.show(1500);
        }, 1000);
        gameDiv.css({
            backgroundColor: "moccasin"
        });
        playGame();
    });

    /*FPS Games*/
    $('#fps').on('click', function () {
        build("fps");
        quizThemeDiv.slideUp(1000);
        window.setTimeout(function () {
            currentQuestionDiv.show(1500);
            choicesDiv.show(1500);
            timerDiv.show(1500);
        }, 1000);
        gameDiv.css({
            backgroundColor: "lightcoral"
        });
        playGame();
    });

    /*General games*/
    $('#general').on('click', function () {
        build("general");
        quizThemeDiv.slideUp(1000);
        window.setTimeout(function () {
            currentQuestionDiv.show(1500);
            choicesDiv.show(1500);
            timerDiv.show(1500);
        }, 1000);
        gameDiv.css({
            backgroundColor: "aquamarine"
        });
        playGame();
    });

// Reset game scores
resetGame = () => {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
}

// Build an array with the chosen question theme
build = (theme) => {

    if (theme === "rpgs") {

        // Build RPG theme questions and answers array

        question1 = questions.rpgs[0].question;
        question2 = questions.rpgs[1].question;
        question3 = questions.rpgs[2].question;
        question4 = questions.rpgs[3].question;
        question5 = questions.rpgs[4].question;
        question6 = questions.rpgs[5].question;
        question7 = questions.rpgs[6].question;
        question8 = questions.rpgs[7].question;
        question9 = questions.rpgs[8].question;
        question10 = questions.rpgs[9].question;

        constructedQs.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10);

        answers1 = questions.rpgs[0].answers;
        answers2 = questions.rpgs[1].answers;
        answers3 = questions.rpgs[2].answers;
        answers4 = questions.rpgs[3].answers;
        answers5 = questions.rpgs[4].answers;
        answers6 = questions.rpgs[5].answers;
        answers7 = questions.rpgs[6].answers;
        answers8 = questions.rpgs[7].answers;
        answers9 = questions.rpgs[8].answers;
        answers10 = questions.rpgs[9].answers;

        constructedAs.push(answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10);
        console.log(constructedAs);        
        
        correctAnswer1 = questions.rpgs[0].correctAnswer;
        correctAnswer2 = questions.rpgs[1].correctAnswer;
        correctAnswer3 = questions.rpgs[2].correctAnswer;
        correctAnswer4 = questions.rpgs[3].correctAnswer;
        correctAnswer5 = questions.rpgs[4].correctAnswer;
        correctAnswer6 = questions.rpgs[5].correctAnswer;
        correctAnswer7 = questions.rpgs[6].correctAnswer;
        correctAnswer8 = questions.rpgs[7].correctAnswer;
        correctAnswer9 = questions.rpgs[8].correctAnswer;
        correctAnswer10 = questions.rpgs[9].correctAnswer;

        correctArray.push(correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5, correctAnswer6, correctAnswer7, correctAnswer8, correctAnswer9, correctAnswer10);
        console.log(correctArray);

    } else if (theme === "fps") {

        // Build FPS theme questions and answers arrays
        question1 = questions.fps[0].question;
        question2 = questions.fps[1].question;
        question3 = questions.fps[2].question;
        question4 = questions.fps[3].question;
        question5 = questions.fps[4].question;
        question6 = questions.fps[5].question;
        question7 = questions.fps[6].question;
        question8 = questions.fps[7].question;
        question9 = questions.fps[8].question;
        question10 = questions.fps[9].question;

        constructedQs.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10);

        answers1 = questions.fps[0].answers;
        answers2 = questions.fps[1].answers;
        answers3 = questions.fps[2].answers;
        answers4 = questions.fps[3].answers;
        answers5 = questions.fps[4].answers;
        answers6 = questions.fps[5].answers;
        answers7 = questions.fps[6].answers;
        answers8 = questions.fps[7].answers;
        answers9 = questions.fps[8].answers;
        answers10 = questions.fps[9].answers;

        constructedAs.push(answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10);
        console.log(constructedAs);

        correctAnswer1 = questions.fps[0].correctAnswer;
        correctAnswer2 = questions.fps[1].correctAnswer;
        correctAnswer3 = questions.fps[2].correctAnswer;
        correctAnswer4 = questions.fps[3].correctAnswer;
        correctAnswer5 = questions.fps[4].correctAnswer;
        correctAnswer6 = questions.fps[5].correctAnswer;
        correctAnswer7 = questions.fps[6].correctAnswer;
        correctAnswer8 = questions.fps[7].correctAnswer;
        correctAnswer9 = questions.fps[8].correctAnswer;
        correctAnswer10 = questions.fps[9].correctAnswer;

        correctArray.push(correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5, correctAnswer6, correctAnswer7, correctAnswer8, correctAnswer9, correctAnswer10);
        console.log(correctArray);

    } else if (theme === "general") {

        // Build general theme questions and answers arrays
        question1 = questions.general[0].question;
        question2 = questions.general[1].question;
        question3 = questions.general[2].question;
        question4 = questions.general[3].question;
        question5 = questions.general[4].question;
        question6 = questions.general[5].question;
        question7 = questions.general[6].question;
        question8 = questions.general[7].question;
        question9 = questions.general[8].question;
        question10 = questions.general[9].question;

        constructedQs.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10);

        answers1 = questions.general[0].answers;
        answers2 = questions.general[1].answers;
        answers3 = questions.general[2].answers;
        answers4 = questions.general[3].answers;
        answers5 = questions.general[4].answers;
        answers6 = questions.general[5].answers;
        answers7 = questions.general[6].answers;
        answers8 = questions.general[7].answers;
        answers9 = questions.general[8].answers;
        answers10 = questions.general[9].answers;

        constructedAs.push(answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10);
        console.log(constructedAs);

        correctAnswer1 = questions.general[0].correctAnswer;
        correctAnswer2 = questions.general[1].correctAnswer;
        correctAnswer3 = questions.general[2].correctAnswer;
        correctAnswer4 = questions.general[3].correctAnswer;
        correctAnswer5 = questions.general[4].correctAnswer;
        correctAnswer6 = questions.general[5].correctAnswer;
        correctAnswer7 = questions.general[6].correctAnswer;
        correctAnswer8 = questions.general[7].correctAnswer;
        correctAnswer9 = questions.general[8].correctAnswer;
        correctAnswer10 = questions.general[9].correctAnswer;

        correctArray.push(correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5, correctAnswer6, correctAnswer7, correctAnswer8, correctAnswer9, correctAnswer10);
        console.log(correctArray);
    }
}

// Based on the currentQuestionNumber, display the corresponding question and answer choices from their respective arrays
showQuestion = () => {
    switch (currentQuestionNumber) {
        case 1:
            $('#current-question').empty().html(question1);
            $('#choices').html(
                '<ul><li class="btn btn-black btn-lg animated tada" id="a">' + constructedAs[0].a + '</li><li class="btn btn-black animated flash btn-lg" id="b">' + constructedAs[0].b + '</li><li class="btn btn-lg btn-black animated jello" id="c">' + constructedAs[0].c + '</li><li class="btn btn-black btn-lg animated wobble" id="c">' + constructedAs[0].d +
                '</li></ul>'
            );
            currentCorrectAnswer = correctArray[0];
            currentQuestionNumber++;
            console.log(currentQuestionNumber);
            break;
        case 2:
            $('#current-question').empty().html(question2);
            $('#choices').html(
                '<ul><li class="btn btn-black btn-lg animated slideInDown" id="a">' + constructedAs[1].a + '</li><li class="btn btn-black btn-lg animated slideInDown" id="b">' + constructedAs[1].b + '</li><li class="btn btn-black btn-lg animated slideInRight" id="c">' + constructedAs[1].c + '</li><li class="btn btn-black btn-lg animated slideInLeft" id="d">' + constructedAs[1].d +
                '</li></ul>'
            )
            currentCorrectAnswer = correctArray[1];
            currentQuestionNumber++;
            break;
        case 3:
            $('#current-question').empty().html(question3);
            $('#choices').html(
                '<ul><li class="btn btn-black btn-lg animated rubberBand" id="a">' + constructedAs[2].a + '</li><li class="btn btn-black btn-lg animated shake" id="b">' + constructedAs[2].b + '</li><li class="btn btn-black btn-lg animated headShake" id="c">' + constructedAs[2].c + '</li><li class="btn btn-black btn-lg animated bounceIn" id="d">' + constructedAs[2].d +
                '</li></ul>'
            );
            currentCorrectAnswer = correctArray[2];
            currentQuestionNumber++;
            break;
        case 4:
            $('#current-question').empty().html(question4);
            $('#choices').html(
                '<ul><li class="btn btn-black btn-lg animated bounceInDown" id="a">' + constructedAs[3].a + '</li><li class="btn btn-black btn-lg animated bounceInUp" id="b">' + constructedAs[3].b + '</li><li class="btn btn-black btn-lg animated bounceInRight" id="c">' + constructedAs[3].c + '</li><li class="btn btn-black btn-lg animated bounceInLeft" id="d">' + constructedAs[3].d +
                '</li></ul>'
            );
            currentCorrectAnswer = correctArray[3];
            currentQuestionNumber++;
            break;
        case 5:
            $('#current-question').empty().html(question5);
            $('#choices').html(
                '<ul><li class="btn btn-black btn-lg animated fadeIn" id="a">' + constructedAs[4].a + '</li><li class="btn btn-black btn-lg animated fadeInDownBig" id="b">' + constructedAs[4].b + '</li><li class="btn btn-black btn-lg animated fadeInUpBig" id="c">' + constructedAs[4].c + '</li><li class="btn btn-black btn-lg animated flipInX" id="d">' + constructedAs[4].d +
                '</li></ul>'
            );
            currentCorrectAnswer = correctArray[4];
            currentQuestionNumber++;
            break;
        case 6:
            $('#current-question').empty().html(question6);
            $('#choices').html(
                '<ul><li class="btn btn-black btn-lg animated flipInY" id="a">' + constructedAs[5].a + '</li><li class="btn btn-black btn-lg animated lightSpeedIn" id="b">' + constructedAs[5].b + '</li><li class="btn btn-black btn-lg animated fadeIn" id="c">' + constructedAs[5].c + '</li><li class="btn btn-black btn-lg animated rotateIn" id="d">' + constructedAs[5].d +
                '</li></ul>'
            );
            currentCorrectAnswer = correctArray[5];
            currentQuestionNumber++;
            break;
        case 7:
            $('#current-question').empty().html(question7);
            $('#choices').html(
                '<ul><li class="btn btn-black btn-lg animated rotateInDownLeft" id="a">' + constructedAs[6].a + '</li><li class="btn btn-black btn-lg animated rotateInDownRight" id="b">' + constructedAs[6].b + '</li><li class="btn btn-black btn-lg animated rotateInUpLeft" id="c">' + constructedAs[6].c + '</li><li class="btn btn-lg btn-black animated rotateInUpRight" id="d">' + constructedAs[6].d +
                '</li></ul>'
            );
            currentCorrectAnswer = correctArray[6];
            currentQuestionNumber++;
            break;
        case 8:
            $('#current-question').empty().html(question8);
            $('#choices').html(
                '<ul><li class="btn btn-lg btn-black animated rollIn" id="a">' + constructedAs[7].a + '</li><li class="btn btn-black btn-lg animated zoomIn" id="b">' + constructedAs[7].b + '</li><li class="btn btn-lg btn-black animated zoomInDown" id="c">' + constructedAs[7].c + '</li><li class="btn btn-black btn-lg animated zoomInRight" id="d">' + constructedAs[7].d +
                '</li></ul>'
            );
            currentQuestionNumber++;
            break;
        case 9:
            $('#current-question').empty().html(question9);
            $('#choices').html(
                '<ul><li class="btn btn-black btn-lg animated rollIn" id="a">' + constructedAs[8].a + '</li><li class="btn btn-black btn-lg animated zoomInLeft" id="b">' + constructedAs[8].b + '</li><li class="btn btn-black btn-lg animated tada" id="c">' + constructedAs[8].c + '</li><li class="btn btn-lg btn-black animated flipInX" id="d">' + constructedAs[8].d +
                '</li></ul>'
            );
            currentCorrectAnswer = correctArray[8];
            currentQuestionNumber++;
            break;
        case 10:
            $('#current-question').empty().html(question10);
            $('#choices').html(
                '<ul><li><button class="btn btn-lg btn-black animated rotateIn" id="a" type="button">' + constructedAs[9].a + '</button></li><li><button class="btn btn-black btn-lg animated slideIn" id="b">' + constructedAs[9].b + '</button></li><li><button class="btn btn-black btn-lg animated jello" id="c">' + constructedAs[9].c + '</button></li><li> <button class="btn btn-black btn-lg animated wobble" id="d">' + constructedAs[9].d +
                '</button></li></ul>'
            );
            currentCorrectAnswer = correctArray[9];
            currentQuestionNumber++;
            break;
    }

    // When an answer is clicked, disable the other buttons and run compareAnswers()
    $('#a, #b, #c, #d').click(function () {
        if (this.id == 'a') {
            stopTimer();
            $('#b', '#c', '#d').addClass('disabled');
            playerChoice = 'a';
            compareAnswers(playerChoice);
        } else if (this.id == 'b') {
            stopTimer();
            $('#a', '#c', '#d').addClass('disabled');
            playerChoice = 'b';
            console.log(playerChoice);
            compareAnswers(playerChoice);
        } else if (this.id == 'c') {
            stopTimer();
            $('#a', '#b', '#d').addClass('disabled');
            playerChoice = 'c';
            console.log(playerChoice);
            compareAnswers(playerChoice);
        } else if (this.id == 'd') {
            stopTimer();
            $('#a', '#b', '#c').addClass('disabled');
            playerChoice = 'd';
            console.log(playerChoice);
            compareAnswers(playerChoice);

        }
    });
};

// Check if the playerChoice was correct
compareAnswers = (playerChoice) => {

    console.log("Comparing player choice");
    // If correct, add a point to 'correct' and alert
    if (playerChoice == currentCorrectAnswer) {
        correct++;
        alert("Correct Answer!");
    }
    // Otherwise add a point to 'incorrect' and alert
    else {
        incorrect++;
        alert("Incorrect Answer...");
    }

    // Clear out divs to make room for the next question
    clearDivs();
}

// Clears out all divs and starts the next question
clearDivs = () => {
    timerDiv.empty();
    currentQuestionDiv.empty();
    choicesDiv.empty();
    choicesDiv.html('<ul></ul>');
    playGame();

}

// Check the currentQuestionNumber and run showQuestion; reset the timer
playGame = () => {
    if (currentQuestionNumber < 10) {
        showQuestion(currentQuestionNumber);
        resetTimer();
        startTimer();
    } else {
        $('#current-question').empty().html(
            '<span class="p-2 display-1">End</span><br><h3 class="display-3">Your scores:</h3><br>Correct: ' + correct +
            '<br>Incorrect: ' + incorrect +
            '<br>Unanswered: ' + unanswered
        );

        $('#choices').html(
            '<button class="btn btn-elegant btn-lg" id="restart">Click to Restart</button>'
        );

        $('#restart').click(function () {
            resetGame();
            gameDiv.fadeOut();
            startButton.show();
            startGame();
        });
    }
};

// When the document is ready, populate the start button
$(document).ready(function () {
    startGame();
});
