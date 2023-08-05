const hamBurger = document.querySelector("#hamBurger");
hamBurger.addEventListener("click", () => {
  const navBar = document.querySelector("#navBar");
  navBar.classList.toggle("navBarRes");
  console.log("clicked");
});
