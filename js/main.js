
var laptop = [{
    imgsrc: "images/pic-1.jpeg",
    content1: "Brand:Dell",
    head1: "Model:XPS",
    content2: "Price:52000",
    content3: "RAM:4GB",
    content4: "Storage:2TB"
},
{
    imgsrc: "images/pic-2.jpg",
    content1: "Brand:HP",
    head1: "Model:New15",
    content2: "Price:64000",
    content3: "RAM:6GB",
    content4: "Storage:3TB"
},
{
    imgsrc: "images/pic-3.jpg",
    content1: "Brand:Asus",
    head1: "Model:L510",
    content2: "Price:78000",
    content3: "RAM:8GB",
    content4: "Storage:3TB"
},
{
    imgsrc: "images/pic-4.jpg",
    content1: "Brand:Lenovo",
    head1: "Model:TL10",
    content2: "Price:44000",
    content3: "RAM:6GB",
    content4: "Storage:1TB"
}

]

var sect = document.getElementById("team");
var div1 = document.createElement("div");
sect.appendChild(div1);
div1.classList.add("container");

var row = document.createElement("div");
div1.appendChild(row);
row.classList.add("row");


var figure;
laptop.forEach(function (e) {
    var col = document.createElement("div");
    row.appendChild(col);
    col.classList.add("col");

    var card = document.createElement("div");
    col.appendChild(card);
    card.classList.add("card");

    figure = document.createElement("div");
    card.appendChild(figure);
    figure.classList.add("figure");


    var image = document.createElement("img");
    figure.appendChild(image);
    image.src = e.imgsrc;

    var button_image = document.createElement("a");
    figure.appendChild(button_image);
    button_image.classList.add("button-card");
    button_image.innerHTML = "More details";
    button_image.setAttribute("href", "#");



    var details = document.createElement("div");
    card.appendChild(details);
    details.classList.add("details");

    var bord = document.createElement("div");
    details.appendChild(bord);
    bord.classList.add("bord");

    var icons = document.createElement("div");
    details.appendChild(icons);
    icons.classList.add("icons");


    var para1 = document.createElement("p");
    details.appendChild(para1);
    para1.classList.add("paras");
    para1.innerHTML = e.content1;

    var heading = document.createElement("h3");
    details.appendChild(heading);
    heading.classList.add("head");
    heading.innerHTML = e.head1;

    var para2 = document.createElement("p");
    details.appendChild(para2);
    para2.classList.add("para-bottom");
    para2.innerHTML = e.content2;

    var para3 = document.createElement("p");
    details.appendChild(para3);
    para3.classList.add("para-bottom");
    para3.innerHTML = e.content3;

    var para4 = document.createElement("p");
    details.appendChild(para4);
    para4.classList.add("para-bottom");
    para4.innerHTML = e.content4;


})
var buttons = document.querySelectorAll(".button-card");
buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        this.parentNode.nextElementSibling.classList.add("view");
    })
})

var allIcons = document.querySelectorAll(".icons");
allIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
        this.parentNode.classList.remove("view");
    })
})






