const liItems = document.querySelectorAll("li.item")
console.log(`Number of categories: ${liItems.length}`);

liItems.forEach(element => {
    const h2El = element.firstElementChild;
    console.log(`Category: ${h2El.textContent}`);
    const liChildEls = h2El.nextElementSibling.children
    console.log(`Elements: ${liChildEls.length}`);
});