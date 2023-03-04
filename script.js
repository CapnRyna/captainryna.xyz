let menuIcon = document.querySelector('#menu-icon');
let navbar = document. querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}








let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



const typed = new Typed('.multiple-text', {
    strings: ["Frontend Developer", "Part-time comedian", "Nature Activist", "Dog Lover"],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true,

});







function explode() {
    // Remove any existing elements from the DOM
    const existingElements = document.querySelectorAll('body > *');
    existingElements.forEach(element => {
      element.remove();
    });
    document.body.style.background = '#1f242d';
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
  
    document.body.appendChild(div);
  
    setTimeout(() => {
      div.remove();
      const message = document.createElement('div');
      message.innerHTML = 'You exploded the page. Refresh to return.';
      message.style.color = '#ffffff';
      message.style.fontSize = '32px';
      message.style.fontWeight = 'bold';
      message.style.textAlign = 'center';
      message.style.marginTop = '50vh';
      document.body.appendChild(message);
    
    }, 1200);
  };



ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 200,

});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });







const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const webhookUrl = "https://discord.com/api/webhooks" + "1081372130106675271/OK5hC5G3c3Mdj_hKXVD5HXRffIIqWr8FgW4cLlDrPvzs1IGAahFOnYyNXXU8cSNWS-hY";
  const name = document.querySelector("input[type=text][placeholder=Name]").value;
  const contact = document.querySelector(".contact heading");
  const subject = document.querySelector("input[type=text][placeholder=Subject]").value;
  const message = document.querySelector("textarea").value;
  const payload = JSON.stringify({
    embeds: [
      {
        author: {
            name: `Name: ${name}`,
        },

        title: `Subject: ${subject}`,
        description: `Message: ${message}`,
      },
    ],
  });
  

  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  })
    .then((response) => console.log(response))
    .catch((error) => console.error(error))})




    function showMessage() {
        var sentSound = document.getElementById("sent-sound");
        sentSound.play();
      }
      
