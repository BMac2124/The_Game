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
const cardArray =[
    {name:'Chewie', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc:'matching_game/Chewie.jpeg'},
    {name:'Chewie', backSide: "matching_game/Star_wars_backside.jpeg",imgSrc:'matching_game/Chewie.jpeg'},
    {name: 'Vader', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/Darth-Vader.jpeg'},
    {name: 'Vader', backSide: "matching_game/Star_wars_backside.jpeg",imgSrc: 'matching_game/Darth-Vader.jpeg'},
    {name: 'Grogu', backSide: "matching_game/Star_wars_backside.jpeg",imgSrc: 'matching_game/Grogu.jpeg'},
    {name: 'Grogu', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/Grogu.jpeg'},
    {name: 'Mace', backSide: "matching_game/Star_wars_backside.jpeg", imgSrc: 'matching_game/Mace_windu.jpeg'},
    {name: 'Mace', backSide: "matching_game/Star_wars_backside.jpeg",imgSrc: 'matching_game/Mace_windu.jpeg'},
    {name: 'Ren', backSide: "matching_game/Star_wars_backside.jpeg",imgSrc: 'matching_game/Ren.jpeg'},
    {name: 'Ren', backSide: "matching_game/Star_wars_backside.jpeg",imgSrc: 'matching_game/Ren.jpeg'},
    {name: 'skywalker', backSide: "matching_game/Star_wars_backside.jpeg",imgSrc: 'matching_game/rise_skywalker.jpeg'},
    {name: 'skywalker', backSide: "matching_game/Star_wars_backside.jpeg",imgSrc: 'matching_game/rise_skywalker.jpeg'},
    {name: 'sidious', backSide: "matching_game/Star_wars_backside.jpeg",imgSrc: 'matching_game/Sidious.jpeg'},
    {name: 'sidious', backSide: "matching_game/Star_wars_backside.jpeg",imgSrc: 'matching_game/Sidious.jpeg'},
    {name: 'troopers', backSide: "matching_game/Star_wars_backside.jpeg",imgSrc: 'matching_game/vader_troops.jpeg'},
    {name: 'trooper', backSide: "matching_game/Star_wars_backside.jpeg",imgSrc: 'matching_game/vader_troops.jpeg'}
    
    ]

    cardArray.sort(()=> .5 - Math.random())//this will randomize the game selection before start of game and on restart

 const gameStart = () =>{ //this is the function created to start the game

    const board = document.querySelector('.board')//calling on the element (board) from our html

    // created a for loop to run the lengthe of the card array
    for(let i = 0; i < cardArray.length; i++){
        let newDiv = document.createElement('div')// created the divs by using document.createElement
        let image = document.createElement('img')
        image.src = cardArray[i].backSide
        // newDiv.innerHTML = cardArray[i].name
        board.appendChild(newDiv)
        newDiv.appendChild(image)
        newDiv.addEventListener("click", () => {
            console.log("click")
            newDiv.style.backgroundImage = `url(${cardArray[i].imgSrc})`
            image.src = false
        })
    
    }
 

 }
const match = () =>{
    console.log(match)
}
 // need to check for matches using if statements
 //
 gameStart()



