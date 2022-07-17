const searchInput = document.querySelector("#search-input");
const productCollection = document.querySelectorAll(".name");

searchInput.addEventListener("keyup", (event) => {
  const searchQuery = event.target.value.toLowerCase();
  for (let i = 0; i < productCollection.length; i++) {
    const productName = productCollection[i].textContent.toLowerCase();

    if (productName.includes(searchQuery)) {
      productCollection[i].style.display = "block";
    } else {
      productCollection[i].style.display = "none";
    }
  }
});
