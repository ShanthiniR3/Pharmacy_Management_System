// Sample medicine data for demonstration
const medicines = [
  { id: 1, name: "Medicine 1", price: "$10", description: "Paracetomel" },
  { id: 2, name: "Medicine 2", price: "$15", description: "Aspirin" },
  { id: 3, name: "Medicine 3", price: "$20", description: "ciplox" },
  { id: 4, name: "Medicine 4", price: "$25", description: "Amoxicilin" },
  { id: 5, name: "Medicine 5", price: "$30", description: "Benadryl- Couphging Syrup" }
];

// Function to toggle section visibility and display medicine list
function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  const isVisible = section.style.display !== "none";

  // Toggle section visibility
  section.style.display = isVisible ? "none" : "block";

  // If it's the search section, display medicine list
  if (sectionId === "search" && isVisible) {
    displayMedicineList();
  }
}

// Function to display medicine list in the search section
function displayMedicineList() {
  const medicineList = document.getElementById('medicineList');
  medicineList.innerHTML = ""; // Clear previous list

  medicines.forEach(medicine => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "selectedMedicine";
    checkbox.value = medicine.id;
    checkbox.addEventListener('change', updateSelectedMedicines);

    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(`${medicine.name} - Price: ${medicine.price} - ${medicine.description}`));
    
    medicineList.appendChild(listItem);
  });
}

// Function to update the selected medicines list
function updateSelectedMedicines() {
  const selectedMedicines = document.getElementById('selectedMedicines');
  selectedMedicines.innerHTML = ""; // Clear previous list

  const checkboxes = document.querySelectorAll('input[name="selectedMedicine"]:checked');
  checkboxes.forEach(checkbox => {
    const selectedMedicine = medicines.find(medicine => medicine.id === parseInt(checkbox.value));
    const listItem = document.createElement('li');
    listItem.textContent = `${selectedMedicine.name} - Price: ${selectedMedicine.price}`;
    selectedMedicines.appendChild(listItem);
  });
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Display the success popup
  const successPopup = document.getElementById('successPopup');
  successPopup.style.display = "block";
}

// Function to close the popup
function closePopup() {
  const successPopup = document.getElementById('successPopup');
  successPopup.style.display = "none";
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const prescriptionForm = document.getElementById('prescriptionForm');
  prescriptionForm.addEventListener('submit', handleFormSubmit);

  const closeBtn = document.getElementById('closePopupBtn');
  closeBtn.addEventListener('click', closePopup);
});
goHomeButton.addEventListener('click', () => {
  // Redirect to the home page
  window.location.href = 'main.html'; // Replace 'index.html' with your home page URL
});
