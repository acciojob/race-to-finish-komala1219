window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

const promises = [];

// Add 5 promises to the array
for (let i = 0; i < 5; i++) {
        const time = Math.floor(Math.random() * 5) + 1;
        const promise = new Promise((resolve) => {
          setTimeout(() => {
            resolve(`Promise ${i + 1} resolved in ${time} seconds`);
          }, time * 1000);
        });
        promises.push(promise);
      }

      Promise.any(promises).then((result) => {
        document.getElementById("output").innerText = result;
      });