const pageAva = document.getElementById("ava");

// Add a click event listener to the button
pageAva.addEventListener("click", function () {
  // Change the page URL when the button is clicked
  window.location.href = "../person/person.html"; // Replace "newpage.html" with the desired destination
});

//collection
const toggleButton = document.getElementById('toggleButton');
  const list = document.getElementById('list');
  toggleButton.addEventListener('click', () => {
      if (list.style.display === 'none' || list.style.display === '') {
          list.style.display = 'block';
      } else {
          list.style.display = 'none';
      }
});

const pageQuest1 = document.getElementById("quest1");

// Add a click event listener to the button
pageQuest1.addEventListener("click", function () {
  // Change the page URL when the button is clicked
  window.location.href = "..full question\fullques1.html"; // Replace "newpage.html" with the desired destination
});

//drag box
let isDragging = false;
let offsetX, offsetY;

const myBox = document.getElementById("post-form");

myBox.addEventListener("mousedown", startDrag);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", endDrag);

function startDrag(e) {
  isDragging = true;
  offsetX = e.clientX - myBox.getBoundingClientRect().left;
  offsetY = e.clientY - myBox.getBoundingClientRect().top;
  myBox.style.cursor = "grabbing";
}

function drag(e) {
  if (!isDragging) return;

  const x = e.clientX - offsetX;
  const y = e.clientY - offsetY;

  myBox.style.left = x + "px";
  myBox.style.top = y + "px";
}

function endDrag() {
  isDragging = false;
  myBox.style.cursor = "grab";
}
