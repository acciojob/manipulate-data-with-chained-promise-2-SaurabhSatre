function manipulateArray() {
  // Step 1: Initial promise resolving after 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
  // Step 2: Filter even numbers after resolving
  .then((data) => {
    return new Promise((resolve) => {
      const evenNumbers = data.filter(num => num % 2 === 0);
      setTimeout(() => {
        document.getElementById("output").textContent = evenNumbers.join(",");
        resolve(evenNumbers);
      }, 1000); // 1-second delay after initial 3s
    });
  })
  // Step 3: Multiply even numbers by 2 and update DOM
  .then((filteredData) => {
    return new Promise((resolve) => {
      const doubled = filteredData.map(num => num * 2);
      setTimeout(() => {
        document.getElementById("output").textContent = doubled.join(",");
        resolve();
      }, 2000); // 2-second delay after filtering
    });
  });
}

// Call the function when the script loads
manipulateArray();
