function secondStage() {
    checkValue();
    remove("firstResult");
    setVisible("secondStage");
}

function secondResult(numChose) {
    remove("secondStage");
    setVisible("secondResult");
    document.getElementById("secondCard").innerHTML += '<h5 class="card-title">Результат</h5>';
    switch (numChose) {
        case 1:
            document.getElementById("secondCard").innerHTML += '<p class="card-text">Команда не довольна, ведь это ваша задача – разделить и поставить задачи. Команда -30%, Репутация -30%</p>';
            team -= 30;
            reputation -= 30;
            break;
        case 2:
            document.getElementById("secondCard").innerHTML += '<p class="card-text">Вам удается все сделать правильно. Команда +10%, Репутация +10%</p>';
            team += 10;
            reputation += 10;
            break;
        case 3:
            document.getElementById("secondCard").innerHTML += '<p class="card-text">С помощью команды вы правильно распределяете роли и задачи. Однако команда сомневается в ваших качествах. Репутация -10%</p>';
            reputation -=10;
            break;
    }
    document.getElementById("secondCard").innerHTML += '<a class="btn btn-primary" onclick="thirdStage()">Продолжить!</a>';
    setValue(finance, reputation, team);
}