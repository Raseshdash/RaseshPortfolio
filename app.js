const content = document.getElementById("content");
const galleryData = [

    { title: "Nature", category: "nature", img: "assets/gallery/nature1.jfif" },
    { title: "Nature", category: "nature", img: "assets/gallery/nature2.webp" },
    { title: "Mountains", category: "nature", img: "assets/gallery/mountain1.avif" },
    { title: "Mountains", category: "nature", img: "assets/gallery/mountain2.avif" },
    { title: "Mountains", category: "nature", img: "assets/gallery/mountain3.avif" },

    { title: "Sunset", category: "nature", img: "assets/gallery/sunset1.jfif" },
    { title: "Sunset", category: "nature", img: "assets/gallery/sunset2.avif" },
    { title: "Sunset", category: "nature", img: "assets/gallery/sunset3.avif" },
    { title: "Sunset", category: "nature", img: "assets/gallery/sunset4.avif" },
    { title: "Sunset", category: "nature", img: "assets/gallery/sunset5.avif" },
    { title: "Sunset", category: "nature", img: "assets/gallery/sunset6.avif" },
    { title: "Travel", category: "travel", img: "assets/gallery/travel1.avif" },
    { title: "Travel", category: "travel", img: "assets/gallery/travel2.avif" },
    { title: "Travel", category: "travel", img: "assets/gallery/travel3.avif" },
    { title: "Travel", category: "travel", img: "assets/gallery/travel4.avif" },
    { title: "Travel", category: "travel", img: "assets/gallery/travel5.avif" },


    { title: "Street", category: "travel", img: "assets/gallery/street1.avif" },
    { title: "Street", category: "travel", img: "assets/gallery/street2.avif" },
    { title: "Street", category: "travel", img: "assets/gallery/street3.avif" },
    { title: "Street", category: "travel", img: "assets/gallery/street4.avif" },

    { title: "People", category: "people", img: "assets/gallery/people1.avif" },
    { title: "People", category: "people", img: "assets/gallery/people2.avif" },
    { title: "People", category: "people", img: "assets/gallery/people3.avif" },
    { title: "People", category: "people", img: "assets/gallery/people4.avif" },
    { title: "People", category: "people", img: "assets/gallery/people5.webp" },

    { title: "Architecture", category: "architecture", img: "assets/gallery/architecture1.avif" },
    { title: "Architecture", category: "architecture", img: "assets/gallery/architecture2.avif" },
    { title: "Architecture", category: "architecture", img: "assets/gallery/architecture3.avif" },
    { title: "Architecture", category: "architecture", img: "assets/gallery/architecture4.avif" },
    { title: "Architecture", category: "architecture", img: "assets/gallery/architecture5.avif" },
    { title: "Architecture", category: "architecture", img: "assets/gallery/architecture6.avif" },
    { title: "Architecture", category: "architecture", img: "assets/gallery/architecture7.avif" },

        { title: "Animals", category: "animals", img: "assets/gallery/animal1.avif" },
    { title: "Animals", category: "animals", img: "assets/gallery/animal2.avif" },
    { title: "Animals", category: "animals", img: "assets/gallery/animal3.avif" },
    { title: "Animals", category: "animals", img: "assets/gallery/animal4.avif" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports1.avif" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports2.avif" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports3.avif" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports4.avif" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports5.avif" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports8.avif" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports7.webp" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports6.avif" }


];

