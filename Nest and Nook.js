/* ================= CART ================= */

let cartCount = 0;


/* ================= ADD TO CART ================= */

const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productName = button.getAttribute("data-product");

        cartCount++;

        document.getElementById("cartCount").textContent = cartCount;

        alert(
            productName +
            " has been added to your cart!"
        );

    });

});


/* ================= CART BUTTON ================= */

document.getElementById("cartButton").onclick = function () {

    if (cartCount === 0) {

        alert("Your cart is empty.");

    } else {

        alert(
            "You have " +
            cartCount +
            " item(s) in your cart."
        );

    }

};



/* ================= SHOP NOW ================= */

document.getElementById("shopNowButton").onclick = function () {

    document.getElementById("shop").scrollIntoView({
        behavior: "smooth"
    });

};


/* ================= NAVIGATION ================= */

const navigationLinks =
    document.querySelectorAll(".nav-link");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigationLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


/* ================= SEARCH ================= */

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", function () {

    const searchText =
        searchInput.value.toLowerCase().trim();

    const productCards =
        document.querySelectorAll(".product-card");


    productCards.forEach(function (card) {

        const productName =
            card.getAttribute("data-product").toLowerCase();


        if (productName.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


/* ================= NEWSLETTER ================= */

newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email =
        document.getElementById("emailInput").value;

    localStorage.setItem("email", email);

    window.location.href = "subscribe.html";

});


/* ================= ROOM CARDS ================= */

const roomCards =
    document.querySelectorAll(".room-card");


roomCards.forEach(function (room) {

    room.addEventListener("click", function () {

        const roomName =
            room.querySelector(".room-name span:last-child").textContent;

        alert(
            "You selected the " +
            roomName +
            " collection."
        );

    });

});