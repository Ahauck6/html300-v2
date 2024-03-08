// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = sum
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

  //This is for form-map
  const formMap = document.querySelector('#form-map')
  formMap.addEventListener('submit', function(event){
    //Prevent from submitting to server
    event.preventDefault() 
    let array = [6, 10, 20, 45]

    const inputField = document.querySelector('#form-map .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    //If input is a number 
    if(!isNaN(userNumber)){
      
      //Use map and user input to create new array
      let array2 = array.map(function(value){
        return value + userNumber;
      });
      
      //Output the result to the page
      document.querySelector('#form-map .output').innerHTML = array2

  }

  // Clear the form field so the user can try again
  inputField.value = ''

})

//This is for form-filter
const formFilter = document.querySelector('#form-filter')
formFilter.addEventListener('submit', function(event){
  //Prevent form from submitting to server
  event.preventDefault() 
  let array = [6, 10, 20, 45]

  const inputField = document.querySelector('#form-filter .input')
  const userInput = inputField.value
  const userNumber = parseInt(userInput)

  //If user input is a number
  if(!isNaN(userNumber)){

    let array2 = array.filter(function(value){
      return value > userNumber;
    });

    //Output the result to page
    document.querySelector('#form-filter .output').innerHTML = array2
  }

  // Clear the form field so the user can try again
  inputField.value = ''

})

//This is for form-find
const formFind = document.querySelector('#form-find')
  formFind.addEventListener('submit', function(event){
    //Prevent from submitting to server
    event.preventDefault() 
    let array = [6, 10, 20, 45]

  const inputField = document.querySelector('#form-find .input')
  const userInput = inputField.value
  const userNumber = parseInt(userInput)

  //If user input is a number
  if(!isNaN(userNumber)){

    let result = array.find(value =>value > userNumber);

  //Output the result to page
  document.querySelector('#form-find .output').innerHTML = result  
}

// Clear the form field so the user can try again
inputField.value = ''

}) 

//This is for form-string
const animal = document.querySelector('#form-string')
animal.addEventListener('submit', function(event){
  //Prevent form from submitting to server
  event.preventDefault()

  const inputField = document.querySelector('#form-string .input')
  const userInput = inputField.value 

  //Create string with string interpolation
  let string = `${userInput} is your favorite animal!`

  //Output the result to the page
  document.querySelector('#form-string .output').innerHTML = string

  // Clear the form field so the user can try again
inputField.value = ''

})

}) 
