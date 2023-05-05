let clickCount = document.getElementById("clicker__counter").innerHTML;
let cookie = document.getElementById("cookie");

cookie.addEventListener('click', () => {
    let startTime = Date.now();
    clickCount++;
    document.getElementById("clicker__counter").innerHTML = clickCount;


    cookie.style.width = "220px";
    setTimeout(() => {
        cookie.style.width = "200px";
    }, 100);
})