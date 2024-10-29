    
    window.gtag = function() { dataLayer.push(arguments); }
   

const hide_urls = ['kvkk-aydinlatma-metni'];
const baseHref = document.getElementsByTagName('base')[0].href

const cockie = (document.cookie.split(";").map(item=>{
    if(item){
        const key = item.split("=")[0].trim();
        const value = item.split("=")[1].trim();
        return {
            key:key,
            value:value
        }
    }

    return item
    
}));

cockie_accepted = cockie.find(item=>item.key=="cookie_consent_user_accepted");

if(!cockie_accepted || cockie_accepted===undefined || (cockie_accepted && cockie_accepted.value===false)){
    window.gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied'
    });
}else{
    gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted'
    });
}

const url = document.location.href.replace(baseHref,'');

    document.addEventListener("DOMContentLoaded",function(){


        const options = {
            "notice_banner_type":"standalone","consent_type":"express","palette":"light","language":"tr","page_load_consent_levels":["strictly-necessary"],"notice_banner_reject_button_hide":false,"preferences_center_close_button_hide":false,"page_refresh_confirmation_buttons":false,"website_name":"neyediginibil.com"
        }
        
        
        if(!hide_urls.includes(url)){
            cookieconsent.run(options);    
            document.addEventListener('cc_noticeBannerOkOrAgreePressed',()=>{
                gtag('consent', 'update', {
                    'ad_storage': 'granted',
                    'analytics_storage': 'granted'
                });
            })
        }

    })    

