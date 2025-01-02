document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const medicineList = document.getElementById('medicineList');
  const prescriptionList = document.getElementById('prescriptionList');
  const placeOrderBtn = document.getElementById('placepres');
  const orderStatus = document.getElementById('presStatus');

  let medicines = [
    { name: 'Paracetamol' },
    { name: 'Ibuprofen' },
    { name: 'Aspirin' },
    { name: 'Loratadine' },
    { name: 'Omeprazole' },
    { name: 'Lansoprazole' },
    { name: 'Cetirizine' },
    { name: 'Simethicone' },
    { name: 'Loperamide' },
    { name: 'Docusate Sodium' },
    { name: 'Diphenhydramine' },
    { name: 'Hydrocortisone Cream' },
    { name: 'Polyethylene Glycol (PEG)' },
    { name: 'Bisacodyl' },
    { name: 'Fexofenadine' },
    { name: 'Ranitidine' },
    { name: 'Metformin' },
    { name: 'Atorvastatin' },
    { name: 'Metoprolol' },
    { name: 'Amoxicillin' }
];

  // Function to filter medicines based on search input
  function filterMedicines(searchTerm) {
    const filteredMedicines = medicines.filter(medicine => 
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayMedicines(filteredMedicines);
  }

  // Function to display filtered medicines
  function displayMedicines(filteredMedicines) {
    medicineList.innerHTML = '';
    filteredMedicines.forEach(medicine => {
      const listItem = document.createElement('li');
      listItem.textContent = medicine.name;
      listItem.addEventListener('click', () => addToPrescription(medicine.name));
      medicineList.appendChild(listItem);
    });
  }

  // Function to add medicine to prescription list
  function addToPrescription(medicineName) {
    const listItem = document.createElement('li');
    listItem.textContent = medicineName;
    prescriptionList.appendChild(listItem);
  }

  // Event listener for search input
  searchInput.addEventListener('input', function() {
    filterMedicines(this.value);
  });

  // Event listener for uploading presscription button
  placepres.addEventListener('click', function() {
    alert('Prescription uploaded successfully !!!');
  });
  goHomeButton.addEventListener('click', () => {
    // Redirect to the home page
    window.location.href = 'customer_home.html'; // Replace 'index.html' with your home page URL
  });
  
});