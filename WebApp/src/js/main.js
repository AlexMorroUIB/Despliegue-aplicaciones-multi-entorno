let dbbox = document.getElementById("dbstatus")
let cachebox = document.getElementById("cachestatus")

// on load
window.addEventListener('load', function () {
    checkDB();
})

async function checkDB() {
    //const interval = setInterval(function () {
    try {
        console.log('pre-fetch')
        fetch('/dbConnection').then((response) => {
            console.log('post-fetch')
            // Our handler throws an error if the request did not succeed.
            if (response.ok) {
                alert('ok')
                throw new Error(`HTTP error: ${response.status}`);
            } else {
                alert('no ok')
            }
        }).catch(err => {
            console.log(err)
        })
        /*if (res) {
            dbbox.innerHTML = "<p style='color: green'>DB OK</p>"
        } else {
            console.log('res html')
            dbbox.innerHTML = "<p style='color: red'>DB Down</p>"
        }*/
        //}, 5000);
        //clearInterval(interval);
    } catch (err) {
        console.log(err)
    }
}
