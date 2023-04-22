window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

const promises = [];

// Add 5 promises to the array
for (let i = 0; i < 5; i++) {
  const randomTime = Math.floor(Math.random() * 5) + 1; // Generate a random time between 1 and 5 seconds
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(`Promise ${i+1} resolved after ${randomTime} second(s)`);
    }, randomTime * 1000);
  });
  promises.push(promise);
}

Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = result;
  })
  .catch(error => console.log(error));
