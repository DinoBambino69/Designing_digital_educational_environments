function firstStage() {
    remove("preStart");
    setVisible("firstStage");
}

function firstResult(numChose) {
    remove("firstStage");
    setVisible("firstResult");
    document.getElementById("firstCard").innerHTML += '<h5 class="card-title">Результат</h5>';
    switch (numChose) {
        case 1:
            document.getElementById("firstCard").innerHTML += '<p class="card-text">Вы смогли договориться с заказчиком, он рад и ждет результатов. Но проект достаточно тяжелый. Финансы -70%, Команда -10%, Репутация +20%.</p>';
            finance -= 70;
            reputation += 20;
            team -= 10;
            break;
        case 2:
            document.getElementById("firstCard").innerHTML += '<p class="card-text">Заказчик прислушался к вам и согласился. Проект уже не будет таким тяжелым. Финансы -50%, Команда +10%, Репутация +10%.</p>';
            finance -= 50;
            reputation += 10;
            team += 10;
            break;
        case 3:
            document.getElementById("firstCard").innerHTML += '<p class="card-text">Заказчик рад, он с нетерпением ждет результатов. Но не рада команда, так как вы усложнили проект. Финансы -90%, Команда -20%, Репутация +10%.</p>';
            finance -= 90;
            reputation += 10;
            team -= 30;
            break;
    }
    document.getElementById("firstCard").innerHTML += '<a class="btn btn-primary" onclick="secondStage()">Продолжить!</a>';
    setValue(finance, reputation, team);
}