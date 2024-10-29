const menuTrigger = document.querySelector("#mobile-menu-trigger");


const menuBrandsSelector = document.querySelector("#menu-brands-items");
const searchInput = document.querySelector("#search-input-text");
const searchResultListElementWrapper = document.querySelector(".search-result-list-wrapper");
const searchResultListElement = document.querySelector(".search-result-list");
const searchInputWrapper = document.querySelector("#search-bar-outer");
const stickyCloseButton = document.querySelector(".close-btn");
const searchCloseBtn = document.querySelector("#search-close-btn");

//const searchBgAppendTo = window.innerWidth<769 ? document.getElementsByTagName('body')[0] : searchInputWrapper;
const searchBgAppendTo =  searchInputWrapper;


stickyCloseButton.addEventListener("click",(e)=>{
    e.target.parentNode.classList.toggle("sticky-closed");
})

searchInputWrapper.addEventListener("click",(e)=>{
    if(e.target.getAttribute("id")==='search-bar-outer'){
        document.getElementById("header").classList.add('mobile-search-mode');
        searchInput.focus();
    }
})

menuTrigger.addEventListener("click",(event)=>{
    event.preventDefault();
    
    
    document.getElementsByTagName("body")[0].classList.toggle("menu-opened");
    menuBrandsSlider.resize();
    menuBrandsSlider.reposition();
    menuBrandsSlider.showScroll();
})

const menuBrandsSlider = new Flickity(menuBrandsSelector,{
    watchCSS:true,
    wrapAround: false,
    freeScroll: true,
    prevNextButtons: false,
    contain: true,
    pageDots: false,
    groupCells: 1,
});




const fetchSearch = async (word) => {
    
    const result = await fetch("search.php?word="+word,{
        method:'GET',
        headers:{
            'X-Source':'search-bar'
        }
    });
    return result.json();
}

const initSearch = async (e) => {
    let word = e.target.value;
    word = word.trim();
    if(word.length>=3){
        searchResultListElementWrapper.style.display='block';
        const result = await fetchSearch(word);
        writeSearchResult(result);
    }else{
        searchResultListElement.innerHTML = '';
        searchResultListElementWrapper.style.display='none';
           
    }
}

const writeSearchResult = (result) => {
    const listItemsWrapper = document.createElement("ul");
    if(result.length==0){
        searchResultListElement.innerHTML = 'Aradığınız kelime ile ilgili bir sonuç bulunamadı';
    }else{
        result.map(item=>{
            const listItem=document.createElement("li");
            const listItemHref = document.createElement("a");
            listItemHref.onclick = closeSearch;
            listItemHref.href = item.link;
            listItemHref.innerHTML = '<strong>'+(item.header ?? '')+'</strong><br>'+item.title;
    
            listItem.appendChild(listItemHref);
            listItemsWrapper.appendChild(listItem);

            searchResultListElement.style.display = 'block';
            searchResultListElement.innerHTML = '';
            searchResultListElement.appendChild(listItemsWrapper);
        });
    
    }
    

}



searchInput.addEventListener("keyup", async (e)=>{
    initSearch(e);
},false)

searchInput.addEventListener("search",(e)=>{
    if(e.target.value===''){
        searchResultListElement.innerHTML = '';
        document.getElementById("header").classList.remove('mobile-search-mode');
    }
})


document.addEventListener("click", function (e) {
    if(e.target!==searchInput){
        searchResultListElement.style.display = 'none';
    }
});

document.addEventListener("keydown",(e)=>{
    if(e.code==='Escape'){
        closeSearch();
    }
})

searchCloseBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    closeSearch();
})

const closeSearch = ()=> {
    if(searchInputWrapper.querySelector(".search-content-bg")){
        searchInput.value = '';
        document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
        document.getElementsByTagName('body')[0].classList.remove('search-input-focused');
    
        searchInputWrapper.querySelector(".search-content-bg").remove();
    }   
}

searchInput.addEventListener("focus", async (e)=>{
    document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
    document.getElementsByTagName('body')[0].classList.add('search-input-focused');

    

    if(searchInput.value.length>=3){
        searchResultListElementWrapper.style.display='block';
    }

    if(!searchBgAppendTo.querySelector(".search-content-bg")){
        
        const bg = document.createElement('div');
        bg.classList.add('search-content-bg');
        bg.style.position='fixed';
        bg.style.zIndex='2';
        bg.style.top='0';
        bg.style.left='0';
        bg.style.width='100%';
        bg.style.height='100%';
        bg.style.backgroundColor='rgba(12, 71, 157, .95)';

        bg.addEventListener("click",()=>{
            if(searchInput.value=='') closeSearch();
        })
    
        searchBgAppendTo.append(bg);
    
    }


    searchResultListElement.style.display = 'block';
},false)


searchInput.addEventListener("blur",()=>{
    setTimeout(()=>{
        searchResultListElementWrapper.style.display='none';
        if(searchInput.value==''){        
            closeSearch();
        }
    },200)
    
})

window.addEventListener("scroll", (event) => {
    if(window.scrollY>=100){

        document.getElementsByTagName("body")[0].classList.add("header-scrolled");
    }else{
        document.getElementsByTagName("body")[0].classList.remove("header-scrolled");
    }
});
