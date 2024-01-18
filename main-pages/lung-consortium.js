function submitForm() {
    // Get form field values
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    const specialization = document.getElementById('specialization').value;
    const note = document.getElementById('note').value;

    // Check if any field is empty
    if (!name || !company || !email || !specialization || !note) {
        alert('All fields are required. Please fill in all fields.');
        return;
    }

    // You can add your form submission logic here.
    // For this example, we'll just show the success message and clear the form.
    document.getElementById('message').style.display = 'block';

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('company').value = '';
    document.getElementById('email').value = '';
    document.getElementById('specialization').value = '';
    document.getElementById('note').value = '';

    // Optionally, you can hide the message after a certain duration
    setTimeout(function() {
        document.getElementById('message').style.display = 'none';
    }, 3000); // Hides the message after 3 seconds
}