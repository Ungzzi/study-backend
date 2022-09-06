// 실습. Promise로 바꾸기
function call(name, cb) {
    setTimeout(function () {
        console.log(name);
        cb(name);
    }, 1000);
} function back(cb) {
    setTimeout(function () {
        console.log("back");
        cb("back");
    }, 1000);
} function hell(cb) {
    setTimeout(function () {
        cb("callback hell");
    }, 1000);
}
call('kim')
    .then((result) => {
        console.log(result + "반가워");
        return back(result);
    })
    .then((result) => {

        console.log(result + "을 실행했구나");
        return hell(result);
    })
    .then((result) => {
        console.log("여기는 " + result);
    })

// cb -> promise
function call(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(name);
            resolve(name);
        }, 1000);
    })
}

function back() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("back");
            resolve("back");
        }, 1000);
    })
}

function hell() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("callback hell");
        }, 1000);
    })
}

call('kim')
    .then((result) => {
        console.log(result + "반가워");
        return back(result);
    })
    .then((result) => {

        console.log(result + "을 실행했구나");
        return hell(result);
    })
    .then((result) => {
        console.log("여기는 " + result);
    })

// promise -> exec
async function exec(name) {
    let user = await call(name);
    console.log(user + "반가워");
    let cb = await back();
    console.log(cb + "을 실행했구나.");
    let cbh = await hell();
    console.log("여기는" + cbh)
}

function call(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(name);
            resolve(name);
        }, 1000);
    })
}

function back() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("back");
            resolve("back");
        }, 1000);
    })
}

function hell() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("callback hell");
        }, 1000);
    })
}

exec("지웅");