function loadSection(section, el) {
    setActiveMenu(el);

    switch (section) {
        case "home":
            content.innerHTML = `
                <h1>Hi, I'm <span class="highlight">Rasesh Kumar Dash</span></h1>
                <p class="lead">Java | Spring Boot | Oracle ASAP Developer</p>

                <div class="card">
                    <p>
                        I build enterprise-grade backend systems with a strong focus on
                        performance, reliability, and clean architecture.
                    </p>

                    <p>
                        Currently working on telecom provisioning systems using
                        <b>Oracle ASAP</b> and <b>Spring Boot</b>.
                    </p>

                    <div style="margin-top:20px">
                        <button class="btn" onclick="downloadResume()">📄 Download Resume</button>
                        <button class="btn" onclick="loadSection('contact', document.querySelector('[data-label=Contact]'))">
                            Contact Me
                        </button>
                    </div>
                </div>
            `;
            break;


      case "about":
          content.innerHTML = `
              <div class="card-custom about-card">

                  <div class="about-layout">

                      <!-- PROFILE IMAGE -->
                      <div class="about-image">
                          <img src="assets/profile.png" alt="Rasesh Kumar Dash">
                      </div>

                      <!-- ABOUT CONTENT -->
                      <div class="about-content">
                          <h2>About Me</h2>

                          <h4 class="highlight">Rasesh Kumar Dash</h4>
                          <p class="subtitle">Java | Spring Boot | Oracle ASAP Developer</p>

                          <p>
                              I am a <b>Software Enginer</b> with 3+ years of experience in
                              enterprise telecom systems and backend application development.
                          </p>

                          <p>
                              Currently, I work extensively on <b>Oracle ASAP</b> provisioning,
                              building and maintaining SRT & CRT cartridges, and integrating
                              external systems using REST APIs.
                          </p>

                          <p>
                              I enjoy solving complex production issues, optimizing performance,
                              and writing clean, maintainable backend code.
                          </p>

                          <ul class="about-list">
                              <li>✔ Java & Spring Boot backend development</li>
                              <li>✔ Oracle ASAP provisioning (SRT / CRT)</li>
                              <li>✔ REST API integrations</li>
                              <li>✔ Production support & optimization</li>
                          </ul>

                          <div class="about-actions">
                              <button class="btn" onclick="downloadResume()">📄 Download Resume</button>
                              <button class="btn" onclick="loadSection('contact',
                                  document.querySelector('[data-label=Contact]'))">
                                  Contact Me
                              </button>
                          </div>
                      </div>

                  </div>

              </div>
               <div class="card-custom">
                                 <h2>Skills</h2>

                                 <div class="skill">
                                     <div class="skill-header">
                                         <span class="skill-name">Java</span>
                                         <span class="skill-percent">90%</span>
                                     </div>
                                     <div class="skill-bar">
                                         <div class="skill-progress" data-progress="90%"></div>
                                     </div>
                                 </div>

                                 <div class="skill">
                                     <div class="skill-header">
                                         <span class="skill-name">Spring Boot</span>
                                         <span class="skill-percent">85%</span>
                                     </div>
                                     <div class="skill-bar">
                                         <div class="skill-progress" data-progress="85%"></div>
                                     </div>
                                 </div>

                                 <div class="skill">
                                     <div class="skill-header">
                                         <span class="skill-name">Oracle ASAP</span>
                                         <span class="skill-percent">80%</span>
                                     </div>
                                     <div class="skill-bar">
                                         <div class="skill-progress" data-progress="80%"></div>
                                     </div>
                                 </div>

                                 <div class="skill">
                                     <div class="skill-header">
                                         <span class="skill-name">REST APIs</span>
                                         <span class="skill-percent">85%</span>
                                     </div>
                                     <div class="skill-bar">
                                         <div class="skill-progress" data-progress="85%"></div>
                                     </div>
                                 </div>

                                 <div class="skill">
                                     <div class="skill-header">
                                         <span class="skill-name">HTML / CSS / JavaScript</span>
                                         <span class="skill-percent">75%</span>
                                     </div>
                                     <div class="skill-bar">
                                         <div class="skill-progress" data-progress="75%"></div>
                                     </div>
                                 </div>
                             </div>
                             <h4>Backend</h4>
                             Java, Spring Boot, REST APIs

                             <h4>Telecom</h4>
                             Oracle ASAP, SRT, CRT, BRM Integration

                             <h4>Database</h4>
                             SQL, PL/SQL

                             <h4>Tools</h4>
                             Git, GitLab, Linux
          `;
                     animateSkills();

          break;


     case "gallery":
         content.innerHTML = `
             <div class="card-custom">
                 <h2>My Gallery</h2>
                 <p class="subtitle">Captured moments & memories</p>

                 <!-- FILTER BUTTONS -->
                 <div class="gallery-filters">
                     <button class="filter-btn active" onclick="filterGallery('all', this)">All</button>
                     <button class="filter-btn" onclick="filterGallery('nature', this)">Nature</button>
                     <button class="filter-btn" onclick="filterGallery('travel', this)">Travel</button>
                     <button class="filter-btn" onclick="filterGallery('people', this)">People</button>
                 </div>

                 <div class="gallery-grid" id="galleryGrid"></div>
             </div>
         `;

         renderGallery("all");
         initLazyLoading();
         break;



       case "experience":
           content.innerHTML = `
             <div class="card-custom">

                       <h2>Education</h2>

                       <div class="exp-item">
                           <h4>Master of Computer Applications (MCA)</h4>
                           <span class="exp-duration">2021 – 2023</span>
                           <p><b>MPC Autonomous College, Baripada</b></p>

                           <ul>
                               <li>Specialization in Software Development</li>
                               <li>Strong foundation in Java, Data Structures & Databases</li>
                               <li>Developed academic projects using Java & SQL</li>
                           </ul>
                       </div>

                       <hr>

                       <div class="exp-item">
                           <h4>Bachelor’s Degree (B.Sc / Equivalent)</h4>
                           <span class="exp-duration">2018 – 2021</span>
                           <p>University Affiliated College</p>

                           <ul>
                               <li>Mathematics & Computer Science background</li>
                               <li>Built logical problem-solving skills</li>
                           </ul>
                       </div>

                   </div>
               <div class="card-custom">

                   <h2>Experience</h2>

                   <div class="exp-item">
                       <h4>Software Enginer – Oracle ASAP Developer</h4>
                       <span class="exp-duration">2023 – Present</span>

                       <p>
                           Working in a telecom enterprise environment, responsible for
                           designing, developing, and supporting service provisioning flows
                           using Oracle ASAP.
                       </p>

                       <ul>
                           <li>Designed and enhanced SRT & CRT cartridges supporting high-volume ISP provisioning, reducing order failures.</li>
                           <li>Integrated BRM and external systems using REST APIs</li>
                           <li>Handled production issues, debugging ASAP logs and FLISTs</li>
                           <li>Optimized provisioning flows to reduce order failures</li>
                           <li>Collaborated with cross-functional teams for deployments</li>
                       </ul>
                   </div>

                   <hr>

                   <div class="exp-item">
                       <h4>Java Backend Developer (Intern / Project)</h4>
                       <span class="exp-duration">2022 – 2023</span>

                       <p>
                           Worked on backend development using Java and Spring Boot,
                           focusing on REST API design and database integration.
                       </p>

                       <ul>
                           <li>Built RESTful APIs using Spring Boot</li>
                           <li>Implemented CRUD operations with SQL / PL-SQL</li>
                           <li>Integrated frontend with backend services</li>
                           <li>Used Git for version control and collaboration</li>
                       </ul>
                   </div>

               </div>
                <div class="card-custom">

                                   <h2>Projects</h2>

                                   <div class="project-item">
                                       <h4>ISP Provisioning System</h4>
                                       <p>
                                           Enterprise provisioning solution built on Oracle ASAP to
                                           automate ISP service activation and lifecycle management.
                                       </p>
                                       <ul>
                                           <li>Technology: Oracle ASAP, Java, PL-SQL</li>
                                           <li>Integrated BRM for order and account handling</li>
                                           <li>Supported high-volume production traffic</li>
                                       </ul>
                                   </div>

                                   <hr>

                                   <div class="project-item">
                                       <h4>Portfolio Website (Single Page Application)</h4>
                                       <p>
                                           Personal portfolio website with modern UI and smooth animations,
                                           built as a JavaScript-driven SPA.
                                       </p>
                                       <ul>
                                           <li>Technology: HTML, CSS, JavaScript</li>
                                           <li>Dark/Light mode with localStorage</li>
                                           <li>Dynamic content loading and active menu highlighting</li>
                                       </ul>
                                   </div>

                                   <hr>

                                   <div class="project-item">
                                       <h4>Prabhat Makeup Website</h4>
                                       <p>
                                           Business website with backend support for gallery management
                                           and email notifications.
                                       </p>
                                       <ul>
                                           <li>Technology: Spring Boot, HTML, CSS, JavaScript</li>
                                           <li>Image upload and email alert functionality</li>
                                           <li>REST API based backend architecture</li>
                                       </ul>
                                   </div>

                               </div>
           `;
           break;



      case "contact":
          content.innerHTML = `
              <div class="card">
                  <h2>Contact Me</h2>

                  <!-- CONTACT DETAILS -->
                  <p>
                      <b>Email:</b> raseshdash.hathway@gmail.com
                      <button class="btn" onclick="navigator.clipboard.writeText('raseshdash.hathway@gmail.com')">
                          Copy
                      </button>
                  </p>

                  <p>
                      <b>Phone:</b> +91-7377786824
                      <button class="btn" onclick="navigator.clipboard.writeText('7377786824')">
                          Copy
                      </button>
                  </p>

                  <!-- SOCIAL -->
                  <div style="margin:15px 0">
                      <a href="https://linkedin.com/in/your-profile" target="_blank" class="btn">
                          LinkedIn
                      </a>
                      <a href="https://github.com/your-username" target="_blank" class="btn">
                          GitHub
                      </a>
                  </div>

                  <hr style="margin:25px 0">

                  <!-- CONTACT FORM -->
                  <h3>Send me a message</h3>

                  <form id="contact-form" style="max-width:500px">
                      <input type="hidden" name="access_key" value="6e977eca-1c4d-47dd-b82a-d3e5144b6558">

                      <div style="margin-bottom:12px">
                          <input type="text" name="name" placeholder="Your Name" required class="form-input">
                      </div>

                      <div style="margin-bottom:12px">
                          <input type="email" name="email" placeholder="Your Email" required class="form-input">
                      </div>
                         <div style="margin-bottom:12px">
                                                <input type="number" name="number" placeholder="Your number" required class="form-input">
                                            </div>

                      <div style="margin-bottom:12px">
                          <textarea name="message" rows="4" placeholder="Your Message" required class="form-input"></textarea>
                      </div>

                      <!-- Anti-spam -->
                      <input type="checkbox" name="botcheck" style="display:none">

                      <button type="submit" class="btn">Send Message</button>

                      <p id="form-status" style="margin-top:10px;"></p>
                  </form>
              </div>
          `;

          initContactForm();
          break;

           case "why":
               content.innerHTML = `
                   <div class="card">
                       <h2>Why Hire Me?</h2>
                       <ul>
                           <li>✔ Strong backend fundamentals</li>
                           <li>✔ Real production experience</li>
                           <li>✔ Telecom domain expertise</li>
                           <li>✔ Fast learner & reliable team member</li>
                       </ul>

                   </div>
                    <p>© 2025 <b>Rasesh Kumar Dash</b>. All rights reserved.</p>
                                                  <p class="footer-note">
                                                      Built with ❤️ using HTML, CSS & JavaScript.<br>
                                                      Open-source & free to use.
                                                  </p>
                                                  <p class="footer-ack">
                                                      Acknowledgements: Bootstrap Icons · Community Tutorials
                                                  </p>
               `;


    }
}
function downloadResume() {
    const link = document.createElement("a");
    link.href = "assets/test.pdf";
    link.download = "test.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function setActiveMenu(el) {
    document.querySelectorAll('.menu li').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
}

