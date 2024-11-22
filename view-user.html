window.onload = async () => {
  try {
    const response = await fetch('https://ai-ds-backend-6tnt.onrender.com');  // Adjust URL based on your API
    const users = await response.json();

    if (response.ok) {
      const userList = document.getElementById('userList');
      userList.innerHTML = ''; // Clear any existing data in the table

      users.forEach(user => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.gender}</td>
          <td><a href="edit-user.html?id=${user.id}">Edit</a></td>
          <td><button onclick="deleteUser(${user.id})">Delete</button></td>
        `;
        
        userList.appendChild(row);
      });
    } else {
      alert('Error fetching users');
    }
  } catch (err) {
    console.error('Error fetching users:', err);
    alert('Error fetching users');
  }
};

// Delete User function
async function deleteUser(userId) {
  try {
    const response = await fetch(`https://ai-ds-backend-6tnt.onrender.com/users/${userId}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      alert('User deleted successfully');
      location.reload(); // Reload the page after deleting user
    } else {
      alert('Error deleting user');
    }
  } catch (err) {
    console.error('Error deleting user:', err);
    alert('Error deleting user');
  }
}
