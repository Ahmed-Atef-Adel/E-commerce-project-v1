'use strict';

const countriesContainer = document.querySelector('.countries');

function render(products) {
    const row = document.createElement("div");  // Create a row container
    row.classList.add("row", "g-4", "m-3");  // Bootstrap row with gap

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add('col-md-3');  // Set column size to 3 (4 cards per row)
        card.innerHTML = `
            <div class="card h-100">
                <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.category}</p>
                    <p class="card-text">${product.price}$</p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        `;
        row.appendChild(card);  // Append each card to the row
    }); 

    countriesContainer.appendChild(row);  // Append the row to the container
    countriesContainer.style.opacity = 1;  // Make the container visible
}

const URL = 'https://dummyjson.com/products?sortBy=title&order=asc';
const callData = function() {
    fetch(URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.products);  // Display the list of products
            render(data.products);  // Pass the products array to render function
        })
        .catch(error => console.error('Error fetching data:', error));
};

callData();
