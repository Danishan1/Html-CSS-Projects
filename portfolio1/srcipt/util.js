// For Navigation List on Small Device versions
const navItems = document.querySelectorAll(".nav .d4 ul li");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("click").checked = false;
  });
});


// // For Navigation
// const sectionIds = ["about", "education", "experience", "skills", "projects", "contact"];
// // Create an observer instance
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Get the ID of the intersecting section
//         const sectionId = entry.target.id;

//         // Update the page title based on the section ID
//         document.title =
//           `${sectionId.charAt(0).toUpperCase()}${sectionId.slice(1)}` +
//           ` | Danishan`;

//         // Update the URL hash to reflect the section ID
//         history.replaceState(null, null, `#${sectionId}`);
//       }
//     });
//   },
//   { threshold: 0.5 }
// );

// // Observe each section
// sectionIds.forEach((sectionId) => {
//   const section = document.getElementById(sectionId);
//   observer.observe(section);
// });
