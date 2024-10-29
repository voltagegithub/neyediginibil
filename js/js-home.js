var activeIndex = 0;

const heroSliderElement = document.querySelector(".home-banner");

const heroSlider = new Flickity(heroSliderElement,{
    wrapAround: true,
    contain: true,
    pageDots: false,
    prevNextButtons:false,
    groupCells: 1,
    fade: true,
    lazyLoad: true
});

const brandItemElements = document.querySelectorAll(".home-banner-nav-item");
brandItemElements.forEach(item=>{
    item.addEventListener("mouseover",(event)=>{

        document.querySelector(".home-banner-nav-list").classList.add('brand-hover');
        item.classList.add('selected-brand');

        if(event.target.nodeName=='A'){

            const index = ([...brandItemElements].findIndex(i=>{
                return i==item;
            }));
            if(activeIndex!=index){
                heroSlider.select(index,false,false); 
            }
            activeIndex = index;
        }
    })

    item.addEventListener("mouseout",()=>{
        item.classList.remove('selected-brand');
        document.querySelector(".home-banner-nav-list").classList.remove('brand-hover');
    })
})


const supplierSliderElement = document.querySelector('.main-carousel');
const supplierSlider = new Flickity( supplierSliderElement, {
    cellAlign: 'left',
    wrapAround: false,
    contain: true,
    pageDots: false,
    freeScroll: true,
    prevNextButtons: true,
    groupCells: 1
}); 

const brandLogosElements = document.querySelector(".home-banner-nav-items");
const brandLogosSlider = new Flickity(brandLogosElements, {
    watchCSS:true,
    wrapAround: false,
    contain: true,
    pageDots: false,
    freeScroll: true,
    prevNextButtons: false,
    groupCells: 1
});

brandLogosSlider.on("change",(index)=>{
    heroSlider.select(index,false, false);
})

window.addEventListener("DOMContentLoaded",function(){
    brandLogosSlider.showScroll();
    supplierSlider.showScroll();
})

