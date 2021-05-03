// 获取所有单元格
var cells = document.querySelectorAll('.cell');
// 获取鼠标移上去时的元素
var gameBord = document.querySelector('.game-board');
// 获取获胜信息相关元素
var message = document.querySelector('#message');
var winner = document.querySelector('#winner');
// 重新开始游戏元素
var restart = document.querySelector('#restart');
// 判赢数组
var winArr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
//创建枚举
var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
// 声明当前玩家和当前步数
var currentPlayer;
var step;
// 游戏开始
startGame();
// 点击重新开始事件
restart.addEventListener('click', startGame);
// 开始游戏函数
function startGame() {
    // 隐藏获胜信息
    message.style.display = 'none';
    // 重置棋盘
    currentPlayer = Player.X;
    cells.forEach(function (item) {
        // 类型断言
        var cell = item;
        cell.classList.remove(Player.X, Player.O);
        // 绑定事件(只能触发一次)
        cell.addEventListener('click', clickCell, { once: true });
    });
    // 重置步数
    step = 0;
}
// 棋盘单元格点击事件
function clickCell(e) {
    // 步数加1
    step++;
    var target = e.target;
    // 给点击的单元格添加当前玩家的样式，点击后切换玩家
    target.classList.add(currentPlayer);
    var isWin = checkWin(currentPlayer);
    if (isWin) {
        message.style.display = 'block';
        winner.innerText = currentPlayer + '  赢了！';
        return;
    }
    if (step === 9) {
        winner.innerText = '平局';
        message.style.display = 'block';
        return;
    }
    // 切换玩家
    // 修改当前玩家
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    // 移除类名、重置为当前玩家（鼠标移到棋盘上的伪类重置为当前玩家）
    gameBord.classList.remove(Player.X, Player.O);
    gameBord.classList.add(currentPlayer);
}
/**
- 使用some()方法遍历数组，将some方法的返回值作为判赢函数的返回值结果。
- 在some方法的回调函数中，获取到每种获胜情况对应的三个单元格元素。
- 判断这三个单元格元素是否同时包含当前玩家的类名。
- 如果包含，说明当前玩家赢了，返回true。否则返回false，继续循环。
 */
// 判赢函数
function checkWin(player) {
    return winArr.some(function (item) {
        // 在some方法的回调函数中，获取到每种获胜情况对应的三个单元格元素。
        // 先获取到每种获胜情况的索引
        // 通过这三个索引从cells中获取到单元格元素
        var cellIndex0 = item[0];
        var cellIndex1 = item[1];
        var cellIndex2 = item[2];
        // 判断是否包含当前玩家的类名
        if (hasClass(cells[cellIndex0], player) && hasClass(cells[cellIndex1], player) && hasClass(cells[cellIndex2], player)) {
            return true;
        }
        else {
            return false;
        }
    });
}
// 封装元素是否包含类名
function hasClass(el, name) {
    return el.classList.contains(name);
}
