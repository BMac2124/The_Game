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
    {name:'Chewie', imgSrc:'matching_game/Chewie.jpeg'},
    {name:'Chewie', imgSrc:'matching_game/Chewie.jpeg'},
    {name: 'Vader', imgSrc: 'matching_game/Darth-Vader.jpeg'},
    {name: 'Vader', imgSrc: 'matching_game/Darth-Vader.jpeg'},
    {name: 'Grogu', imgSrc: 'matching_game/Grogu.jpeg'},
    {name: 'Grogu', imgSrc: 'matching_game/Grogu.jpeg'},
    {name: 'Mace', imgSrc: 'matching_game/Mace_windu.jpeg'},
    {name: 'Mace', imgSrc: 'matching_game/Mace_windu.jpeg'},
    {name: 'Ren', imgSrc: 'matching_game/Ren.jpeg'},
    {name: 'Ren', imgSrc: 'matching_game/Ren.jpeg'},
    {name: 'skywalker', imgSrc: 'matching_game/rise_skywalker.jpeg'},
    {name: 'skywalker', imgSrc: 'matching_game/rise_skywalker.jpeg'},
    {name: 'sidious', imgSrc: 'matching_game/Sidious.jpeg'},
    {name: 'sidious', imgSrc: 'matching_game/Sidious.jpeg'},
    {name: 'troopers', imgSrc: 'matching_game/vader_troops.jpeg'},
    {name: 'trooper', imgSrc: 'matching_game/vader_troops.jpeg'}
    
    ]
//document.querySelector allows me to grab the html element and manipulate it outside of css
//I will need this to add the images to my board.

const board = document.querySelector('.board')
for(let i = 0; i < cardArray.length; i++){
    let newDiv = document.createElement('div')
    let image = document.createElement('img')
    image.src = cardArray[i].imgSrc
    newDiv.innerHTML = cardArray[i].name
    board.appendChild(newDiv)
    newDiv.appendChild(image)

}



