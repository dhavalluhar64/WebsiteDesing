// document.addEventListener("click", function (e) {

//     if (e.target.classList.contains("gallery-item")) {

//         const src = e.target.getAttribute("src");

//         document.querySelector(".modal-img").src = src;

//         const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));

//         myModal.show();
//     }
// })



$(document).on("click", ".gallery-item", function () {

    const src = $(this).attr("src");

    $(".modal-img").attr("src", src);

    const myModal = new bootstrap.Modal($("#gallery-popup")[0]);

    myModal.show();
});
