// STABLE VARIABLES
let dogBar = document.getElementById('dog-bar')
let dogInfoSection = document.getElementById('dog-info')
//ADD LIL PUPPY NAMES BY FETCHING THEM UPON LOAD AND CALLING A FUNCTION THAT RENDERS THEM


  fetch("http://localhost:3000/pups")
  .then((r) => r.json())
  .then((pupsArray) => {pupsArray.forEach(pupObject => {renderPup(pupObject)});});


//FUNCTION TO RENDER A PUP AND ATTACH IT TO THE DOM

  function renderPup(pupObject){

     let span = document.createElement('span')
        span.innerText = pupObject.name
       
        dogBar.appendChild(span)

        span.addEventListener("click", ()=>{
        
        // CREATING EXTRA DETALS FOR CLICK
        pupObject.isGoodDog === true? pupObject.isGoodDog = "Good Dog!" : pupObject.isGoodDog = "Bad Dog!";
       
        dogInfoSection.innerHTML = `<img src = ${pupObject.image}> <h2>${pupObject.name}</h2> <button id=doggyStanding>${pupObject.isGoodDog}</button>`
                     
        // CREATING GOOD DOG BUTTON EVEN LISTENER
        goodDogButton = document.getElementById('doggyStanding')
        goodDogButton.addEventListener('click', ()=>{

        // if (doggyStanding.innerText === "Good Dog!") {
        // doggyStanding.innerText = "Bad Dog!"
          

        // }else { doggyStanding.innerText = "Bad Dog!"



        }





        })

        })
  }
