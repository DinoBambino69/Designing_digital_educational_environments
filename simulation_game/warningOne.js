function warningOne() {
    remove("thirdResult");
    setVisible("warningOneStage");
}

function warningOneResult(num) {
    remove("warningOneStage");
    setVisible("warningOneResult");
    document.getElementById("warningOneCard").innerHTML += '<h5 class="card-title">Результат</h5>';
    switch (num) {
        case 1:
            if (reputation > 20) {
                document.getElementById("warningOneCard").innerHTML += '<p class="card-text">Команда согласилась доделать проект, но при условии, что следующий проект вы не ведете.</p>';
            } else {
                document.getElementById("warningOneCard").innerHTML += '<p class="card-text">Команда не согласна. Вас хотят уволить. Но может премия для команды решит этот вопрос?</p>';
                document.getElementById("warningOneCard").innerHTML += '<a class="btn btn-primary" onclick="warningTwo()">Продолжить!</a>';
                break;
            }
            document.getElementById("warningOneCard").innerHTML += '<a class="btn btn-primary" onclick="fourStageW1()">Продолжить!</a>';
            break;
        case 2:
            document.getElementById("warningOneCard").innerHTML += '<p class="card-text">Все недовольны. Вас уволили.</p>';
            reputation -= 100;
            checkValue();
            break;
    }
}