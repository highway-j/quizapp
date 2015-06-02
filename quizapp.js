$(document).ready(function(){
	// Default variables
	var questions = [{
        question: "Who is the greatest NBA player of all time?",
        choices: ["Michael Jordan", "Magic Johnson", "Lebron James", "Kobe Bryant"],
        questionNumber: 0,
        correct : 0,
        },
        {
        question: "What is the record for most points in a single game by a single player in the NBA?",
        choices: ["57", "82", "93", "100"],
        questionNumber: 1,
        correct : 3,
        },
        {
        question: "What is the record for most points in a quarter by a single player in the NBA??",
        choices: ["32", "37", "40", "29"],
        questionNumber: 2,
        correct : 1,
        },
        {
        question: "Who were the players who scored 100 points in a game and 37 points in a quarter respectively?",
        choices: ["Michael Jordan and Larry Bird", "Kobe Bryant and Lebron James", "Wilt Chamberlain and Klay Thompson", "Hakeem Olajuwon and Karl Malone"],
        questionNumber: 3,
        correct : 2,
        },
        {
        question: "What team did both of those players play for?",
        choices: ["Bulls", "Rockets", "Lakers", "Warriors"],
        questionNumber: 4,
        correct : 3,
    }];

    var currentQuestion = 0;
    var numberCorrect = 0;

	function checkAnswer() {
		var answer = $("input[type='radio']:checked").val();
		if (answer == questions[currentQuestion].correct) {
			numberCorrect+=1;
		} else {
            console.log('Question ' + currentQuestion + ' incorrect');
        }
	};

	function nextQuestion() {
		if (currentQuestion < 5) {
            $('.questionBox').remove();
            $('input.option').remove();
            $('li').remove();
            var loadQuestion = '<div class="questionBox"><p>' + questions[currentQuestion].question + '</p></div>';
            var loadAnswers = '<li><input type="radio" name="option" class="option" value="0"><span class="answers">' + questions[currentQuestion].choices[0] + '</span></li><li><input type="radio" name="option" class="option" value="1"><span class="answers">' + questions[currentQuestion].choices[1] + '</span></li><li><input type="radio" name="option" class="option" value="2"><span class="answers">' + questions[currentQuestion].choices[2] + '</span></li><li><input type="radio" name="option" class="option" value="3"><span class="answers">' + questions[currentQuestion].choices[3] + '</span></li>';
            $('section.question').html(loadQuestion);
            $('ul.answerList').html(loadAnswers);
        } else {
            $('.questionBox').remove();
            $('input.option').remove();
            $('li').remove();
            $('.heading').css('display', 'none');
            $('button#submit').css('display', 'none');
            $('section.question').html('<p>Congratulations! You scored ' + numberCorrect + ' out of 5!</p>');
        }
	};

    function questionNumber() {
        $('span.questionNumber').html(currentQuestion + 1);
    };

    $('button#submit').click(function(){
        checkAnswer();
        currentQuestion++;
        nextQuestion();
        questionNumber();
    });


    $('button#retry').click(function(){
        currentQuestion = 0;
        numberCorrect = 0;
        var loadQuestion = '<div class="questionBox"><p>' + questions[currentQuestion].question + '</p></div>';
        var loadAnswers = '<li><input type="radio" name="option" class="option" value="0"><span class="answers">' + questions[currentQuestion].choices[0] + '</span></li><li><input type="radio" name="option" class="option" value="1"><span class="answers">' + questions[currentQuestion].choices[1] + '</span></li><li><input type="radio" name="option" class="option" value="2"><span class="answers">' + questions[currentQuestion].choices[2] + '</span></li><li><input type="radio" name="option" class="option" value="3"><span class="answers">' + questions[currentQuestion].choices[3] + '</span></li>';
        $('section.question').html(loadQuestion);
        $('ul.answerList').html(loadAnswers);
        $('button#submit').css('display', 'block');
        $('.heading').css('display', 'block');
        $('span.questionNumber').html(currentQuestion + 1);
    });

});