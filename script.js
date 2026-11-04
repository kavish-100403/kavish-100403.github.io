// Small enhancements only; the site works without JavaScript.
document.documentElement.classList.remove("no-js");

const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");

function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  links.classList.toggle("open", open);
}

toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
links.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && links.classList.contains("open")) { setMenu(false); toggle.focus(); }
});

// Highlight the nav link for the section in view.
const navAnchors = [...links.querySelectorAll("a")];
const sections = navAnchors.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach((a) => {
        if (a.getAttribute("href") === "#" + entry.target.id) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach((s) => observer.observe(s));
}

document.getElementById("year").textContent = new Date().getFullYear();

// Light/dark toggle. A saved choice wins; otherwise follow the system setting.
const root = document.documentElement;
const themeBtn = document.querySelector(".theme-toggle");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function savedTheme() {
  try { return localStorage.getItem("theme"); } catch (e) { return null; }
}

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  const next = theme === "dark" ? "light" : "dark";
  themeBtn.setAttribute("aria-label", `Switch to ${next} mode`);
  themeBtn.title = `Switch to ${next} mode`;
}

applyTheme(root.getAttribute("data-theme") || (systemDark.matches ? "dark" : "light"));

themeBtn.addEventListener("click", () => {
  const theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(theme);
  try { localStorage.setItem("theme", theme); } catch (e) {}
});

systemDark.addEventListener("change", (e) => {
  if (!savedTheme()) applyTheme(e.matches ? "dark" : "light");
});
