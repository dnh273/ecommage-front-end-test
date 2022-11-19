// function openItem(productTags) {
//     let x = document.querySelectorAll('.product-items');
//     for (let i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     document.getElementById(productTags).style.display = 'flex';
// }


// document.querySelectorAll('')

var tabs = document.querySelectorAll(".tab-item");
for (let y = 0; y < tabs.length; y++) {
    tabs[y].addEventListener("click", function () {
        let current = document.getElementsByClassName("active-tab");
        current[0].className = current[0].className.replace(" active-tab", "");
        this.className += " active-tab";

        let x = document.querySelectorAll('.product-items');
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[y].style.display = "flex";
    });
}