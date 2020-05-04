// On our HTML page, we have a #search-button, a #textbox input box,
// a #sentence, and a #search-results DIV.

// TODO 1: Use querySelector to assign EACH of the above 
// elements to a variable, just like this:
let searchButton = document.querySelector('#search-button')
let searchResults = document.querySelector('#search-results')

searchButton.addEventListener('click', function () {
 
  // TODO 2: Write an IF statement which determines whether
  // the user-supplied string from #textbox is included in
  // the #sentence string.
  
  // HINT 1: To get the user-supplied string from the input 
  // box (#textbox), use the property .value on the variable
  // you assigned the textbox element to.

  // HINT 2: To get the string contained within #sentence, use
  // the property .innerText on the variable you assigned the
  // #sentence element to.

  // HINT 3: You can check whether string1 contains string2
  // by using string1.includes(string2) – which will return
  // true or false. 

  // TODO 3: If the user-supplied string is included in the
  // #sentence string, update the innerText of #search-results
  // with a success message (such as, "A match was found!"),
  // otherwise update it with a failure message (such as, 
  // "No results. Too bad!")

})