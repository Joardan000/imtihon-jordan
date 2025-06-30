const header = ["Why Qubit?", "Products", "Solutions", "Customers", "Case studies", "Resources", "More"]
let header__texts = document.querySelector(".header__texts")
header.forEach((header) => {
    let box = document.createElement("p");
    box.innerHTML = `
    <p class="header__nav">${header}</p>
    `
    header__texts.appendChild(box);
})

let img = document.querySelector("#section2__img")
let img2 = document.querySelector("#section2__img1")
let section2Btn = document.querySelector("#section2__btn")
let images = [
    {
        src: "./img/icon-one.svg",
        alt: "first-icon"
    },
    {
        src: "./img/icon-two.svg",
        alt: "second-icon"
    },
    {
        src: "./img/icon-three.svg",
        alt: "third-icon"
    },
    {
        src: "./img/icon-four.svg",
        alt: "fourth-icon"
    },
    {
        src: "./img/icon-five.svg",
        alt: "fifth-icon"
    },
    {
        src: "./img/icon-six.svg",
        alt: "sixth-icon"
    },
    {
        src: "./img/icon-seven.svg",
        alt: "seventh-icon"
    },
    {
        src: "./img/icon-eight.svg",
        alt: "eighth-icon"
    }
]
images.forEach((photo) => {
    let newImg = document.createElement("img")
    newImg.src = photo.src
    newImg.alt = photo.alt
    img.appendChild(newImg)
    let newImg2 = document.createElement("img")
    newImg2.src = photo.src
    newImg2.alt = photo.alt
    img2.appendChild(newImg2)
    img2.classList.add("none")
})
let save = localStorage.getItem("jordanSave")
if (save === "true") {
    img2.classList.remove("none")
} else {
    img2.classList.add("none")
}
section2Btn.addEventListener("click", (e) => {
    e.preventDefault()
    let x = img2.classList.contains("none")
    if (x) {
        img2.classList.remove("none")
        localStorage.setItem("jordanSave", "true")
    } else {
        img2.classList.add("none")
        localStorage.setItem("jordanSave", "false")
    }
})
let s3Text = [
    {
        first: "140%",
        second: "Qubit's top customers",
        third: "annual growth rate.",
    },
    {
        first: "9.5m",
        second: "Qubit's top customers",
        third: "annual growth rate.",
    },
    {
        first: "4.4m",
        second: "Qubit's top customers",
        third: "annual growth rate.",
    }
]
let s3Text2 = [
    {
        first: "$1.6bn",
        second: "Qubit's top customers",
        third: "annual growth rate.",
    },
    {
        first: "$20bn",
        second: "Qubit's top customers",
        third: "annual growth rate.",
    },
    {
        first: "364",
        second: "Qubit's top customers",
        third: "annual growth rate.",
    }
]
let textFirst = document.getElementById("section3__div")
s3Text.forEach(item => {
    let newText = document.createElement("div");
    newText.innerHTML = `<div><p class="s3text">${item.first}</p> <p class="small__text_style">${item.second}</p> <p class="small__text_style">${item.third}</p> </div>`;
    textFirst.appendChild(newText);
})
let textSecond = document.getElementById("section3__div1")
s3Text2.forEach(item => {
    let newText2 = document.createElement("div");
    newText2.innerHTML = `
    <div><p class="s3text">${item.first}</p> <p class="small__text_style">${item.second}</p> <p class="small__text_style">${item.third}</p> </div>
    `
    textSecond.appendChild(newText2);
})

let remove = document.getElementById("delete")
let form = document.getElementById("myForm")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")
let sWrap1 = document.querySelector(".swrap1")
let sWrap2 = document.querySelector(".swrap2")
let sWrap3 = document.querySelector(".swrap3")
let sWrap4 = document.querySelector(".swrap4")
let sWrap5 = document.querySelector(".swrap5")
let sWrap6 = document.querySelector(".swrap6")

const sectionBox = [
    document.getElementById("box1"),
    document.getElementById("box2"),
    document.getElementById("box3"),
    document.getElementById("box4"),
    document.getElementById("box5"),
    document.getElementById("box6")
]

