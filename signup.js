const users = [];

function addUser(fullname, username, email, dob, state, country, phone, address, password) {
  users.push({
    fullname: fullname,
    username: username,
    email: email,
    dob: dob,
    state: state,
    country: country,
    phone: phone,
    address: address,
    password: password
  });
}

// Sample users
addUser("John Doe", "johndoe", "johndoe@example.com", "1990-01-01", "California", "USA", "1234567890", "123 Main St", "password1");
addUser("Jane Smith", "janesmith", "janesmith@example.com", "1995-05-15", "Texas", "USA", "9876543210", "456 Elm St", "password2");
addUser("Alice Johnson", "alicejohnson", "alice@example.com", "1988-12-25", "New York", "USA", "8765432109", "789 Oak St", "password3");
addUser("Bob Williams", "bobwilliams", "bob@example.com", "1980-07-10", "Florida", "USA", "7654321098", "321 Pine St", "password4");
addUser("Eva Martinez", "evamartinez", "eva@example.com", "1987-03-20", "Arizona", "USA", "6543210987", "654 Cedar St", "password5");
goHomeButton.addEventListener('click', () => {
  // Redirect to the home page
  window.location.href = 'main.html'; 
});
