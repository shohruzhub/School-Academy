// =========================================
// SCHOOL ACADEMY
// Main JavaScript
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("School Academy loaded successfully.");

  // Smooth navigation for internal links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});


// =========================================
// COURSE BUTTONS
// =========================================

function showCourse(courseName) {
  alert(
    `${courseName}\n\nThis course is coming soon!`
  );
}
