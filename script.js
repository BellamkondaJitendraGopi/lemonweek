document.getElementById('booking-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  // Normally you would send this data to a server for processing
  console.log('Booking Details:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Date:', date);
  console.log('Time:', time);

  // Reset form
  document.getElementById('booking-form').reset();
});
