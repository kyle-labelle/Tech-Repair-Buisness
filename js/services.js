document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".service-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = "booking.html";
        });
    });
});

document.querySelectorAll(".info-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.getElementById(this.dataset.modal).style.display = "flex";
    });
});

document.querySelectorAll(".close-modal").forEach(close => {
    close.addEventListener("click", function () {
        document.getElementById(this.dataset.modal).style.display = "none";
    });
});
