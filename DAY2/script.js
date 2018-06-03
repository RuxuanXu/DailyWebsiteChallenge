function setUp() {
    if (document.getElementById('homepage') != null) {
        homepage.parentNode.removeChild(homepage);
        ans1.disabled = false;
        ans2.disabled = false;
        ans3.disabled = false;
        ans4.disabled = false;
    }
    question.innerHTML = quiz[number]["question"];
    ans1.innerHTML = quiz[number]["a1"];
    ans2.innerHTML = quiz[number]["a2"];
    ans3.innerHTML = quiz[number]["a3"];
    ans4.innerHTML = quiz[number]["a4"];
}

function next(a) {
    if (a == 1) {
        eval(ans[number]["a1"]);
    } else if (a == 2) {
        eval(ans[number]["a2"]);
    } else if (a == 3) {
        eval(ans[number]["a3"]);
    } else if (a == 4) {
        eval(ans[number]["a4"]);
    }
    if (number == 35) {
        question.parentNode.removeChild(question);
        ans1.parentNode.removeChild(ans1);
        ans2.parentNode.removeChild(ans2);
        ans3.parentNode.removeChild(ans3);
        ans4.parentNode.removeChild(ans4);

        calc();
    } else {
        number++;
        setUp();
    }
}

function explain(title, content) {
    result.innerHTML = "你的陣營是「" + title + "」。<br><br>";
    result.innerHTML += content;
}

function calc() {

    result.style.zIndex = "10";

    lg = lx + xg;
    ng = nx + xg;
    cg = cx + xg;
    ln = lx + xn;
    nn = nx + xn;
    cn = cx + xn;
    le = lx + xe;
    ne = nx + xe;
    ce = cx + xe;
    i = nn;
    align = "nn";

    if (lg > i) {
        align = "lg";
        i = lg;
    }
    if (ng > i) {
        align = "ng";
        i = ng;
    }
    if (cg > i) {
        align = "cg";
        i = cg;
    }
    if (ln > i) {
        align = "ln";
        i = ln;
    }
    if (cn > i) {
        align = "cn";
        i = cn;
    }
    if (le > i) {
        align = "le";
        i = le;
    }
    if (ne > i) {
        align = "ne";
        i = ne;
    }
    if (ce > i) {
        align = "ce";
        i = ce;
    }

    if (lg == i) tie++;
    if (ng == i) tie++;
    if (cg == i) tie++;
    if (ln == i) tie++;
    if (nn == i) tie++;
    if (cn == i) tie++;
    if (le == i) tie++;
    if (ne == i) tie++;
    if (ce == i) tie++;

    if (tie != 0) {
        if (lx > nx && lx > cx) align = "l";
        else if (cx > nx && cx > lx) align = "c";
        else align = "n";

        if (xg > xe && xg > xn) align += "g";
        else if (xe > xn && xe > xg) align += "e";
        else align += "n";
    }

    switch (align) {
        case "lg":
            explain(output[0]["title"], output[0]["content"]);
            break;
        case "ng":
            explain(output[1]["title"], output[1]["content"]);
            break;
        case "cg":
            explain(output[2]["title"], output[2]["content"]);
            break;
        case "ln":
            explain(output[3]["title"], output[3]["content"]);
            break;
        case "nn":
            explain(output[4]["title"], output[4]["content"]);
            break;
        case "cn":
            explain(output[5]["title"], output[5]["content"]);
            break;
        case "le":
            explain(output[6]["title"], output[6]["content"]);
            break;
        case "ne":
            explain(output[7]["title"], output[7]["content"]);
            break;
        case "ce":
            explain(output[8]["title"], output[8]["content"]);
    }
}

function resizeWindow() {
    var $ = window.$
    document.getElementById("game").style.height = "100%";
    var height = $('body').height();
    var width = $('body').width();
    if (width < $('#game').height() * 0.6) {
        document.getElementById("game").style.width = "100%";
    } else {
        document.getElementById("game").style.width = $('#game').height() * 0.6 + "px";
    }
}

setInterval(resizeWindow, 50);