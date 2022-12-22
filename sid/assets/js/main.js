const header=document.querySelector(".header-s3");function stickyNav(){if(window.scrollY>500){header.classList.add("sticky");}else{header.classList.remove("sticky");}}
if(header!==null){window.addEventListener("scroll",stickyNav);}
const openBtn=document.querySelector("#nav-opn-btn");const closeBtn=document.querySelector("#nav-cls-btn");const offcanvasContainer=document.querySelector("#offcanvas-nav");function openNav(){document.body.style.overflowY="hidden";offcanvasContainer.classList.add("open");}
function closeNav(){document.body.style.overflowY="";offcanvasContainer.classList.remove("open");}
openBtn.addEventListener("click",openNav);closeBtn.addEventListener("click",closeNav);const tabButtons=document.querySelectorAll(".tab-btn");for(let i=0;i<tabButtons.length;i++){tabButtons[i].addEventListener("click",openTab);}
function openTab(event){const tabPanes=event.target.closest(".tab").querySelectorAll(".tab-pane");for(let i=0;i<tabPanes.length;i++){tabPanes[i].classList.remove("active");}
for(let i=0;i<tabButtons.length;i++){tabButtons[i].classList.remove("active");}
const tabId=event.target.getAttribute("data-tab");document.getElementById(tabId).classList.add("active");event.target.classList.add("active");}
const progessBars=Array.from(document.querySelectorAll(".progress-bar"));window.addEventListener("scroll",animateProgress);function animateProgress(){const triggerPoint=window.innerHeight-120;for(let i=0;i<progessBars.length;i++){if(progessBars[i].getBoundingClientRect().y<=triggerPoint){const progressPercent=progessBars[i].getAttribute("data-progress");progessBars[i].firstElementChild.style.width=`${progressPercent}%`;progessBars.splice(i,1);}}}
const accordions=document.querySelectorAll(".s-accordion");for(let i=0;i<accordions.length;i++){accordions[i].addEventListener("click",openAccordion);}
function openAccordion(event){const siblingTabs=event.target.closest(".accordion").querySelectorAll(".s-accordion");const target=event.currentTarget;const targetWasActive=target.classList.contains("active");for(let i=0;i<siblingTabs.length;i++){siblingTabs[i].classList.remove("active");siblingTabs[i].lastElementChild.style.height='';}
if(targetWasActive){target.classList.remove("active");}else{target.classList.add("active");const height=getHeight(target.lastElementChild);target.lastElementChild.style.height=height+"px";}}
function getHeight(target){target.style.display="block";const height=target.scrollHeight;target.style.display="";return height;}
const cursor=document.querySelector("#cursor");function showCursor(event){cursor.style.top=event.clientY+"px";cursor.style.left=event.clientX+"px";}
if(cursor!==null){window.addEventListener("mousemove",showCursor);}