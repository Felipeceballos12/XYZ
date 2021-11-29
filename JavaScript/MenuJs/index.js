const btnMenu = document.querySelector('#btnMenu');

btnMenu.addEventListener('click', () => {
   const containerLinks = document.querySelector('#navLinks');
   if (containerLinks.style.display == "block") {
    containerLinks.style.display = "none";
   } else {
    containerLinks.style.display = "block";
   }
});