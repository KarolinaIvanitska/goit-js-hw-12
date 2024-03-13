import{S as L,a as C,i as f}from"./assets/vendor-b42c18af.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const w=new L(".gallery a",{captionsData:"alt",captionDelay:250});document.querySelector(".gallery");function v({webformatURL:r,largeImageURL:e,tags:s,likes:a,views:t,comments:o,downloads:i}){return` 
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
      <p class="likes"> <span class="text">downloads</span>"${i}"</p>
      </div>
</li>`}function E(r){return r.map(v).join("")}function m(r,e){r.insertAdjacentHTML("beforeend",E(e)),w.refresh()}const S="https://pixabay.com/api/",P="42814531-6217cd85928bc5270423ce53d";let $=15;async function h(r,e){const s={key:P,q:r,page:e,_limit:$,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await C.get(`${S}/`,{params:s})).data}const k=document.querySelector(".search-form"),u=document.querySelector(".loader"),p=document.querySelector(".gallery"),c=document.querySelector(".load-more-btn");g();let n=1;const y=15;let d;k.addEventListener("submit",async r=>{if(r.preventDefault(),p.innerHTML="",n=1,d=r.target.elements.search.value.trim(),d===""){l(),f.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}b();try{const e=await h(d,n);if(e.hits.length===0){l(),f.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}e.totalHits<y?g():q(),m(p,e.hits)}catch{f.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Error",position:"topRight"})}l(),r.target.reset()});function b(){u&&(u.style.display="block")}function l(){u&&(u.style.display="none")}document.addEventListener("DOMContentLoaded",l);function g(){c&&(c.style.display="none")}function q(){c&&(c.style.display="block")}c.addEventListener("click",async r=>{b(),n+=1;const e=await h(d,n),s=Math.ceil(e.totalHits/y);m(p,e.hits),x(),n===s&&(g(),f.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"We are sorry, but you have reached the end of search results",position:"topRight"})),l()});function x(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
