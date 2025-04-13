// Example 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    console.log(paragraph);
    paragraph.textContent = "The paragraph is is changed ";
  });

//Example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

//Example 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "blue";
  coffeeType.style.padding = "4px";
  //   coffeeType.style.textAlign = "center";
});

//Example 4

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

//Example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let tasklist = document.getElementById("taskList");
    tasklist.lastElementChild.remove();
  });

//Example 6

document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("this DOM practice dude ");
});
