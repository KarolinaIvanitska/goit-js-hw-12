import{S as L,a as w,i as u}from"./assets/vendor-b42c18af.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const v=new L(".gallery a",{captionsData:"alt",captionDelay:250});document.querySelector(".gallery");function S({webformatURL:o,largeImageURL:e,tags:s,likes:a,views:t,comments:r,downloads:n}){return` 
  <li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${s}"
      width="360"
      height = "220"
    />
  </a>
  <p class="large-image"> largeImageURL: "${e}"</p>
  <div class ="container-images">  
  <p class="tags"> <span class="text">tags</span> "${s}"</p>
      <p class = "likes"><span class="text"> likes</span> "${a}"</p>
      <p class="likes"> <span class="text">views</span>"${t}"</p>
      <p class="likes"> <span class="text">comments</span>"${r}"</p>
      <p class="likes"> <span class="text">downloads</span>"${n}"</p>
      </div>
</li>`}function C(o){return o.map(S).join("")}function m(o,e){o.insertAdjacentHTML("beforeend",C(e)),v.refresh()}const P="https://pixabay.com/api/",$="42814531-6217cd85928bc5270423ce53d";let E=15;async function h(o,e){const s={key:$,q:o,page:e,_limit:E,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await w.get(`${P}/`,{params:s})).data}const k=document.querySelector(".search-form"),d=document.querySelector(".loader"),p=document.querySelector(".gallery"),c=document.querySelector(".load-more-btn");g();let i=1;const y=15;let f;k.addEventListener("submit",async o=>{if(o.preventDefault(),p.innerHTML="",i=1,f=o.target.elements.search.value.trim(),f===""){l(),u.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}b();try{const e=await h(f,i);if(e.hits.length===0){l(),u.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}e.totalHits<y?g():q(),m(p,e.hits)}catch(e){console.log(e)}l(),o.target.reset()});function b(){d&&(d.style.display="block")}function l(){d&&(d.style.display="none")}document.addEventListener("DOMContentLoaded",l);function g(){c&&(c.style.display="none")}function q(){c&&(c.style.display="block")}c.addEventListener("click",async o=>{b(),i+=1;const e=await h(f,i),s=Math.ceil(e.totalHits/y);m(p,e.hits),x(),i===s&&(g(),u.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"We are sorry, but you have reached the end of search results",position:"topRight"})),l()});function x(){const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
