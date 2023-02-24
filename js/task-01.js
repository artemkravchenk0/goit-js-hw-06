const liItems = document.querySelectorAll("li.item")

console.log(`Number of categories: ${liItems.length}`);


liItems.forEach(element => {
  const h2El = element.querySelector('h2');
  console.log(`Category: ${h2El.textContent}`);

  const liChildEls = element.querySelectorAll('li')
  console.log(`Elements: ${liChildEls.length}`);
});
