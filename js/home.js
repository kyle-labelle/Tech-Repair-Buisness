document.addEventListener("DOMContentLoaded", function() {
    const bookRepairBtn = document.getElementById("bookRepairBtn");

    if (bookRepairBtn) {
        bookRepairBtn.addEventListener("click", function() {
            window.location.href = "html/booking.html";
        });
    }
});
