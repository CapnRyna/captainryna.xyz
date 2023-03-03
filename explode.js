function explode() {
  // Remove any existing elements from the DOM
  const existingElements = document.querySelectorAll('body > *');
  existingElements.forEach(element => {
    element.remove();
  });

  // Set the background color of the body
  document.body.style.background = '#1f242d';

  // Create a new div to hold the GIF
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = 0;
  div.style.left = 0;
  div.style.width = '100%';
  div.style.height = '100%';
  div.style.background = 'rgba(0, 0, 0, 0.8) url(https://cdn.discordapp.com/attachments/1066495383058006137/1081037211270643814/explode-boom.gif) no-repeat center';
  div.style.backgroundSize = 'contain';
  div.style.zIndex = 9999;
  const audio = new Audio('https://captainryna.xyz/explode.mp3');
  audio.play();

  // Add the div to the DOM
  document.body.appendChild(div);

  setTimeout(() => {
    // Remove the GIF and display the message
    div.remove();
    const message = document.createElement('div');
    message.innerHTML = 'You exploded the page. Refresh to return.';
    message.style.color = '#ffffff';
    message.style.fontSize = '32px';
    message.style.fontWeight = 'bold';
    message.style.textAlign = 'center';
    message.style.marginTop = '50vh';
    document.body.appendChild(message);
  
    // Play the sound
  }, 1200);
}