
// Wrap the code in an async function
async function fetchUserData() {
    try {
        // Fetch user data from the API
        const response = await fetch("https://assessment-api-biay.onrender.com/users");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const userData = await response.json();
        
        // Display the user data in a table
        console.log(userData);
    }
    catch (err) {
        console.log(err);
    }
}

// Call the async function to fetch user data
fetchUserData();