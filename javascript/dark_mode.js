const checkbox = document.querySelector('input[name=toggle]');
const itemMenu = document.querySelectorAll('.navbar-nav ul li a');
const urlString = document.location.href;
const urlArray = urlString.split('/');
const currentHref = urlArray[urlArray.length-1];
const bugger = document.querySelector('.bugger');
const nav = document.querySelector('.force-overflow');

app();

function app() {
    setmode();
    removeAddActiveClass();
    navSlide();
}


function setmode() {
    if (localStorage.getItem('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme',localStorage.getItem('data-theme'));
        checkbox.checked = true;
    } else {
        document.documentElement.removeAttribute('data-theme');
        checkbox.checked = false;
    }
}

checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans();
        localStorage.setItem('data-theme','dark');
        document.documentElement.setAttribute('data-theme',localStorage.getItem('data-theme'));
        
    }
    else{
        trans();
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('data-theme');
    }
    
})



let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    },1000)
}


function removeAddActiveClass() {
    if (currentHref !== "") {
        for (let i = 0; i < itemMenu.length; i++) {
            const pageURL = itemMenu[i].getAttribute("href");
            const pageURLArray = pageURL.split("/");
            const hrefPage = pageURLArray[pageURLArray.length-1];
            
            if(currentHref === hrefPage){
                console.log(itemMenu[i])
                itemMenu[i].parentNode.classList.add("active");
            }
        }
    }
}



function navSlide() {
    bugger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        bugger.classList.toggle('toggle');
    });
}



