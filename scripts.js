const expandButtons = document.querySelectorAll(".expand-button");

expandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const recipeContent = button.nextElementSibling;
    recipeContent.style.display =
      recipeContent.style.display === "none" ? "block" : "none";
  });
});
