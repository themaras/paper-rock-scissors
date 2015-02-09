$(document).ready(function () {

    //User selects "paper"
    $('#paperB').one("click", function () {
        $('.paperP').show();
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
        $('.rockP').show();
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
        $('.scissorsP').show();
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