/*to link the images to the board and add functionality I will use 
addEventListner
setAttribute
getAttribut
Math.floor
Math.random
some way to recall the data from the array
Things needed: 
Card array holding all my images
Function for shuffling the array when page loaded and when game restarted. 

function with conditional for removing the cards that match from the cardArray and place them to the now empty[]array
it will also have to take the cards from the index[i] and place them in the corresponding empty index[i]
This should be some type of (if,elseif,else conditional statement)

I also need a function that takes count of the score maybe using the counter to iterate throught the array. 

I need to then setup a timer function. 

and add a game reload when game is complete. */





// document.addEventListener('DOMitems', () => { //get rid of this make seperate array
// // setting up the array of cards using the images I stored in my folder.  

// })
const cardArray = [
    { name: 'Chewie', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/Chewie.jpeg' },
    { name: 'Chewie', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/Chewie.jpeg' },
    { name: 'Vader', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/Darth-Vader.jpeg' },
    { name: 'Vader', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/Darth-Vader.jpeg' },
    { name: 'Grogu', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/Grogu.jpeg' },
    { name: 'Grogu', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/Grogu.jpeg' },
    { name: 'Mace', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/Mace_windu.jpeg' },
    { name: 'Mace', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/Mace_windu.jpeg' },
    { name: 'Ren', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/Ren.jpeg' },
    { name: 'Ren', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/Ren.jpeg' },
    { name: 'skywalker', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/rise_skywalker.jpeg' },
    { name: 'skywalker', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/rise_skywalker.jpeg' },
    { name: 'sidious', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/Sidious.jpeg' },
    { name: 'sidious', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/Sidious.jpeg' },
    { name: 'troopers', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/vader_troops.jpeg' },
    { name: 'trooper', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/vader_troops.jpeg' }

]

// const chosenCards = [];
const cardsFound = [];
let pickOne = "";
let pickTwo = "";
let counter = 0;
let round = false;
let currentTwo = []
let compareTwo = []

cardArray.sort(() => .5 - Math.random())//this will randomize the game selection before start of game and on restart

const gameStart = () => { //this is the function created to start the game
    round = true;
    const board = document.querySelector('.board')//calling on the element (board) from our html

    // created a for loop to run the lengthe of the card array
    for (let i = 0; i < cardArray.length; i++) {
        let newDiv = document.createElement('div')// created the divs with names listed above they will displayon the board
        let image = document.createElement('img')//added the images from the array to the assigned (divs) appended.
        image.src = cardArray[i].backSide
        // newDiv.innerHTML = cardArray[i].name
        board.appendChild(newDiv)//divs added to the board element
        newDiv.appendChild(image)//images added to the divs (matched by name)
        newDiv.addEventListener("click", () => {  // the EventListner function logs the click and iniates the card to show
            console.log("click")
            //if statement needs to be added to determine flip state!

            // if (image.src == '') {
            image.src = cardArray[i].imgSrc
            // image.src = "";

            selectedCard(cardArray[i], newDiv, image)

            // match(pickOne, pickTwo)
            // }
            // the following gets rid of the back image covering the hidden card face


            //if two of the same cards are already in the choosen card array--selected card wont be called
        })

    }


}

//flipCard function() if items  clicked on from the grid match push to the card match function
const selectedCard = (card, newDiv, image) => {
    console.log(card)
    console.log(newDiv)
    console.log(image)
    compareTwo.push(card.name)
    currentTwo.push(image)
    console.log(compareTwo)
    if (currentTwo.length == 2 && compareTwo[0] !== compareTwo[1]) {
        setTimeout(() => {
            // for (let card of document.querySelector(".board").children) {
            //     card.style.backgroundImage = `url("matching_game/Star_wars_backside.jpeg")`
            //     // image.src = "";

            // }
            for (let i = 0; i < currentTwo.length; i++) {
                currentTwo[i].src = "matching_game/Star_wars_backside.jpeg"
            }
            currentTwo = []
            compareTwo = []

        }, 1000)

        // round = false
    }

    if (compareTwo[0] === compareTwo[1]) {
        for (let i = 0; i < currentTwo.length; i++) {
            currentTwo[i].src = "matching_game/blue.jpg"
        }
        compareTwo= []
    }




}

// while (round) {
//     if (counter == 2) {
//         for (let card of document.querySelector(".board").children) {
//             card.style.backgroundImage = `url("matching_game/Star_wars_backside.jpeg")`
//             // image.src = "";

//         }
//         round = false
//     } 
// }

gameStart()





//  checking for match
//function match() // 

// need to check for matches using if statements






