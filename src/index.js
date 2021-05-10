// STABLE VARIABLES
let dogBar = document.getElementById('dog-bar')
let dogInfo = document.getElementById("dog-info")
let dogFilter = document.getElementById('good-dog-filter')



// - CLICK ON "FILTER GOOD DOGS" BUTTON IN ORDER TO JUST SEE GOOD DOGS OR SEE
// ALL DOGS IN DOG BAR.


// FETCHING ALL THE INFORMATION ON OUR PUPS AND SENDING IT TO OUR RENDER FUNCTION
function unloadItAll(){
fetch("http://localhost:3000/pups")
  .then((r) => r.json())
  .then((pupsArray) => {pupsArray.forEach((pupObj)=>{renderPup(pupObj)})})}
unloadItAll()

// FETTCHING ALL THE INFOR FOR THE GOOD ONES LAD

function uploadItGood(){
  fetch("http://localhost:3000/pups")
    .then((r) => r.json())
    .then((pupsArray) => {pupsArray.forEach((pupObj)=>{
      
      if (pupObj.isGoodDog === true){
      renderPup(pupObj)      


      
      }})})}
  
//PROCESS ON PUP AND RENDER PUP TO THE DOM 
function renderPup(pupObj){
let span = document.createElement('span')
span.innerText = pupObj.name
dogBar.appendChild(span)


span.addEventListener("click",() => {

 let image = document.createElement('img')
 image.src = pupObj.image
let h2 = document.createElement('h2')
h2.innerText = pupObj.name
let button = document.createElement('button')
button.innerText = pupObj.isGoodDog
button.id = "dogStatus"
if (button.innerText === "true"){
 button.innerText = "Good Dog"
} else {button.innerText = "Bad Dog"}

dogInfo.innerHTML= " "
dogInfo.append(image, h2, button)

//EVENT LISTNER TO CHANGE THE BUTTON OF THE DOGGY!

button.addEventListener('click', () => { 

if (button.innerText === "Good Dog") {

  button.innerText ="Bad Dog"
  button.dataset.id= false; 

  
 let data = {isGoodDog: false} 

 fetch(`http://localhost:3000/pups/${pupObj.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((r) => r.json())
    .then((pupObj) => console.log(pupObj));
  
}else{
      button.innerText ="Good Dog"
      button.dataset.id= true;
    
      let data = {isGoodDog: true} 

      fetch(`http://localhost:3000/pups/${pupObj.id}`, {
         method: "PATCH",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
       })
         .then((r) => r.json())
         .then((pupObj) => console.log(pupObj));
    
    }})
})}



// ### BONUS! STEP 5: FILTER GOOD DOGS 
// When a user clicks on the Filter Good Dogs button, two things should happen:
//  - The button's text should change from "Filter good dogs: OFF" to "Filter good dogs: ON", or vice versa.
//  - If the button now says "ON" (meaning the filter is on), then the Dog Bar should only show pups whose isGoodDog attribute is true. If the filter is off, the Dog Bar should show all pups (like normal).

dogFilter.addEventListener("click",()=>{

if (dogFilter.innerText === "Filter good dogs: OFF"){
     dogFilter.innerText = "Filter good dogs: ON"
     dogBar.innerHTML = ""
     uploadItGood()

    }else{
     dogFilter.innerText = "Filter good dogs: OFF"
     dogBar.innerHTML = ""
     unloadItAll()
    }


    })
