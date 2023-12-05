// Get all h1 elements
var titles = document.getElementsByTagName("h1");

// Set the interval (in milliseconds) between updates
var interval = 100;

// Set the writing effect function
function type() {
  // Add the slash symbol and blinking effect to each h1 element
  for (var i = 0; i < titles.length; i++) {
    // Clear the h1 element's content
    titles[i].textContent = "";
    // Split the original text content into an array of characters
    var chars = titles[i].getAttribute("data-text").split("");
    // Insert a span element for each character
    for (var j = 0; j < chars.length; j++) {
      var span = document.createElement("span");
      span.textContent = chars[j];
      titles[i].appendChild(span);
    }
    // Add the slash symbol and blinking effect to the last span element
    titles[i].lastChild.textContent += " |";
    titles[i].lastChild.classList.add("blink");
  }
}

// Start the writing effect
type();