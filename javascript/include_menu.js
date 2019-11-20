fetch("/yourCV/menu/menu.html")
.then(response => {
    return response.text();
})
.then(data => {
    document.querySelector("menu").innerHTML = data;
})
.catch(
    err => {console.log(err)}
)