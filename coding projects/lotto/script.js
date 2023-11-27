// Function to add the "sparkling" class and trigger the animation
function makeSparkle() {
 
  const heading = document.getElementsByClassName("sparkling-heading1")[0];
  if (heading) {
  // Add the "sparkling" class to apply the animation
  heading.classList.add("sparkling");
  
  // Remove the class after a certain duration (e.g., 2 seconds)
  setTimeout(() => {
      heading.classList.remove("sparkling");
  }, 1000); // Adjust the duration as needed
}
const heading2 = document.getElementsByClassName("sparkling-heading2")[0];
if (heading2) {
// Add the "sparkling" class to apply the animation
heading2.classList.add("sparkling");

// Remove the class after a certain duration (e.g., 2 seconds)
setTimeout(() => {
    heading2.classList.remove("sparkling");
}, 1000); // Adjust the duration as needed
}

}




function myFunction() {
  let numbers = [];

  // Generate 6 random numbers 10000 times
  for (let i = 0; i < 100000; i++) {
    let temp = [];
    while (temp.length < 6) {
      let num = Math.floor(Math.random() * 47) + 1;
      if (!temp.includes(num)) {
        temp.push(num);
      }
    }
    numbers.push(temp);
  }

  // Flatten the array of arrays into a single array of numbers
  numbers = numbers.flat();

  // Count the occurrences of each number in the array
  let counts = {};
  numbers.forEach(num => {
    if (!counts[num]) {
      counts[num] = 1;
    } else {
      counts[num]++;
    }
  });

  // Sort the numbers by the count of occurrences in descending order
  let sortedNumbers = Object.keys(counts).sort((a, b) => counts[a] - counts[b]);

  // Take the top 6 least frequent numbers
  let bottomNumbers = sortedNumbers.slice(0, 6);

  // Take the top 6 most frequent numbers
  let topNumbers = sortedNumbers.slice(-6);



  // Display the results
  const winningNumbers1 = document.querySelector("#win-num1");
  const winningNumbers2 = document.querySelector("#win-num2");
  winningNumbers1.innerHTML = topNumbers.join("  ");
  winningNumbers2.innerHTML = bottomNumbers.join("  ");
}



var myButton = document.querySelector("#button1");
const refreshButton = document.querySelector("#button2");

    // Disable the generate button by default
    myButton.disabled = true;

    // Check if the page has been refreshed
    if (localStorage.getItem("refreshed")) {
      myButton.disabled = false;
    }

    // Add event listeners for the buttons
    myButton.addEventListener("click", startBothFunctions);

    function startBothFunctions() {
      makeSparkle();
      myFunction();
      
    }




    refreshButton.addEventListener("click", function() {
      localStorage.setItem("refreshed", true);
      location.reload();
    });

