$(document).ready(function () {

    //User selects "paper"
    $('.paperB').mousedown(function () {
        $('.paperP').show();
        compChoice();
        $('.makeChoice').hide();
        if(computerChoice==="rock"){
        	setFeedback("You win!")
        }else if(computerChoice==="scissors"){
        	setFeedback("Computer wins!")
        }else {
        	setFeedback("It's a tie!")
        }
    });

    //User selects "rock"
    $('.rockB').mousedown(function () {
        $('.rockP').show();
        compChoice();
        $('.makeChoice').hide();
        if(computerChoice==="scissors"){
        	setFeedback("You win!")
        }else if(computerChoice==="paper"){
        	setFeedback("Computer wins!")
        }else {
        	setFeedback("It's a tie!")
        }
    });

    //User selects "scissors"
    $('.scissorsB').mousedown(function () {
        $('.scissorsP').show();
        compChoice();
        $('.makeChoice').hide();
        if(computerChoice==="paper"){
        	setFeedback("You win!")
        }else if(computerChoice==="rock"){
        	setFeedback("Computer wins!")
        }else {
        	setFeedback("It's a tie!")
        }
    });


	var computerChoice = Math.random();

        function compChoice() {
         if (computerChoice < 0.34) {
            computerChoice = "rock";
            $('.rockC').show();
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
            $('.paperC').show();
        } else {
            computerChoice = "scissors";
            $('.scissorsC').show();
        }
        console.log("Computer: " + computerChoice);
    }


        /*--- Set the feedback ---*/
    function setFeedback(feedback) {
        $('.feedback').text(feedback);
    }


});