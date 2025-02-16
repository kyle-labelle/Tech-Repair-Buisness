document.addEventListener("DOMContentLoaded", function () {
    const locationDetails = {
        address1: {
            text: `
                <h3>Location Details</h3>
                <p><strong>Address:</strong> 123 First Street</p>
                <p><strong>City:</strong> Ottawa, ON</p>
                <p><strong>Postal Code:</strong> A1B 2C3</p>
                <p><strong>Phone Number:</strong> xxx-xxx-xxxx</p>
                <p><strong>Email:</strong> ktech1@email.com</p>
                <br>
                <h3>Hours</h3>
                <p><strong>Weekdays:</strong><br> 8:30 - 17:30</p>
                <p><strong>Weekends:</strong><br> 9:00 - 15:00</p>
            `,
            map: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11324.435325108768!2d-75.6993!3d45.4215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1617045123456"
        },
        address2: {
            text: `
                <h3>Location Details</h3>
                <p><strong>Address:</strong> 456 Second Street</p>
                <p><strong>City:</strong> Toronto, ON</p>
                <p><strong>Postal Code:</strong> D4E 5F6</p>
                <p><strong>Phone Number:</strong> yyy-yyy-yyyy</p>
                <p><strong>Email:</strong> ktech2@email.com</p>
                <br>
                <h3>Hours</h3>
                <p><strong>Weekdays:</strong><br> 8:30 - 17:30</p>
                <p><strong>Weekends:</strong><br> 9:00 - 15:00</p>
            `,
            map: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11324.435325108768!2d-79.3832!3d43.6532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1617045123456"
        },
        address3: {
            text: `
                <h3>Location Details</h3>
                <p><strong>Address:</strong> 789 Third Street</p>
                <p><strong>City:</strong> Kingston, ON</p>
                <p><strong>Postal Code:</strong> G7H 8I9</p>
                <p><strong>Phone Number:</strong> zzz-zzz-zzzz</p>
                <p><strong>Email:</strong> ktech3@email.com</p>
                <br>
                <h3>Hours</h3>
                <p><strong>Weekdays:</strong><br> 8:30 - 17:30</p>
                <p><strong>Weekends:</strong><br> 9:00 - 15:00</p>
            `,
            map: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11324.435325108768!2d-76.4860!3d44.2312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1617045123456"
        }
    };

    const rightContainer = document.querySelector(".location-right");
    const mapFrame = document.getElementById("googleMap");
    
    rightContainer.innerHTML = locationDetails.address1.text;
    mapFrame.src = locationDetails.address1.map;

    document.getElementById("address1").addEventListener("click", function () {
        rightContainer.innerHTML = locationDetails.address1.text;
        mapFrame.src = locationDetails.address1.map;
    });

    document.getElementById("address2").addEventListener("click", function () {
        rightContainer.innerHTML = locationDetails.address2.text;
        mapFrame.src = locationDetails.address2.map;
    });

    document.getElementById("address3").addEventListener("click", function () {
        rightContainer.innerHTML = locationDetails.address3.text;
        mapFrame.src = locationDetails.address3.map;
    });
});
