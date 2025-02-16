document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.getElementById("date");
    const timeSelect = document.getElementById("time");
    const step1Form = document.getElementById("step1-form");
    const step2Form = document.getElementById("step2-form");
    const nextStepButton = document.getElementById("next-step");
    const formTitle = document.getElementById("form-title");

    const today = new Date();
    const minDate = today.toISOString().split("T")[0];
    dateInput.setAttribute("min", minDate);

    function updateTimeOptions() {
        const selectedDate = new Date(dateInput.value);
        const day = selectedDate.getDay();
        let times = [];

        if (day === 6 || day === 5) {
            times = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00"];
        } else {
            times = ["08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"];
        }

        timeSelect.innerHTML = times.map(time => `<option value="${time}">${time}</option>`).join("");
    }

    dateInput.addEventListener("change", updateTimeOptions);

    nextStepButton.addEventListener("click", function () {
        step1Form.style.display = "none";
        step2Form.style.display = "block";
        formTitle.textContent = "Enter Your Information";
    });

    step2Form.addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("confirm-date").textContent = dateInput.value;
        document.getElementById("confirm-time").textContent = timeSelect.value;
        document.getElementById("confirmation-popup").style.display = "flex";
    });

    document.getElementById("close-popup").addEventListener("click", function () {
        document.getElementById("confirmation-popup").style.display = "none";
        window.location.href = "../index.html";
    });
});
