const form = document.querySelector('#signup-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'connection.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  const formData = new FormData(form);
  xhr.send(formData);

  xhr.onload = function() {
    if (xhr.status === 200) {
      const response = xhr.responseText;
      if (response === "1") {
        alert('Form submitted successfully!');
        // Here you can add code to display a success message or redirect the user to another page
      } else {
        alert('Error submitting form.');
        // Here you can add code to display an error message
      }
    } else {
      alert('AJAX request failed.');
      // Here you can add code to display an error message
    }
  };
});