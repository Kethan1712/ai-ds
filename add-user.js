// add-user.js
const form = document.getElementById('addUserForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const id = document.getElementById('id').value;
  const name = document.getElementById('name').value;
  const gender = document.getElementById('gender').value;

  try {
    const response = await fetch('https://ai-ds-backend-6tnt.onrender.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, name, gender }),
    });
    const newUser = await response.json();

    if (response.ok) {
      alert('User added successfully');
      window.location.href = 'view-user.html'; // Redirect to view users page
    } else {
      alert('Error adding user');
    }
  } catch (err) {
    console.error('Error adding user:', err);
    alert('Error adding user');
  }
});
