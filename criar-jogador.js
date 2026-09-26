const playerName = document.getElementById("playerName");
const playerNickname = document.getElementById("playerNickname");
const position = document.getElementById("position");

const previewName = document.getElementById("previewName");
const previewPosition = document.getElementById("previewPosition");

const createPlayer = document.getElementById("createPlayer");
const formMessage = document.getElementById("formMessage");

const backButton = document.getElementById("backButton");

const modelsButton = document.getElementById("modelsButton");
const cameraButton = document.getElementById("cameraButton");

const modelsModal = document.getElementById("modelsModal");
const closeModels = document.getElementById("closeModels");

const models = document.querySelectorAll(".model");


/* ATUALIZA PRÉVIA */

playerName.addEventListener("input", () => {

    const name = playerName.value.trim();

    previewName.textContent =
        name || "NOVO JOGADOR";
});


position.addEventListener("change", () => {

    previewPosition.textContent =
        position.value.toUpperCase();
});


/* VOLTAR */

backButton.addEventListener("click", () => {

    window.location.href = "index.html";

});


/* MODELOS */

modelsButton.addEventListener("click", () => {

    modelsModal.classList.remove("hidden");

});


closeModels.addEventListener("click", () => {

    modelsModal.classList.add("hidden");

});


models.forEach(model => {

    model.addEventListener("click", () => {

        models.forEach(item => {
            item.classList.remove("selected");
        });

        model.classList.add("selected");

        modelsModal.classList.add("hidden");

    });

});


/* CÂMERA */

cameraButton.addEventListener("click", () => {

    alert(
        "O scanner facial será ativado na próxima etapa."
    );

});


/* CRIAR JOGADOR */

createPlayer.addEventListener("click", () => {

    const name = playerName.value.trim();

    if (!name) {

        formMessage.textContent =
            "Digite o nome do jogador.";

        playerName.focus();

        return;
    }


    const player = {

        nome: name,

        apelido:
            playerNickname.value.trim() || name,

        idade:
            Number(document.getElementById("playerAge").value),

        nacionalidade:
            document.getElementById("nationality").value,

        posicao:
            position.value,

        pe:
            document.getElementById("foot").value,

        altura:
            Number(document.getElementById("height").value),

        peso:
            Number(document.getElementById("weight").value),

        modelo:
            document.querySelector(".model.selected")?.dataset.model || "01",

        criadoEm:
            new Date().toISOString()

    };


    localStorage.setItem(
        "legado_jogador",
        JSON.stringify(player)
    );


    window.location.href = "carreira.html";

});
