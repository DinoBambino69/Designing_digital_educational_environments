let finance = 100;
let reputation = 0;
let team = 0;

function startGame() {
    remove("startCard");
    setVisible("param");
    setVisible("preStart");
    setValue(finance, reputation, team);
}

function setValue(finance, reputation, team) {
    document.getElementById("finance").innerText = finance + "%";
    document.getElementById("reputation").innerText = reputation + "%";
    document.getElementById("team").innerText = team + "%";
}

function setVisible(id) {
    document.getElementById(id).style.visibility = "visible";
}

function checkValue() {
    if (reputation <= 0) {
        alert("Игра проиграна! Вы утратили свою репутацию!");
        window.location.reload();
    } else if (team <= 0) {
        alert("Игра проиграна! Вы утратили доверие команды!");
        window.location.reload();
    }
}

function firstValue() {
    result = reputation + team;
    if (result == 100 && reputation != 0 && team != 0) {
        setValue(finance, reputation, team);
        firstStage();
    } else alert("Проверьте правильность введенных чисел!");
}

function remove(id) {
    document.getElementById(id).remove();
}