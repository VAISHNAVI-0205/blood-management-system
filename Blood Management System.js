let donations = [];

// Function to add a new blood donation
function addDonation() {
    const bloodType = document.getElementById("bloodType").value;
    const donorName = document.getElementById("donorName").value;
    const donationDate = document.getElementById("donationDate").value;

    if (!donorName || !donationDate) {
        alert("Please fill in all fields!");
        return;
    }

    const donation = {
        id: Date.now(),
        bloodType: bloodType,
        donorName: donorName,
        donationDate: donationDate,
        isUsed: false
    };

    donations.push(donation);
    renderDonations();
    clearForm();
}

// Function to mark a blood donation as used
function markAsUsed(id) {
    const donation = donations.find(d => d.id === id);
    donation.isUsed = true;
    renderDonations();
}

// Function to delete a blood donation
function deleteDonation(id) {
    donations = donations.filter(d => d.id !== id);
    renderDonations();
}

// Function to render the list of donations
function renderDonations() {
    const donationList = document.getElementById("donationList");
    donationList.innerHTML = "";

    donations.forEach(donation => {
        const donationItem = document.createElement("li");
        donationItem.classList.add(donation.isUsed ? "used" : "");

        donationItem.innerHTML = `
            <strong>${donation.bloodType}</strong> donated by ${donation.donorName} on ${donation.donationDate}
            <div>
                <button class="used-btn" onclick="markAsUsed(${donation.id})">Mark as Used</button>
                <button class="delete-btn" onclick="deleteDonation(${donation.id})">Delete</button>
            </div>
        `;

        donationList.appendChild(donationItem);
    });
}

// Function to clear the form
function clearForm() {
    document.getElementById("donorName").value = "";
    document.getElementById("donationDate").value = "";
}
