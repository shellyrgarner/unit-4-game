var crystals = $("#crystals");

var counter = 0;
var wins;
var losses;
var randNum;
var numberOptions = [3, 5, 7, 10];

//calculates random number to guess
var randNum = Math.floor(Math.random() * 101) + 19;
$("#number-to-guess").text(randNum);


//calculates random numbers for crystals
for (var i = 0; i < 4; i++) {

    var randCrysNum = Math.floor(Math.random() * 11) + 1;
    console.log(randCrysNum);

    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/amethyst.jpg");
    imageCrystal.attr("data-crystalvalue", randCrysNum);
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    crystals.append(imageCrystal);
}

//click event to capture values
crystals.on("click", ".crystal-image", function () {

    // console.log($(this).attr('data-crystalvalue'));
    var crystalValue = ($(this).attr("data-crystalvalue")); //pulls value of crystal
    crystalValue = parseInt(crystalValue); //converts string elemtn to interger
    counter += crystalValue;
    // console.log(counter);
    // console.log(crystalValue);

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === randNum) {
        alert("You win!");
        wins++;
    }
    else if (counter >= randNum) {
        alert("You lose!!");
        losses++;
    }

});