sWrap1.style.display = "none"
sWrap2.style.display = "none"
sWrap3.style.display = "none"
sWrap4.style.display = "none"
sWrap5.style.display = "none"
sWrap6.style.display = "none"
let i = parseInt(localStorage.getItem("index")) || 0
for (let x = 0; x < sectionBox.length; x++) {
    let storage = localStorage.getItem(`box${x}`)
    if (storage) {
        sectionBox[x].innerHTML = storage
        if (x === 0) sWrap1.style.display = "block"
        else if (x === 1) sWrap2.style.display = "block"
        else if (x === 2) sWrap3.style.display = "block"
        else if (x === 3) sWrap4.style.display = "block"
        else if (x === 4) sWrap5.style.display = "block"
        else if (x === 5) sWrap6.style.display = "block"
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (input1.value.trim() === "" || input2.value.trim() === "" || input3.value.trim() === "") {
        alert("Akajon barcha inputlarni to'ldiringda, inney masda🙂");
        return
    }

    if (i < sectionBox.length) {
        let content = `
            <p class="wrap1">${input1.value.trim()}</p>
            <p class="wrap2">${input2.value.trim()}</p>
            <p class="wrap3">${input3.value.trim()}</p>
            <p class="section__input_box"></p>
        `
        localStorage.setItem(`box${i}`, content)
        i++
        localStorage.setItem("index", i)
        let sWraps = [
            document.querySelector(".swrap1"),
            document.querySelector(".swrap2"),
            document.querySelector(".swrap3"),
            document.querySelector(".swrap4"),
            document.querySelector(".swrap5"),
            document.querySelector(".swrap6")
        ]
        for (let x = 0; x < sectionBox.length; x++) {
            let storage = localStorage.getItem(`box${x}`)
            if (storage) {
                sectionBox[x].innerHTML = storage
                sWraps[x].style.display = "block"
            }
        }
        input1.value = ""
        input2.value = ""
        input3.value = ""
    } else {
        alert("Boshqa box qolmadi!")
        input1.value = ""
        input2.value = ""
        input3.value = ""
    }
})
remove.addEventListener("click", () => {
    function remove() {
        const wrapper = [sWrap1, sWrap2, sWrap3, sWrap4, sWrap5, sWrap6];
        wrapper.forEach(wrap => wrap.style.display = "none");
        return;
    }

    localStorage.clear()
    remove()
})

let element = [
    {
        src: "./img/first_svg-icon.svg",
        alt: "One",
        firstText: "1:1 Product recommendations",
        secondText: "Use deep learning recommendations to engage customers in seconds."
    },
    {
        src: "./img/second_svg-icon.svg",
        alt: "Two",
        firstText: "1:1 Product badging",
        secondText: "Guide discovery with personalized product badging. Push sales with social proofing."
    },
    {
        src: "./img/third_svg-icon.svg",
        alt: "Three",
        firstText: "Personalized content",
        secondText: "Your customers are unique. Present them with content that shows you know them."
    },
    {
        src: "./img/fourth_svg-icon.svg",
        alt: "Four",
        firstText: "Product insights",
        secondText: "A platform packed with insights helping you discover the hard hitting things you can do next."
    },
    {
        src: "./img/fifth_svg-icon.svg",
        alt: "Five",
        firstText: "CommerceAI",
        secondText: "Your customer's behavioral data is telling you a story. Use predictive and affinity based algorithms to serve them better."
    },
    {
        src: "./img/sixth_svg-icon.svg",
        alt: "Six",
        firstText: "Platform integrations",
        secondText: "Connect Qubit to any tool via API. Import data or trigger an experience on any platform."
    }
]
let textElement = document.getElementById("section_element_wrapper")
element.forEach(item => {
    let box = document.createElement("div");
    let img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    box.appendChild(img);
    let box2 = document.createElement("div");
    box2.innerHTML = `
    <p class="element__text2">${item.firstText}</p>
    <p class="element__text">${item.secondText}</p>
    `
    box.appendChild(box2);
    textElement.appendChild(box);
})

let fText1 = document.getElementById("footerText1")
let fText2 = document.getElementById("footerText2")
let fText3 = document.getElementById("footerText3")
let fText4 = document.getElementById("footerText4")
let fText5 = document.getElementById("footerText5")
let fText6 = document.getElementById("footerText6")
let x = [
    {
        text11: "A/B testing",
        text12: "Abandonment recovery",
        text13: "Customer insights",
        text14: "Customer polling and<br>feedback",
        text15: "Customer segmentation",
        text16: "Data collection",
        text17: "Ecommerce<br>merchandising"
    },
    {
        text11: "Custom machine learning",
        text12: "Journey Personalization",
        text13: "Mobile app<br>personalization",
        text14: "Cross-channel<br>personalization",
        text15: "Social proofing",
        text16: "Website personalization"
    },
    {
        text11: "1:1 Product<br>recommendations",
        text12: "1:1 Product badging",
        text13: "1:1 Journey personalization",
        text14: "Personalized content",
        text15: "Product insights"
    },
    {
        text11: "Resources",
        text12: "Customers",
        text13: "Qubit Blog.",
        text14: "Glossary"
    },
    {
        text11: "Why Qubit?",
        text12: "About us",
        text13: "Careers",
        text14: "Press",
        text15: "Contact"
    },
    {
        text11: "Legal"
    }
]
let fTextElements = [fText1, fText2, fText3, fText4, fText5, fText6];
x.forEach((item, index) => {
    let box = document.createElement("div")
    if (item.text11) box.innerHTML += `
    <p>${item.text11}</p>
    `
    if (item.text12) box.innerHTML += `
    <p>${item.text12}</p>
    `
    if (item.text13) box.innerHTML += `
    <p>${item.text13}</p>
    `
    if (item.text14) box.innerHTML += `
    <p>${item.text14}</p>
    `
    if (item.text15) box.innerHTML += `
    <p>${item.text15}</p>
    `
    if (item.text16) box.innerHTML += `
    <p>${item.text16}</p>
    `
    if (item.text17) box.innerHTML += `
    <p>${item.text17}</p>
    `
    fTextElements[index].appendChild(box)
    box.classList.add("gap")
})


