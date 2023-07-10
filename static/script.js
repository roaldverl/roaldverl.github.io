/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mainContent").style.marginLeft = "250px";
    document.getElementById("header").style.marginLeft = "250px";
    document.getElementById("header-menu-button").style.display = "none";
    /*document.getElementById("header").classList.add("header-overlay");*/
    /*document.body.style.backgroundColor = "rgba(0,0,0,0.4)";*/
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mainContent").style.marginLeft = "0";
    document.getElementById("header").style.marginLeft = "0";
    document.getElementById("header-menu-button").style.display = "inline-block"; // Show the menu button
    /*document.getElementById("header").classList.remove("header-overlay");*/
    /*document.body.style.backgroundColor = "#F7F0F2";*/
  }