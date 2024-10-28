document.addEventListener("DOMContentLoaded", () => {
    // Add any JavaScript you need here
    const buyButtons = document.querySelectorAll(".product button");
    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for your purchase!");
        });
    });
});
