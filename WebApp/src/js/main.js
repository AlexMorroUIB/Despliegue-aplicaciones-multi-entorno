import { DBGetAvailability } from "./DBFunctions.js";
let dbbox = document.getElementById("dbstatus")
let cachebox = document.getElementById("cachestatus")

window.onload = (event) => {
    checkDB();
};

function checkDB() {
    //const interval = setInterval(function () {
    DBGetAvailability(res);
    if (res) {
        dbbox.innerHTML = "<p style='color: green'>DB OK</p>"
    } else {
        dbbox.innerHTML = "<p style='color: red'>DB Down</p>"
    }
    //}, 5000);
    //clearInterval(interval);
}

    //checkDB();