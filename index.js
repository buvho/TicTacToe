const squares = document.querySelectorAll(".square")
const texto = document.getElementById("texto")
const resetBTN = document.getElementById("reset")

let player = 'X'
let board = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
let turn = 0
let started = true
let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

start();

function start()
{
    squares.forEach(square => square.addEventListener("click",click))
    resetBTN.addEventListener("click", reset)
    texto.style.cursor = "initial"
}

function click()
{
    if (started == true){
        const pos = this.getAttribute("posi")
        if (board[pos] != " ") {return}
        uptade(this,pos)
        checkWin()
    }
}

function uptade(square,pos)
{
    square.innerText = player
    board[pos] = player
    square.style.cursor = "initial"
    console.log(`board: ${board}`)
}

function checkWin()
{
    for (let i = 0; i < win.length; i++)
    {
        const teste = win[i]
        let sqr1 = teste[0]
        let sqr2 = teste[1]
        let sqr3 = teste[2]
        console.log(`\n${sqr1},${sqr2},${sqr3}  `)
        if (board[sqr1] == ' ' ||  board[sqr2] == ' ' || board[sqr3] == ' ')
        {
            continue;  
        }
        else if (board[sqr1] == board[sqr2] && board[sqr2] == board[sqr3])
        {
            started = false
            texto.innerText = `${player} ganhou`
            squares.forEach(square => {
                square.style.cursor = "initial"
            });
            return;
        }
    }
    if (turn >= 8)
    {
        texto.innerText = "Velha!"
        started = false
        return;
    }
    turnChange()
}

function turnChange()
{
    player = player == 'X' ? 'O' : 'X'
    texto.innerHTML = `Turno do ${player}`
    turn++
}


function reset()
{
    squares.forEach( square =>{
        square.innerText = ""
        square.style.cursor = "pointer"
    })
    board = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
    texto.innerHTML = "Turno do X"
    player = 'X'
    turn = 0
    started = true
}
