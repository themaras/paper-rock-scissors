$(document).ready(function () {

    //User selects "paper"
    $('#paperB').one("click", function () {
        $('.paperP').fadeIn('slow');
        compChoice();
        $('.makeChoice').hide();
        if (computerChoice === "rock") {
            setFeedback("You win!");
        } else if (computerChoice === "scissors") {
            setFeedback("Computer wins!");
        } else {
            setFeedback("It's a tie!");
        }
        $('#rockB').hide();
        $('#scissorsB').hide();
    });

    //User selects "rock"
    $('#rockB').one("click", function () {
        $('.rockP').fadeIn('slow');
        compChoice();
        $('.makeChoice').hide();
        if (computerChoice === "scissors") {
            setFeedback("You win!");
        } else if (computerChoice === "paper") {
            setFeedback("Computer wins!");
        } else {
            setFeedback("It's a tie!");
        }
        $('#paperB').hide();
        $('#scissorsB').hide();
    });

    //User selects "scissors"
    $('#scissorsB').one("click", function () {
        $('.scissorsP').fadeIn('slow');
        compChoice();
        $('.makeChoice').hide();
        if (computerChoice === "paper") {
            setFeedback("You win!");
        } else if (computerChoice === "rock") {
            setFeedback("Computer wins!");
        } else {
            setFeedback("It's a tie!");
        }
        $('#paperB').hide();
        $('#rockB').hide();
    });

    //Generate computer option
    var computerChoice = Math.random();

    function compChoice() {
        if (computerChoice < 0.34) {
            computerChoice = "rock";
            $('.rockC').fadeIn('slow');
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
            $('.paperC').fadeIn('slow');
        } else {
            computerChoice = "scissors";
            $('.scissorsC').fadeIn('slow');
        }
        console.log("Computer: " + computerChoice);
    }

    /*--- Set the feedback ---*/
    function setFeedback(feedback) {
        $('.feedback').text(feedback);
    }
});