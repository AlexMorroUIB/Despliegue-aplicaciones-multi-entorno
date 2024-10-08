let dbbox = document.getElementById("dbstatus")
let cachebox = document.getElementById("cachestatus")

// Every 1000 ms (1 sec) check status of connections
setInterval(checkConnections, 1000)

async function checkConnections() {
    try {
        await fetch('/dbConnection').then(response => response.json())
            .then((data) => {
                if (data.value) {
                    dbbox.innerHTML = `DB OK <span class="badge text-bg-success rounded-pill"> </span>`
                } else {
                    dbbox.innerHTML = `DB Down <span class="badge text-bg-danger rounded-pill"> </span>`
                }
            }).catch(err => {
                console.log(err)
            })
        await fetch('/redisConnection').then(response => response.json())
            .then((data) => {
                if (data.value) {
                    cachebox.innerHTML = `Redis OK <span class="badge text-bg-success rounded-pill"> </span>`
                } else {
                    cachebox.innerHTML = `Redis Down <span class="badge text-bg-danger rounded-pill"> </span>`
                }
            }).catch(err => {
                console.log(err)
            })
    } catch (err) {
        console.log(err)
    }
}

async function selectData() {
    try {
        await fetch('/selectData').then(response => response.json())
            .then((data) => {
                console.log(data)
            }).catch(err => {
                console.log(err)
            })
    } catch (err) {
        console.log(err)
    }
}
