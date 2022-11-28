function removePreloader(){const handler=function(){setTimeout(()=>{const preloaderContainer=document.getElementById('preloader');preloaderContainer.style.display='none';},1000)
document.removeEventListener("DOMContentLoaded",handler)}
document.addEventListener("DOMContentLoaded",handler);}
removePreloader();