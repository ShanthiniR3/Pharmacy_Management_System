document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const medicineList = document.getElementById('medicineList');
    const prescriptionList = document.getElementById('prescriptionList');
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    const orderStatus = document.getElementById('orderStatus');
  
    let medicines = [
      { name: 'Paracetamol', stocks: 100 },
      { name: 'Ibuprofen', stocks: 80 },
      { name: 'Aspirin', stocks: 70 },
      { name: 'Loratadine', stocks: 60 },
      { name: 'Omeprazole', stocks: 90 },
      { name: 'Lansoprazole', stocks: 85 },
      { name: 'Cetirizine', stocks: 75 },
      { name: 'Simethicone', stocks: 50 },
      { name: 'Loperamide', stocks: 55 },
      { name: 'Docusate Sodium', stocks: 65 },
      { name: 'Diphenhydramine', stocks: 0 },
      { name: 'Hydrocortisone Cream', stocks: 30 },
      { name: 'Polyethylene Glycol (PEG)', stocks: 45 },
      { name: 'Bisacodyl', stocks: 0 },
      { name: 'Fexofenadine', stocks: 55 },
      { name: 'Ranitidine', stocks: 50 },
      { name: 'Metformin', stocks: 80 },
      { name: 'Atorvastatin', stocks: 75 },
      { name: 'Metoprolol', stocks: 70 },
      { name: 'Amoxicillin', stocks: 65 }
    ];
  
    let timeoutId; // Variable to store timeout ID for delay
  
    // Function to filter medicines based on search input after a delay
    function delayedFilterMedicines(searchTerm) {
      // Clear previous timeout
      clearTimeout(timeoutId);
  
      // Set new timeout to delay filtering and displaying of medicines
      timeoutId = setTimeout(() => {
        const filteredMedicines = medicines.filter(medicine => 
          medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        displayMedicines(filteredMedicines);
      }, 300); // Delay of 300 milliseconds (adjust as needed)
    }
  
    // Function to display filtered medicines
    function displayMedicines(filteredMedicines) {
      medicineList.innerHTML = '';
      filteredMedicines.forEach(medicine => {
        const listItem = document.createElement('li');
        listItem.textContent = `${medicine.name} (Stocks: ${medicine.stocks})`;
        listItem.classList.add(medicine.stocks > 0 ? 'available' : 'out-of-stock');
        listItem.addEventListener('click', () => {
          if (medicine.stocks > 0) {
            addToPrescription(medicine.name);
          } else {
            informSupplier(medicine.name);
          }
        });
        medicineList.appendChild(listItem);
      });
    }
  
    // Function to add medicine to prescription list
    function addToPrescription(medicineName) {
      const listItem = document.createElement('li');
      listItem.textContent = medicineName;
      prescriptionList.appendChild(listItem);
    }
  
    // Function to inform supplier about out-of-stock medicine
    function informSupplier(medicineName) {
      // Simulate informing the supplier (you can replace this with actual communication method)
      orderStatus.textContent = `Out of stock: ${medicineName}. Informing supplier...`;
      setTimeout(() => {
        orderStatus.textContent = ''; // Clear order status after 3 seconds
      }, 3000); // Clear after 3 seconds (3000 milliseconds)
    }
  
    // Event listener for search input (on input change)
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.trim();
  
      if (searchTerm.length > 0) {
        delayedFilterMedicines(searchTerm);
      } else {
        medicineList.innerHTML = ''; // Clear medicine list if search term is empty
      }
    });
  
    // Event listener for place order button
    placeOrderBtn.addEventListener('click', function() {
      orderStatus.textContent = 'Order Placed!';
      alert('Order placed !');
    });
    goHomeButton.addEventListener('click', () => {
        // Redirect to the home page
        window.location.href = 'pharmacist_home.html'; // Replace 'index.html' with your home page URL
      });
      
  });
  