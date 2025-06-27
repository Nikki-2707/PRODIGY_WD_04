const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const sidemenu = document.getElementById("sidemenu");
const seeallwork = document.getElementById("seeallwork");
const btn = document.querySelector(".btn");

const openTab = (tabname) => {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const openMenu = () => {
    sidemenu.style.right = "0";

}
const closeMenu = () => {
    sidemenu.style.right = "-200px";

}
const seeMore = () => {
    if (btn.innerHTML === "See more") {
        seeallwork.style.display = "contents";
        btn.innerHTML = "See less";
    }
    else {
        seeallwork.style.display = "none";
        btn.innerHTML = "See more";
    }
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbza8B0nq1qYS2Q5wSsB9tgte9NR_e9jjZP51BVzTRFPglHsqeQX-pqRGFLxVfhwmo-Z_w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})




