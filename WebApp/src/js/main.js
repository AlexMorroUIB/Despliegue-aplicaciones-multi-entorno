let dbbox = document.getElementById("dbstatus")
let cachebox = document.getElementById("cachestatus")

// on load
window.addEventListener('load', function () {
    checkDB();
})

async function checkDB() {
    //const interval = setInterval(function () {
    try {
        await fetch('/dbConnection').then(response => {
            if (response) {
                dbbox.innerHTML = "<p style='color: green'>DB OK</p>"
            } else {
                dbbox.innerHTML = "<p style='color: red'>DB Down</p>"
            }
        }).catch(err => {
            console.log(err)
        })
        //}, 5000);
        //clearInterval(interval);
    } catch (err) {
        console.log(err)
    }
}
