document.addEventListener('DOMContentLoaded', () => {
  const prescriptionForm = document.getElementById('prescriptionForm');
  const verificationResult = document.getElementById('verificationResult');

  prescriptionForm.addEventListener('submit', event => {
    event.preventDefault();

    // Get values from form inputs
    const userName = document.getElementById('userName').value;
    const physicianName = document.getElementById('physicianName').value;
    const date = document.getElementById('date').value;
    const clinicName = document.getElementById('clinicName').value;
    const medicines = document.getElementById('medicines').value;

    // Display prescription details
    verificationResult.innerHTML = `
      <strong>Prescription Uploaded Successfully!</strong><br>
      <p><strong>User Name:</strong> ${userName}</p>
      <p><strong>Physician Name:</strong> ${physicianName}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Clinic/Hospital Name:</strong> ${clinicName}</p>
      <p><strong>Medicines:</strong></p>
      <p>${medicines}</p>
    `;
   
});

// Handle button click to go to home page
goHomeButton.addEventListener('click', () => {
  // Redirect to the home page
  window.location.href = 'customer_home.html'; // Replace 'index.html' with your home page URL
});
});
