/* ----- NAVIGATION BAR FUNCTION ----- */
   function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    // Toggle the 'responsive' class to open/close the menu
    if (menuBtn.classList.contains("responsive")) {
        menuBtn.classList.remove("responsive");
    } else {
        menuBtn.classList.add("responsive");
    }
}

function closeMenuOnClick() {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.remove("responsive");
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); 
        const targetId = this.getAttribute('href'); // Get the target section ID (e.g., #contact)
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' }); 
        closeMenuOnClick(); 
    });
});


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Future Engineer","Programmer","Future Developer"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 1000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social-icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)


/*-----DARK-MODE-ICON-----*/
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const darkModeIcon = document.getElementById('darkModeIcon');

// Check for previously saved theme from local storage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeIcon.classList.replace('uil-moon', 'uil-sun');
}

// Toggle dark mode on click
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.classList.replace('uil-moon', 'uil-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        darkModeIcon.classList.replace('uil-sun', 'uil-moon');
        localStorage.setItem('theme', 'light');
    }
});
  
    /* -- FORM-BUTTON SECTION-- */
  document.getElementById('contact-form').onsubmit = function(event) {
    event.preventDefault(); 
    
    const formData = new FormData(this);
    
    fetch('form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            console.log("Fetch response error:", response.statusText);
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Response Data:', data);
        const formResponse = document.getElementById('form-response');
        formResponse.style.display = 'block';
        formResponse.textContent = data.message;
        formResponse.style.color = data.status === 'success' ? 'green' : 'red';
        if (data.status === 'success') {
            this.reset(); // Reset form on success
        }
    })
    .catch(error => {
        console.error('Fetch Error:', error);
        alert('Sorry ! An error occurred.');
    });
};

  /* -- DOWNLOAD CV SECTION -- */
  document.getElementById('downloadCvButton').addEventListener('click', function() {
    window.location.href = 'shekharbhatt-resume.pdf';
});

document.getElementById('downloadCvButtonFeatured').addEventListener('click', function() {
    window.location.href = 'shekharbhatt-resume.pdf';
});

document.getElementById('downloadCvButtonAbout').addEventListener('click', function() {
    window.location.href = 'shekharbhatt-resume.pdf';
});