/* THEME TOGGLE */
function toggleTheme() {
    document.body.classList.toggle('light');
    const icon = document.querySelector('.theme-btn i');
    const light = document.body.classList.contains('light');

    icon.className = light ? 'bi bi-sun' : 'bi bi-moon';
    localStorage.setItem('theme', light ? 'light' : 'dark');
}

/* LOAD SAVED THEME */
(() => {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light');
        document.querySelector('.theme-btn i').className = 'bi bi-sun';
    }
})();

/* DEFAULT LOAD */
loadSection("home", document.querySelector(".menu li.active"));
const menuItems = document.querySelectorAll('.menu li');
let currentIndex = 0;

/* Highlight focus */
menuItems.forEach((item, index) => {
    item.addEventListener('focus', () => {
        currentIndex = index;
    });
});

/* Keyboard navigation */
document.addEventListener('keydown', (e) => {

    // Ignore typing inside inputs
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    switch (e.key) {

        // Arrow Down
        case 'ArrowDown':
            e.preventDefault();
            currentIndex = (currentIndex + 1) % menuItems.length;
            menuItems[currentIndex].focus();
            break;

        // Arrow Up
        case 'ArrowUp':
            e.preventDefault();
            currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
            menuItems[currentIndex].focus();
            break;

        // Enter key
        case 'Enter':
            e.preventDefault();
            menuItems[currentIndex].click();
            break;

        // Number shortcuts (1–6)
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            const index = parseInt(e.key) - 1;
            if (menuItems[index]) {
                menuItems[index].focus();
                menuItems[index].click();
            }
            break;
    }
});
function animateSkills() {
    const bars = document.querySelectorAll('.skill-progress');

    bars.forEach(bar => {
        bar.style.width = '0'; // reset (important)
        const value = bar.getAttribute('data-progress');

        // slight delay for smooth animation
        setTimeout(() => {
            bar.style.width = value;
        }, 150);
    });
}
async function initContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        status.textContent = "Sending...";
        status.style.opacity = "0.8";

        const formData = new FormData(form);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                status.textContent = "✅ Message sent successfully!";
                status.style.color = "var(--accent)";
                form.reset();
            } else {
                status.textContent = "❌ Something went wrong. Try again.";
                status.style.color = "red";
            }
        } catch (error) {
            status.textContent = "❌ Network error. Please try later.";
            status.style.color = "red";
        }
    });
}
function renderGallery(category) {
    const grid = document.getElementById("galleryGrid");
    grid.innerHTML = "";

    const items = category === "all"
        ? galleryData
        : galleryData.filter(i => i.category === category);

    items.forEach((item, index) => {
        grid.innerHTML += `
            <div class="gallery-item" onclick="openSlideshow('${item.img}')">
                <img
                    data-src="${item.img}"
                    alt="${item.title}"
                    class="lazy-img"
                >
                <div class="gallery-overlay">
                    <h3>${item.title}</h3>
                </div>
            </div>
        `;
    });
}

function filterGallery(category, btn) {
    document.querySelectorAll('.filter-btn')
        .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    renderGallery(category);
    initLazyLoading();
}


let slideIndex = 0;
let slideTimer = null;


function openSlideshow(imageSrc) {
    const modal = document.createElement("div");
    modal.className = "image-modal";
    modal.innerHTML = `
        <span class="close-btn">&times;</span>
        <img id="slideImage" src="${imageSrc}">
    `;

    modal.querySelector(".close-btn").onclick = () => {
        clearInterval(slideTimer);
        modal.remove();
    };

    document.body.appendChild(modal);
}
function initLazyLoading() {
    const imgs = document.querySelectorAll(".lazy-img");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.classList.add("loaded");
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.2 });

    imgs.forEach(img => observer.observe(img));
}


function showSlide() {
    const img = document.getElementById("slideImage");
    img.src = galleryData[slideIndex].img;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % galleryData.length;
    showSlide();
}
