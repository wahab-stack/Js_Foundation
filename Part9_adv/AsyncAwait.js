function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Abdul", url: "https://abdul.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userdata = await fetchUserData();
    console.log("User data fetched successfully");

    console.log("User data : ", userdata);
  } catch (error) {
    console.log("Error Fetching data..", error);
  }
}
getUserData();

/*
await Keyword
1-Pauses execution until the Promise settles.
2-Can only be used inside async functions (otherwise, it’s a syntax error).
*/
