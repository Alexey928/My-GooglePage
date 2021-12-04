const googleLogo = document.querySelector(".work-spase__name"),
    letersByLogo = document.querySelectorAll(".work-spase__name-item"),
    googleLogoWreper = document.querySelector(".work-spase__wraper"),
    colors = ['#f50404', '#f5e504', '#51ff00', '#8a00da', 'red', 'blue'],
    rangeOfSpeed = document.querySelector(".work-spase__name input"),
    popup = document.querySelector(".modalWindow")



let flag, flag1,
    numberOfLoop = 0;

googleLogo.addEventListener("mouseenter", function () {
    rangeOfSpeed.style.display = "block";
    valOfEvents.style.display = "block";
    flag = true
    recolorWorcSpaseName();
});
googleLogo.addEventListener("mouseleave", function () {
    flag = false;
    rangeOfSpeed.style.display = "none";
    valOfEvents.style.display = "none";
    numberOfLoop = 0
});

function shiftArr() {
    let first = colors[0]
    colors.shift();
    colors.push(first)
}

function recolorWorcSpaseName() {
    if (flag) {
        valOfEvents.textContent = `${numberOfLoop++}`
        letersByLogo.forEach((item, i) => { item.style.color = colors[i] })
        shiftArr();
        setTimeout(recolorWorcSpaseName, (200 - rangeOfSpeed.value));
    } else if (!flag1) {
        alert("Это конечно прикольно но дальше больше, попробуй ввести в стороке поиска одну из следующих команд : marging_sort; selection_sort ; sort_by_replacement ) ")
        flag1 = true;
    };
};
