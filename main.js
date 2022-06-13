// activity variables
const activityItem = document.querySelectorAll("[data-activity-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalTitle = document.querySelector("[data-modal-title]");

// modal variable
// modal toggle function
const activityModalFunccc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");

}

// add click event to all modal items
for (let i = 0; i < activityItem.length; i++) {

    activityItem[i].addEventListener("click", function () {
        modalTitle.innerHTML = "";
        var x = this.querySelector("[data-activity-title]").querySelectorAll("img");
        for (let j = 0; j < x.length; j++) {
            modalTitle.innerHTML += `                    
        <div class="swiper-slide">
           <div class="swiper-zoom-container">
               <img alt=""
                   src="${x[j].src}">
           </div>
       </div>`


        }
        const myCustomSlider = document.querySelectorAll('.mySwiper');
        const pagination = document.querySelectorAll('.swiper-pagination');
        const next = document.querySelectorAll('.swiper-button-next');
        const prev = document.querySelectorAll('.swiper-button-prev');


        for (i = 0; i < myCustomSlider.length; i++) {

            myCustomSlider[i].classList.add('mySwiper-' + i);
            pagination[i].classList.add('swiper-pagination-' + i);
            next[i].classList.add('swiper-button-next-' + i);
            prev[i].classList.add('swiper-button-prev-' + i);


            new Swiper('.mySwiper-' + i, {
                zoom: false,
                navigation: {
                    nextEl: `.swiper-button-next-${i}`,
                    prevEl: `.swiper-button-prev-${i}`,
                },
                pagination: {
                    el: `.swiper-pagination-${i}`,
                    clickable: true,
                },
            });
        }
        activityModalFunccc();
    });

}
modalCloseBtn.addEventListener("click", activityModalFunccc);
overlay.addEventListener("click", activityModalFunccc);
