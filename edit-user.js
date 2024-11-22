window.onload = async () => {
  const userId = new URLSearchParams(window.location.search).get('id');  // Get user ID from URL query string

  if (!userId) {
      alert('No user ID found in URL.');
      return;
  }

  try {
      // Fetch the user data using the ID from the query string
      const response = await fetch(`https://ai-ds-backend-6tnt.onrender.com/users/${userId}`);

      if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const user = await response.json();

      // Fill the form with the user data
      document.getElementById('id').value = user.id;
      document.getElementById('name').value = user.name;
      document.getElementById('gender').value = user.gender;
  } catch (err) {
      console.error('Error fetching user:', err);
      alert('Unable to fetch user data: ' + err.message);
  }
};

// Handle form submission for editing user
document.getElementById('edit-form').onsubmit = async (e) => {
  e.preventDefault();  // Prevent form from submitting normally

  const userId = document.getElementById('id').value;
  const name = document.getElementById('name').value;
  const gender = document.getElementById('gender').value;

  const updatedUser = { id: userId, name, gender };

  try {
      const response = await fetch(`https://ai-ds-backend-6tnt.onrender.com/users/${userId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedUser)
      });

      if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      alert('User updated successfully!');
  } catch (err) {
      console.error('Error updating user:', err);
      alert('Error updating user: ' + err.message);
  }
};
