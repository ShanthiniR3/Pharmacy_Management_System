const users = [
    { username: "mohana83", password: "mohana@1983" },
    { username: "Anu_Swathi06", password: "anu@045" },
    { username: "Janu11", password: "hello89" },
    { username: "Janavi03", password: "uvw@123" }
  ];
  
  function authenticateUser(username, password) {
    for (let user of users) {
      if (user.username === username && user.password === password) {
        window.location.href = "pharmacist_home.html"; 
        return true;
      }
    }
    return false;
  }
  goHomeButton.addEventListener('click', () => {
    // Redirect to the home page
    window.location.href = 'main.html'; // Replace 'index.html' with your home page URL
  });
  
  