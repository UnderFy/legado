const newCareer = document.getElementById("newCareer");
const continueCareer = document.getElementById("continueCareer");
const settings = document.getElementById("settings");

newCareer.addEventListener("click", () => {
    window.location.href = "criar-jogador.html";
});

continueCareer.addEventListener("click", () => {
    alert("Nenhuma carreira encontrada.");
});

settings.addEventListener("click", () => {
    alert("Configurações serão adicionadas em breve.");
});
