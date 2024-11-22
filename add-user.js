document.getElementById('add-form').onsubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;

    // Prepare the user object
    const newUser = {
        name,
        gender
    };

    try {
        // Send POST request to add user
        const response = await fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const addedUser = await response.json();
        alert(`User added successfully! ID: ${addedUser.id}`);
    } catch (err) {
        console.error('Error adding user:', err);
        alert('Error adding user: ' + err.message);
    }
};
