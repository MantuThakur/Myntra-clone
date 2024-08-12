let itemContainerElement = document.querySelector('item-container');

let innerHTML = '';
item.forEach(item => {

    innerHTML += `
    <div class="item-container">
    <img class="ite,-image"0 src="${item.item-image}" alt="item image">
    <div class="raring">
        ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
    </div>
    <div class="company-name">${item.company_name}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
                    <span class="current-price">Rs ${item.current_price}</span>
                    <span class="original-price">Rs ${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag">Add to Bag</button>
</div>`
})

itemContainerElement.innerHTML = innerHTML;
