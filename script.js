const loginForm = document.getElementById("loginForm");
const uploadForm = document.getElementById("uploadForm");

const loginMessage = document.getElementById("loginMessage");
const uploadMessage = document.getElementById("uploadMessage");

const DEMO_USER = "demo_user";
const DEMO_PASSWORD = "photos123";

const setMessage = (element, text, type) => {
  element.textContent = text;
  element.className = `message ${type}`;
};

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === DEMO_USER && password === DEMO_PASSWORD) {
    setMessage(loginMessage, "Login erfolgreich! Willkommen im Demo-Portal.", "success");
    return;
  }

  setMessage(
    loginMessage,
    "Ungültige Zugangsdaten. Nutze den Demo-Benutzer aus dem linken Bereich.",
    "error"
  );
});

uploadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const photoTitle = document.getElementById("photoTitle").value.trim();
  const fileInput = document.getElementById("photoUpload");

  if (!photoTitle || !fileInput.files.length) {
    setMessage(uploadMessage, "Bitte Titel und Bild auswählen.", "error");
    return;
  }

  const fileName = fileInput.files[0].name;
  setMessage(uploadMessage, `"${photoTitle}" mit Datei ${fileName} wurde bereitgestellt.`, "success");
});
