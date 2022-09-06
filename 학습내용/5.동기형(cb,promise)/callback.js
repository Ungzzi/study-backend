// 편의점에 들어가서 음료수를 사고 나오는 상황
function go_convenient() {
    console.log('편의점에 들어가서 어떤 음료를 살지 고민한다.');
}
function pick(cb) {
    setTimeout(function () {
        console.log('고민이 끝났다!');
        product = "콜라";
        payment = 1500;
        cb(product, payment);
    }, 3000);
}
function pay(product, payment) {
    console.log(`${product}의 금액인 ${payment}원을 지불한다.`);
}
var product;
var payment;
go_convenient();

// 방법 1. 콜백 함수
pick(pay); // 주의사항 : 인자를 넘기면 안됨 !

// 방법 2. 콜백 함수
pick(function pay(product, payment) {
    console.log(`${product}의 금액인 ${payment}원을 지불한다.`);
});

function promise1(flag) {
    return new Promise(function (resolve, reject) {
        if (flag) {
            resolve("성공");
        }
        else {
            reject("실패");
        }
    })
}
promise1(true)
promise1(false)
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })


// promise 이용
function go_convenient() {
    console.log("편의점에 들어왔다. 무얼사지?");
}

function pick() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('고민이 끝났다!');
            product = "콜라";
            payment = 1500;
            resolve();
        }, 3000);
    })
}

function pay() {
    console.log(`${product}의 금액인 ${payment}원을 지불한다.`);
}
var product;
var payment;
go_convenient();
pick()
    .then(() => {
        pay();
    })
    .catch(() => {
        console.log("실패");
    })

// async - await 이용

async function exec() {
    go_convenient();
    await pick();
    pay()
}

function go_convenient() {
    console.log("편의점에 들어왔다. 무얼사지?");
}

function pick() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('고민이 끝났다!');
            product = "콜라";
            payment = 1500;
            resolve();
        }, 3000);
    })
}

function pay() {
    console.log(`${product}의 금액인 ${payment}원을 지불한다.`);
}
var product;
var payment;

exec();


// 콜백 함수 단점 - 가독성이 떨어짐
function add(n1, n2, cb) {
    setTimeout(function () {
        var result = n1 + n2;
        cb(result);
    }, 1000)
}
function mul(num, cb) {
    setTimeout(function () {
        var result = num * 3;
        cb(result);
    }, 700);
}
function sub(num, cb) {
    setTimeout(function () {
        var result = num - 2;
        cb(result);
    }, 500);
}
add(3, 2, function (result) {
    console.log("1 : ", result);
    mul(result, function (result2) {
        console.log("2 : ", result2);
        sub(result2, function (result3) {
            console.log("3: ", result3);
        });
    })
})

async function exec(n1, n2) {
    await add(n1, n2);
    await mul(num);
    sub(num);
}

// promise로 변경
function add(n1, n2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var result = n1 + n2;
            resolve(result);
        }, 1000)
    })
}
function mul(num) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var result = num * 3;
            resolve(result);
        }, 700);
    })
}
function sub(num) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var result = num - 2;
            resolve(result);
        }, 500);
    })
}

exec(3, 2);

add(3, 2)
    .then((result) => {
        console.log("1 : ", result);
        return mul(result);
    })
    .then((result) => {
        console.log("2 : ", result);
        return sub(result);
    })
    .then((result) => {
        console.log("3: ", result);
    })

