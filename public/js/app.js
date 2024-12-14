// Detect the Operating System
function detectOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }
  if (/android/i.test(userAgent)) {
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }
  if (/Macintosh/i.test(userAgent)) {
    return "MacOS";
  }
  if (/Windows NT/i.test(userAgent)) {
    return "Windows";
  }
  if (/Linux/i.test(userAgent)) {
    return "Linux";
  }
  return "Unknown OS";
}

// Display the Operating System in the UI
const osInfoElement = document.createElement("div");
osInfoElement.textContent = `You are using: ${detectOperatingSystem()}`;
osInfoElement.style.color = "#bb86fc"; // Optional styling
osInfoElement.style.marginTop = "20px";

// Append to the container
document.querySelector(".container").appendChild(osInfoElement);


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
