document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
  
    fetch('http://127.0.0.1:5000/add_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('User added successfully');
      loadUsers();
    })
    .catch(error => console.error('Error:', error));
  });
  
  function loadUsers() {
    fetch('http://127.0.0.1:5000/get_users')
      .then(response => response.json())
      .then(data => {
        const userList = document.getElementById('userList');
        userList.innerHTML = '<h2>Users</h2>' + data.map(user => `<p>${user.username} (${user.email})</p>`).join('');
      })
      .catch(error => console.error('Error:', error));
  }
  
  document.addEventListener('DOMContentLoaded', loadUsers);

  // Register button click event
document.getElementById('registerButton').addEventListener('click', function() {
  // Open coleaskey.space in a new tab
  window.open('https://coleaskey.space', '_blank');
});
  