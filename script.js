document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    var isOpen = links.style.display === "flex";
    links.style.display = isOpen ? "none" : "flex";
    links.style.flexDirection = "column";
    links.style.gap = "14px";
    links.style.position = "absolute";
    links.style.top = "56px";
    links.style.right = "24px";
    links.style.background = "#1f2d24";
    links.style.padding = "16px 20px";
    links.style.borderRadius = "3px";
    links.style.border = "1px solid #3a4a3d";
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });
});
