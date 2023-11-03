let menu = document.querySelector("#menu")
let showContent = document.querySelector(".tab-header-bottom")

menu.addEventListener("click", () => { menu.className == "fa-solid fa-bars" ? show() : hide() })

let show = () => {
    menu.className = "fa-solid fa-xmark"
    showContent.style.display = "block"
}
let hide = () => {
    menu.className = "fa-solid fa-bars"
    showContent.style.display = "none"
}


// ------------- Hover Effict and display none and block ------------------- //

let tabListDrop = document.querySelectorAll(".list-drop")
let dropowCcontent = document.querySelectorAll(".drop-down-content")
let body = document.querySelector(".section")

let count = -1;

tabListDrop.forEach(elem => {
    elem.id = count += 1
    elem.addEventListener("mouseover", () => {
        dropowCcontent.forEach(element => {
            if (elem.id == element.id) {
                element.style.display = "block"
                elem.style.backgroundColor = "black"
                elem.childNodes[1].style.color = "#fff"
                elem.lastChild.previousSibling.className = "fa-solid fa-chevron-up"
            }
            else if (element.style.display == "block") {
                element.style.display = "none"
                elem.lastChild.previousSibling.className = "fa-solid fa-chevron-down"
            }
        });
    })
    elem.addEventListener("mouseout", () => {
        elem.style.backgroundColor = "transparent"
        elem.childNodes[1].style.color = "black"
        elem.lastChild.previousSibling.className = "fa-solid fa-chevron-down"
        dropowCcontent.forEach(element => {
            element.style.display = "none"
            element.addEventListener("mouseover", () => {
                element.style.display = "block"
                if (elem.id == element.id) {
                    elem.style.backgroundColor = "black"
                    elem.childNodes[1].style.color = "#fff"
                    elem.lastChild.previousSibling.className = "fa-solid fa-chevron-up"
                }
            })
            element.addEventListener("mouseout", () => {
                element.style.display = "none"
                elem.style.backgroundColor = "transparent"
                elem.childNodes[1].style.color = "black"
                elem.lastChild.previousSibling.className = "fa-solid fa-chevron-down"
            })
        });
    })

});

let tabList = document.querySelectorAll(".tab-list-drop")
let tabUlList = document.querySelectorAll(".tab-ul-list")
let tabCount = -1
tabList.forEach(tabDropList => {
    tabDropList.setAttribute("id", tabCount += 1)
    tabUlList.forEach(ulList => {
        tabDropList.addEventListener("click", (e) => {
            if (tabDropList.id == ulList.id){
                if (e.target.childNodes[1].className == "fa-solid fa-chevron-right") {
                    tabDropList.childNodes[1].className = "fa-solid fa-chevron-down"
                    ulList.style.display ="block"
                    tabDropList.style.backgroundColor = "black"
                    tabDropList.style.color = "#fff"   
                }
                else{
                    e.target.childNodes[1].className = "fa-solid fa-chevron-right"
                    ulList.style.display ="none"
                    e.target.style.backgroundColor = "transparent"
                    e.target.style.color = "black"
                }
            }
            // else if(tabDropList.id != ulList.id) {
            //     e.target.childNodes[1].className = "fa-solid fa-chevron-right"
            //     ulList.style.display ="none"
            //     e.target.style.backgroundColor = "transparent"
            //     e.target.style.color = "black" 
            // }
        })
    });
});