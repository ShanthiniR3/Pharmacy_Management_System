const users = [
    { username: "mohan83", password: "mohana@1983" },
    { username: "Anu06", password: "anu@045" },
    
  ];
  
  function authenticateUser(username, password) {
    for (let user of users) {
      if (user.username === username && user.password === password) {
        window.location.href = "admin_home.html"; 
        return true;
      }
    }
    return false;
  }
  // Handle button click to go to home page
goHomeButton.addEventListener('click', () => {
  // Redirect to the home page
  window.location.href = 'main.html'; // Replace 'index.html' with your home page URL
});

  