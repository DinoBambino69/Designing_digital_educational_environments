function final() {
    checkValue();
    remove("fourResult");
    setVisible("final");
    document.getElementById("finalCard").innerHTML += '<h5 class="card-title">Результат игры</h5>';

    if (team >= 50 && reputation >= 50) {
        document.getElementById("finalCard").innerHTML += '<p class="card-text">Вы хорошо поработали, команда довольна и будет рада работать с вами с другими проектами!</p>';
    } else if (team >= 50 && reputation < 50) {
        document.getElementById("finalCard").innerHTML += '<p class="card-text">Команда довольна, но вам стоит поработать над собой и своей работой.</p>';
    } else if (team < 50 && reputation < 50) {
        document.getElementById("finalCard").innerHTML += '<p class="card-text">Команда и заказчик не довольны вами и вашей работой. Поработайте над собой и своей работой в команде.</p>';
    } else if (team < 50 && reputation >= 50) {
        document.getElementById("finalCard").innerHTML += '<p class="card-text">Заказчик доволен. Но не команда. Учитесь работать с командой!</p>';
    }
}