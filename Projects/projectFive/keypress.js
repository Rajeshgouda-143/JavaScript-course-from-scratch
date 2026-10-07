const insertKey = document.querySelector("#insert")

window.addEventListener("keydown", function(e){
    insertKey.innerHTML = `
        <div class="color">
            <table border="" width="300px" height="100px" >
                <tr>
                    <th>Key</th>
                    <th>KeyCode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === " " ? "space": e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>`
})