/*
Key Concepts of Promises
States of a Promise:
Pending: Initial state (neither fulfilled nor rejected).
Fulfilled (Resolved): The operation completed successfully.
Rejected: The operation failed.
*/
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched Successfully ");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

// 3000 means 3 seconds to fetching the data in terminal
//it took 3 seconds

/*
Promise Chaining
*/
fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
