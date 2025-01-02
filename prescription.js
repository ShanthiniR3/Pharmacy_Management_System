const validPhysicians = [
    {
      "name": "Dr. David Miller",
      "hospital": "Central Hospital"
    },
    {
      "name": "Dr. Jennifer Smith",
      "hospital": "Northwest Medical Center"
    },
    {
      "name": "Dr. Christopher Lee",
      "hospital": "Southside General Hospital"
    },
    {
      "name": "Dr. Samantha White",
      "hospital": "Sunset Regional Hospital"
    },
    {
      "name": "Dr. Jonathan Taylor",
      "hospital": "Midtown Health Center"
    },
    {
      "name": "Dr. Amanda Wilson",
      "hospital": "Valley Medical Clinic"
    },
    {
      "name": "Dr. Robert Harris",
      "hospital": "Mountainview Hospital"
    },
    {
      "name": "Dr. Jessica Brown",
      "hospital": "Harborview Medical Center"
    },
    {
      "name": "Dr. Daniel Martinez",
      "hospital": "Lakefront Medical Center"
    },
    {
      "name": "Dr. Rachel Carter",
      "hospital": "Unity Regional Hospital"
    }
  ];
  
  
  function verifyPrescription(prescription) {
    const { physicianName, hospitalName } = prescription;
  
    // Check if the physician name and hospital name match any valid entry
    const isValidPrescription = validPhysicians.some(physician => {
      return (
        physician.name === physicianName &&
        physician.hospital === hospitalName
      );
    });
  
    return isValidPrescription;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const prescriptionForm = document.getElementById('prescriptionForm');
    const verificationResult = document.getElementById('verificationResult');
  
    prescriptionForm.addEventListener('submit', event => {
      event.preventDefault();
  
      const physicianName = document.getElementById('physicianName').value;
      const hospitalName = document.getElementById('clinicName').value; // Updated to 'clinicName'
  
      const prescription = { physicianName, hospitalName };
      const isValid = verifyPrescription(prescription);
  
      if (isValid) {
        verificationResult.textContent = 'Valid Prescription';
      } else {
        verificationResult.textContent = 'Invalid Prescription. Order Cancelled: Physician or hospital mismatch.';
      }
    });
    goHomeButton.addEventListener('click', () => {
        // Redirect to the home page
        window.location.href = 'pharmacist_home.html'; // Replace 'index.html' with your home page URL
      });
      
  });
  