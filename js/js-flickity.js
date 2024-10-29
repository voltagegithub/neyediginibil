Flickity.prototype.showScroll = function(){
    if(this.element.querySelector(".flickity-slider-track-rail-bar")){
        this.element.querySelector(".flickity-slider-track-rail-bar").remove(); 
    }
    const scrollTrackRailBar = document.createElement("div");
    scrollTrackRailBar.classList.add('flickity-slider-track-rail-bar');

    const scrollTrackBar = document.createElement("div");
    scrollTrackBar.classList.add('flickity-slider-track-bar');

    scrollTrackRailBar.appendChild(scrollTrackBar);
    
    this.element.appendChild(scrollTrackRailBar);
    if(this.size){
        const trackWidth = (this.size.width / this.slideableWidth) * 100;

        scrollTrackBar.style.width = trackWidth +'%' ;
        
    
        this.on("scroll",function(progress){
            if(progress<0) progress = 0;
            if(progress>1) progress = 1;
    
            var left = (progress * 100);
            if(left >= (100 - (trackWidth/2))) left = (100 - (trackWidth/2));
            
            scrollTrackBar.style.left = left + "%";
        })    
    }
    
}