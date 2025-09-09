document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".info-row");
  const goTop = document.getElementById("goTop");

  rows.forEach(row => {
    row.addEventListener("click", () => {
      row.classList.toggle("active");
    });
  });

  if (goTop) {
    goTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
