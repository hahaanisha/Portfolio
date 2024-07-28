document.addEventListener("DOMContentLoaded", function () {
  const typewriterElement = document.querySelector(".typewriter");
  const words = [
    "Student",
    "Full Stack Developer",
    "Designer",
    "ML Enthusiast",
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let currentWord = "";
  let isDeleting = false;

  function type() {
    currentWord = words[wordIndex];
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typewriterElement.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }

  type();
});



