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

let globalArr = [];
const merge = (arrFirst, arrSecond, keysLeft, keysRigt) => {
    const arrSort = [];
    let i = j = 0;
    while (i < arrFirst.length && j < arrSecond.length) {
        let tymeArrValue;
        if (arrFirst[i] < arrSecond[j]) {
            tymeArrValue = arrFirst[i++];
        } else {
            tymeArrValue = arrSecond[j++];
        }


        arrSort.push(tymeArrValue);
        // (arrFirst[i] < arrSecond[j]) ?
        //     arrFirst[i++] : arrSecond[j++]  
    }
    const reternebulArr = [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
    globalArr.splice(keysLeft[0], (keysLeft.length + keysRigt.length), ...reternebulArr)
    return reternebulArr;

};
const mergeSort = (arr, flag = false, keys = []) => {
    if (!arr || !arr.length) {
        return null;
    }
    if (arr.length <= 1) {
        return arr;
    }
    if (!flag) {
        arr.forEach((item, i) => {
            keys.push(i)
        })
        globalArr = [...arr]
        flag = true;
    }
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);
    const keysLeft = keys.slice(0, middle);
    const keysRigt = keys.slice(middle);
    let mergedArey = merge(mergeSort(arrLeft, flag, keysLeft), mergeSort(arrRight, flag, keysRigt), keysLeft, keysRigt);
    console.log(mergedArey, keysLeft, keysRigt, arrLeft, arrRight, globalArr);
    if (arr.length === globalArr.length) {
        console.log(globalArr)
    }
    return mergedArey;
};


let arrey = mergeSort([1, 5, 2, 6, 3, 8, 1, 7, 2, 55, 89, 12, 11, 44, 55, 33, 25, 21, 65]);

