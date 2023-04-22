window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`


// Generate an array of five promises, each resolving with a random time between 1 and 5 seconds
const promises = Array.from({ length: 5 }, () => {
  const delay = Math.floor(Math.random() * 5) + 1; // Random delay between 1 and 5 seconds
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(delay);
    }, delay * 1000);
  });
});

// Use Promise.any to wait for the first promise to resolve, and print its result to the output div
Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = `The first promise to resolve took ${result} seconds.`;
  });

