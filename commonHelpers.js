import{S as L,a as w,i as u}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const S=new L(".gallery a",{captionsData:"alt",captionDelay:250});document.querySelector(".gallery");function v({webformatURL:o,largeImageURL:t,tags:r,likes:a,views:e,comments:s,downloads:n}){return` 
  <li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${r}"
      width="360"
      height = "220"
    />
  </a>
  <p class="large-image"> largeImageURL: "${t}"</p>
  <div class ="container-images">  
  <p class="tags"> <span class="text">tags</span> "${r}"</p>
      <p class = "likes"><span class="text"> likes</span> "${a}"</p>
      <p class="likes"> <span class="text">views</span>"${e}"</p>
      <p class="likes"> <span class="text">comments</span>"${s}"</p>
      <p class="likes"> <span class="text">downloads</span>"${n}"</p>
      </div>
</li>`}function C(o){return o.map(v).join("")}function m(o,t){o.insertAdjacentHTML("beforeend",C(t)),S.refresh()}const E="https://pixabay.com/api/",P="42814531-6217cd85928bc5270423ce53d";async function h(o,t,r){const a={key:P,q:o,_page:t,_limit:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await w.get(`${E}/`,{params:a})).data}const $=document.querySelector(".search-form"),f=document.querySelector(".loader"),p=document.querySelector(".gallery"),c=document.querySelector(".load-more-btn");d();let i=1;const y=15;let k;$.addEventListener("submit",async o=>{o.preventDefault(),p.innerHTML="",i=1;const t=o.target.elements.search.value.trim();if(t===""){l(),d(),u.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}b(),g();try{const r=await h(t,i);if(r.hits.length===0){d(),l(),u.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}r.totalHits>y&&g(),m(p,r.hits)}catch(r){console.log(r)}l(),o.target.reset()});function b(){f&&(f.style.display="block")}function l(){f&&(f.style.display="none")}document.addEventListener("DOMContentLoaded",l);function d(){c&&(c.style.display="none")}function g(){c&&(c.style.display="block")}c.addEventListener("click",async o=>{b(),i+=1;const t=await h(k,i);m(p,t.hits),q();const r=Math.ceil(t.totalHits/y);i===r&&(d(),u.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"We are sorry, but you have reached the end of search results",position:"topRight"})),l()});function q(){const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
