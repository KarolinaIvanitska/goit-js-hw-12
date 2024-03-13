import{S as L,a as C,i as d}from"./assets/vendor-b42c18af.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const w=new L(".gallery a",{captionsData:"alt",captionDelay:250});document.querySelector(".gallery");function v({webformatURL:r,largeImageURL:e,tags:s,likes:a,views:t,comments:o,downloads:n}){return` 
  <li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${r}"
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
      <p class="likes"> <span class="text">comments</span>"${o}"</p>
      <p class="likes"> <span class="text">downloads</span>"${n}"</p>
      </div>
</li>`}function E(r){return r.map(v).join("")}function m(r,e){r.insertAdjacentHTML("beforeend",E(e)),w.refresh()}const P="https://pixabay.com/api/",S="42814531-6217cd85928bc5270423ce53d";let $=15;async function h(r,e){const s={key:S,q:r,page:e,perPage:$,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await C.get(`${P}/`,{params:s})).data}const k=document.querySelector(".search-form"),p=document.querySelector(".loader"),g=document.querySelector(".gallery"),f=document.querySelector(".load-more-btn");c();let i=1;const y=15;let u;k.addEventListener("submit",async r=>{if(r.preventDefault(),g.innerHTML="",i=1,u=r.target.elements.search.value.trim(),u===""){l(),c(),d.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}b();try{const e=await h(u,i);if(e.hits.length===0){l(),c(),d.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}e.totalHits<y?c():q(),m(g,e.hits)}catch{d.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Error",position:"topRight"})}l(),r.target.reset()});function b(){p&&(p.style.display="block")}function l(){p&&(p.style.display="none")}document.addEventListener("DOMContentLoaded",l);function c(){f&&(f.style.display="none")}function q(){f&&(f.style.display="block")}f.addEventListener("click",async r=>{b(),i+=1;const e=await h(u,i),s=Math.ceil(e.totalHits/y);m(g,e.hits),x(),i===s&&(c(),d.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"We are sorry, but you have reached the end of search results",position:"topRight"})),l()});function x(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
