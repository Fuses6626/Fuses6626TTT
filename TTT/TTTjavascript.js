const gameBoard = document.querySelector("#gameboard")//定義gameBoard到div

const infoDisplay = document.querySelector("#info")//定義infoDisplay到p

//建立九宮格
const startCells = [
    "", "", "", "", "", "", "", "", "",
]


let go = "circle"
let gogo = "O"
infoDisplay.textContent = "O回合!"



// ---------創建格內空間和格線div-------------------------------
function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div')  //在陣列裡加入能裝東西的div
        cellElement.classList.add('square')  //給div命名為方形
        cellElement.id = index  //給每個格子id,使用index的默認數字編號
        cellElement.addEventListener('click', addGo)    //給每個格子做監聽事件,監測點擊,並做出反應(addGo涵式)
        gameBoard.append(cellElement)//把剛才創建的cellElement當作子元素放到gameBoard裡
    })
    console.log(startCells);

}

createBoard()    //不要忘記剛剛只有設定,現在執行它,不然不會生成!!


//目前等於上方
// function createBoard() {
//     for (let i = 0; i < startCells.length; i++) {

//         const cellElement = document.createElement('div');
//         cellElement.classList.add('square');
//         cellElement.id = i;
//         cellElement.addEventListener('click', addGo);
//         gameBoard.append(cellElement);
//     }
//     console.log(startCells);
// }

// createBoard()
// -----------------結束-------------------------------



function addGo(e) {
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go)    //做了class=circle的div,但和函數參數e沒有扯上關係,只是單純的創建
    e.target.append(goDisplay)           //e.target代表參數e的屬性是對應事件(15的事件叫做e),並且把剛才創建的O放進去
    //結合15就是:點擊的時候,調用執行這個函數,先const goDisplay=來承接以下動作產生的資料,再創建個div,然後class=circle,
    //這個class的css是O,最後把goDisplay創的這串資料塞到發生e這件事情的目標(.target)裡

    //if判斷式
    go === "circle" ? (go = "cross", gogo = "x") : (go = "circle", gogo = "O");    //和11連動,讓原本綁死circle的部分變得能切換(三元運算子)
    // go = go === "O" ? (go = "cross") : (go = "circle");  (為何要多一個go=)
    // 
    // if (go === "circle") {
    //     go = "cross";
    //     gogo = "X";
    // } else {
    //     go = "circle";
    //     gogo = "O";
    // }

    infoDisplay.textContent = "輪到" + gogo + "回合!"    //以變量控制顯示的字
    e.target.removeEventListener('click', addGo)
    checkScore()
}

function checkScore() {
    const allsquares = document.querySelectorAll(".square")
    // console.log(allsquares[1]);
    // console.log(startCells);
    

    const winninCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]



    winninCombos.forEach(array => {
        const circleWins = array.every(cell =>
                allsquares[cell].firstChild?.classList.contains('circle'))
            

        if (circleWins) {
            infoDisplay.textContent = "O方勝利!"
            allsquares.forEach(squares => squares.replaceWith(squares.cloneNode(true)))
            return
        }


        const crossWins = array.every(cell =>
            allsquares[cell].firstChild?.classList.contains('cross'))

        if (crossWins) {
            infoDisplay.textContent = "X方勝利!"
            allsquares.forEach(squares => squares.replaceWith(squares.cloneNode(true)))
            return
        }


    })


}








//--------------棄用------------------------------


// document.getElementById("goback").onclick = function () {
//     window.location.href = "../front/front.html";
//     console.log("有抓到");

// };
// 棄用返回鍵:改為HTML內直連



//--------------參考資料-------------------------


