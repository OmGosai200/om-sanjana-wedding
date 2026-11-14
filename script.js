
// WEDDING COUNTDOWN
// Wedding date: 13 December 2026, 7:00 PM

const weddingDate = new Date("December 13, 2026 19:00:00").getTime();

function updateCountdown() {

  const now = new Date().getTime();
  const distance = weddingDate - now;

  const countdown = document.getElementById("countdown");

  if (distance <= 0) {
    countdown.innerHTML = "The Wedding Celebration Has Begun!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerHTML = `
    <div class="countdown-box">
      <span>${days}</span>
      <small>DAYS</small>
    </div>

    <div class="countdown-box">
      <span>${hours}</span>
      <small>HOURS</small>
    </div>

    <div class="countdown-box">
      <span>${minutes}</span>
      <small>MINUTES</small>
    </div>

    <div class="countdown-box">
      <span>${seconds}</span>
      <small>SECONDS</small>
    </div>
  `;
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ==================================
// WHATSAPP RSVP - THREE FAMILY NUMBERS
// ==================================

const whatsappNumbers = [
  "919512125031",
  "919879599309",
  "919879574435"
];

const rsvpForm = document.getElementById("rsvpForm");

rsvpForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const guestName =
    document.getElementById("guestName").value.trim();

  const response =
    document.getElementById("guestResponse").value;

  const guestMessage =
    document.getElementById("guestMessage").value.trim();

  const message =
    `Wedding RSVP - Om & Sanjana\n\n` +
    `Name: ${guestName}\n` +
    `Attendance: ${response}\n` +
    `Message: ${guestMessage || "No additional message"}\n\n` +
    `Wedding Date: 13 December 2026`;

  const encodedMessage = encodeURIComponent(message);

  whatsappNumbers.forEach((number) => {
    const whatsappURL =
      `https://wa.me/${number}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  });

});




// ==================================
// 3. BACKGROUND MUSIC
// ==================================

const music = document.getElementById("weddingMusic");

function toggleMusic() {
  if (music.paused) {
    music.play()
      .then(() => console.log("Music playing"))
      .catch(error => console.error("Music error:", error));
  } else {
    music.pause();
  }
}

// SHARE WEDDING INVITATION
function shareWeddingInvitation() {
  const shareData = {
    title: "Om & Sanjana Wedding Invitation",
    text: "You are cordially invited to celebrate the wedding of Om & Sanjana on 13 December 2026. We look forward to celebrating with you!",
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch((error) => {
      console.log("Sharing cancelled:", error);
    });
  } else {
    navigator.clipboard.writeText(shareData.text + " " + shareData.url)
      .then(() => alert("Wedding invitation link copied!"))
      .catch(() => alert("Please copy the website link manually."));
  }
}

// HOST CARDS SCROLL REVEAL

const hostCards = document.querySelectorAll(".host-card.reveal");

const hostObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

hostCards.forEach(card => {
  hostObserver.observe(card);
});

// GALLERY SCROLL ANIMATION

const galleryImages = document.querySelectorAll(".gallery img");

const galleryObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

galleryImages.forEach(img => {
  galleryObserver.observe(img);
});

// WEDDING EVENTS SCROLL ANIMATION

const eventCards = document.querySelectorAll(".schedule-card.reveal");

const eventObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

eventCards.forEach(card => {
  eventObserver.observe(card);
});

/* HERO AUTOMATIC PHOTO SLIDESHOW */

const heroSlides = document.querySelectorAll(".hero-slide");
let currentHeroSlide = 0;

function changeHeroSlide() {
  heroSlides[currentHeroSlide].classList.remove("active");

  currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;

  heroSlides[currentHeroSlide].classList.add("active");
}

if (heroSlides.length > 1) {
  setInterval(changeHeroSlide, 4000);
}
