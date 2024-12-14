// Get DOM elements
const volumeInput = document.getElementById('volumeInput');
const setVolumeButton = document.getElementById('setVolumeButton');

// Function to handle volume setting
const handleSetVolume = () => {
  const volumeValue = parseFloat(volumeInput.value);
  if (isNaN(volumeValue) || volumeValue < 0 || volumeValue > 100) {
    alert('Invalid input. Please enter a number between 0 and 100.');
  } else {
    alert(`Volume set to ${volumeValue}%`);
    // Add logic here for controlling volume if needed
  }
};

// Attach event listener to the button
setVolumeButton.addEventListener('click', handleSetVolume);
