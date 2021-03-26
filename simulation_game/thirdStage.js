function thirdStage() {
    checkValue();
    remove("secondResult");
    setVisible("thirdStage");
}

function thirdResult(numChose) {
    remove("thirdStage");
    setVisible("thirdResult");
    document.getElementById("thirdCard").innerHTML += '<h5 class="card-title">Результат</h5>';
    switch (numChose) {
        case 1:
            if (team >= 40) {
                document.getElementById("thirdCard").innerHTML += '<p class="card-text">Все идет гладко, команда полностью понимает проект и работает с удовольствием. Команда +10%, Репутация +10%</p>';
                team += 10;
                reputation += 10;
            } else if (reputation < 40) {
                document.getElementById("thirdCard").innerHTML += '<p class="card-text">У вас появляются проблемы с командой. Команда неохотно работает и хочет отказаться от проекта. Нужно что-то делать!</p>';
                document.getElementById("thirdCard").innerHTML += '<a class="btn btn-primary" onclick="warningOne()">Продолжить!</a>';
                break;
            } else if (reputation >= 40) {
                document.getElementById("thirdCard").innerHTML += '<p class="card-text">Учитывая вашу репутацию, команда старается и все получается.</p>';
            }
            document.getElementById("thirdCard").innerHTML += '<a class="btn btn-primary" onclick="fourStage()">Продолжить!</a>';
            break;
        case 2:
            document.getElementById("thirdCard").innerHTML += '<p class="card-text">У команды много вопросов по проекту, но не с кем их обсудить и решить. Вы поступаете не профессионально! Команда -50%, Репутация -50%</p>';
            team -= 50;
            reputation -= 50;
            document.getElementById("thirdCard").innerHTML += '<a class="btn btn-primary" onclick="fourStage()">Продолжить!</a>';
            break;
    }
    setValue(finance, reputation, team);
}