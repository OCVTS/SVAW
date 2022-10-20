const itemDescription = document.getElementById("item-description");
const descriptionText = document.getElementById("description-text")
let listItemOne = document.getElementsByClassName("list-item")[0];

function changeDescription(item) {
  if (item == "one") {
    descriptionText.innerHTML = "YEEE"
  }
}