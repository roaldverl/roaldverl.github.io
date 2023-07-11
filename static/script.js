/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;

  if (windowWidth < 1024) { // Adjust the screen width breakpoint as needed
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("mainContent").style.marginTop = "250px"; // Add top margin to create space for the menu
  } else {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("mainContent").style.marginLeft = "250px";
      document.getElementById("header").style.marginLeft = "250px";
      document.getElementById("header-menu-button").style.display = "none";
  }


  // Close the menu when a menu item is tapped
  var menuItems = document.querySelectorAll(".sidenav a");
  menuItems.forEach(function(item) {
    item.addEventListener("click", closeNav);
  });
}
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    if (windowWidth < 768) { // Adjust the screen width breakpoint as needed
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mainContent").style.marginTop = "0"; // Remove the top margin
    } else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mainContent").style.marginLeft = "0";
        document.getElementById("header").style.marginLeft = "0";
        document.getElementById("header-menu-button").style.display = "inline-block"; // Show the menu button
    }
}