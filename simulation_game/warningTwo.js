function warningTwo() {
    remove("warningOneResult");
    setVisible("warningTwoStage");
}

function warningTwoResult(num) {
    remove("warningTwoStage");
    setVisible("warningTwoResult");
    document.getElementById("warningTwoCard").innerHTML += '<h5 class="card-title">Результат</h5>';
    switch (num) {
        case 1:
            if (finance >= 20) {
                document.getElementById("warningTwoCard").innerHTML += '<p class="card-text">Вы раздали премию. Команда согласилась делать проект. Финансы -20%</p>';
                finance -=20;
            } else {
                alert("Денег нет!");
                window.location.reload();
            }
            document.getElementById("warningTwoCard").innerHTML += '<a class="btn btn-primary" onclick="fourStageW2()">Продолжить!</a>';
            setValue(finance, reputation, team);
            break;
        case 2:
            alert("Вас уволили.");
            window.location.reload();
    }
}