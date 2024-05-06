// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/839c1b0b-a9db-4332-918e-77565f322aa6/";
let cards = [
    "ab67616d0000b273eba766e9ba27b04b9aa5dd38.jpg?v=1710950294784",

    "ab67616d00001e0291dda847382a409010e3c17a.jpg?v=1710950298527",


    "corridos.jpg?v=1710260674349",

    "corridos%201.jpg?v=1710260678942",

    "edecion%20especial1.jpeg?v=1710260300149",

    "herencia1.jpg?v=1710260677281",

    "maxresdefault.jpg?v=1710950434980",
    "hq720.jpg?v=1710950430385",

];

// Button to Show Deck


buttonShow.onclick = function() {
    let audio = document.querySelector(".audio");
    audio.play();
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck

buttonDouble.onclick = function() {
    let audio = document.querySelector(".audio");
    audio.play();
    console.log("deck has" + cards.length + "cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image:url(" +
                url + card + ")' class='card'>"
            );
        }
    }

    console.log("Now. the deck has" + cards.length + "cards.");
    buttonDouble.style.color = "silver";
};

// Button to Shuffle Cards

buttonShuffle.onclick = function() {
    let audio = document.querySelector(".audio");
    audio.play();
    shuffle(cards);
    console.log("Im shuffling the cards");
    game.innerHTML = "";
    let i = 0;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url + card + ")' class='card' id='" + i + "'>"

        );
        i = i + 1;
    }
};

function shuffle(array) {
    let audio = document.querySelector(".audio");
    audio.play();
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}


// Button to Flip All Cards
buttonFlip.onclick = function() {
    let audio = document.querySelector(".audio");
    audio.play();
    let i = 0;
    for (cards of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
};



// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});