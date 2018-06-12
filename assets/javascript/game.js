var crystals = $("#crystals");

var counter = 0;
var wins = 0;
var losses = 0;
var randNum;
var randCrysNum;
var imageCrystal;
var imageArr = [
    'assets/images/amethyst.jpg',
    'assets/images/pyrite.jpg',
    'assets/images/quartz.jpg',
    'assets/images/tanzanite.jpg'];

function startGame() {

    //calculates random number to guess
    randNum = Math.floor(Math.random() * 101) + 19;
    $("#number-to-guess").text(randNum);

    //calculates random numbers for crystals
    for (var i = 0; i < 4; i++) {

        randCrysNum = Math.floor(Math.random() * 11) + 1;
        //console.log(randCrysNum);

        imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        // imageCrystal.attr("src", "assets/images/amethyst.jpg");
        imageCrystal.attr("data-crystalvalue", randCrysNum);
        imageCrystal.css({
            "background-image": "url(" + imageArr[i] + ")",
            "background-size": "cover"
        });
        crystals.append(imageCrystal);
    }
}

startGame();

//click event to capture values
crystals.on("click", ".crystal-image", function () {

    // console.log($(this).attr('data-crystalvalue'));
    var crystalValue = ($(this).attr("data-crystalvalue")); //pulls value of crystal
    crystalValue = parseInt(crystalValue); //converts string elemtn to interger
    counter += crystalValue;
    console.log(counter);
    console.log(crystalValue);

    // alert("New score: " + counter);
    $("#score").text(counter);


    if (counter === randNum) {
        alert("You win!");
        wins++;

        $("#wins").text(wins);

        restartGame();
    }
    else if (counter >= randNum) {
        alert("You lose!!");
        losses++;
        //alert("# of losses: " + losses);
        // console.log(losses);
        $("#losses").text(losses);

        restartGame();
    }

});

function restartGame() {

    counter = 0;
    crystals.empty(imageCrystal);
    $("#score").empty(counter);
  
    startGame();
}