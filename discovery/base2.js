
const pageHome = document.getElementById("ndHome");

// Add a click event listener to the button
pageHome.addEventListener("click", function () {
  // Change the page URL when the button is clicked
  window.location.href = "../home/home.html"; // Replace "newpage.html" with the desired destination
});

const pageDis = document.getElementById("ndDiscovery");

// Add a click event listener to the button
pageDis.addEventListener("click", function () {
  // Change the page URL when the button is clicked
  window.location.href = "../discovery/discovery.html"; // Replace "newpage.html" with the desired destination
});

const pageForum= document.getElementById("ndForum");

// Add a click event listener to the button
pageForum.addEventListener("click", function () {
  // Change the page URL when the button is clicked
  window.location.href = "../forum/forum.html"; // Replace "newpage.html" with the desired destination
});

const pageNotification= document.getElementById("ndNotification");

// Add a click event listener to the button
pageNotification.addEventListener("click", function () {
  // Change the page URL when the button is clicked
  window.location.href = "../notification/notification.html"; // Replace "newpage.html" with the desired destination
});



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

