import{S as y,a as b,i as f}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const L=new y(".gallery a",{captionsData:"alt",captionDelay:250});document.querySelector(".gallery");function w({webformatURL:o,largeImageURL:t,tags:r,likes:a,views:e,comments:s,downloads:n}){return` 
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
</li>`}function S(o){return o.map(w).join("")}function g(o,t){o.insertAdjacentHTML("beforeend",S(t)),L.refresh()}const v="https://pixabay.com/api/",C="42814531-6217cd85928bc5270423ce53d";async function m(o,t,r){const a={key:C,q:o,_page:t,_limit:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await b.get(`${v}/`,{params:a})).data}const E=document.querySelector(".search-form"),d=document.querySelector(".loader"),u=document.querySelector(".gallery"),c=document.querySelector(".load-more-btn");p();let i=1;const P=15;let $;E.addEventListener("submit",async o=>{o.preventDefault(),u.innerHTML="",i=1;const t=o.target.elements.search.value.trim();if(t===""){l(),f.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}h(),k();try{const r=await m(t,i);if(r.hits.length===0){p(),l(),f.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(u,r.hits)}catch(r){console.log(r)}l(),o.target.reset()});function h(){d&&(d.style.display="block")}function l(){d&&(d.style.display="none")}document.addEventListener("DOMContentLoaded",l);function p(){c&&(c.style.display="none")}function k(){c&&(c.style.display="block")}c.addEventListener("click",async o=>{h(),i+=1;const t=await m($,i);g(u,t.hits),q();const r=Math.ceil(t.totalHits/P);i===r&&(p(),f.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"We are sorry, but you have reached the end of search results",position:"topRight"})),l()});function q(){const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
