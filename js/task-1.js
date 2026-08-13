const categories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const title = category.querySelector("h2");
  const items = category.querySelectorAll("ul li");

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${items.length}`);
});
