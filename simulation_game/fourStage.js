function fourStage() {
    checkValue();
    remove("thirdResult");
    remove("warningOneResult");
    remove("warningTwoStage");
    remove("warningOneStage");
    remove("warningTwoResult");
    setVisible("fourStage");
}

function fourStageW1() {
    checkValue();
    remove("warningOneResult");
    remove("warningTwoStage");
    remove("warningTwoResult");
    setVisible("fourStage");
}

function fourStageW2() {
    checkValue();
    remove("warningTwoResult");
    setVisible("fourStage");
}

function fourResult(numChose) {
    remove("fourStage");
    setVisible("fourResult");
    document.getElementById("fourCard").innerHTML += '<h5 class="card-title">Результат</h5>';
    switch (numChose) {
        case 1:
            document.getElementById("fourCard").innerHTML += '<p class="card-text">Заказчик доволен! Вы хорошо поработали! Репутация +20%, Команда +20%.</p>';
            reputation += 20;
            team += 20;
            break;
        case 2:
            document.getElementById("fourCard").innerHTML += '<p class="card-text">Заказчик рад, что сделали. Но не доволен вашей работой. Репутация -10%.</p>';
            reputation -= 10;
            break;
    }
    document.getElementById("fourCard").innerHTML += '<a class="btn btn-primary" onclick="final()">Продолжить!</a>';
    setValue(finance, reputation, team);
}