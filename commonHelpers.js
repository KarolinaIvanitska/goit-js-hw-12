import{S as f,i as l}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=new f(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".gallery");function m({webformatURL:s,largeImageURL:t,tags:o,likes:a,views:e,comments:r,downloads:n}){return` 
  <li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${o}"
      width="360"
      height = "220"
    />
  </a>
  <p class="large-image"> largeImageURL: "${t}"</p>
  <div class ="container-images">  
  <p class="tags"> <span class="text">tags</span> "${o}"</p>
      <p class = "likes"><span class="text"> likes</span> "${a}"</p>
      <p class="likes"> <span class="text">views</span>"${e}"</p>
      <p class="likes"> <span class="text">comments</span>"${r}"</p>
      <p class="likes"> <span class="text">downloads</span>"${n}"</p>
      </div>
</li>`}function g(s){return s.map(m).join("")}function d(s,t){p.insertAdjacentHTML("beforeend",g(t))}function h(){u.refresh()}const y="https://pixabay.com/api/",L="42814531-6217cd85928bc5270423ce53d";function b(s){const t=new URLSearchParams({key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${y}/?${t}`;return fetch(o).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}const $=document.querySelector(".search-form"),i=document.querySelector(".loader"),c=document.querySelector(".gallery");$.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="";const t=s.target.elements.search.value.trim();if(t===""){l.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}S(),b(t).then(o=>{if(o.hits.length===0)return l.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});d(c,o.hits),h()}).catch(o=>{console.log(o)}).finally(()=>{w()}),s.target.reset()});function S(){i&&(i.style.display="block")}function w(){i&&(i.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map
