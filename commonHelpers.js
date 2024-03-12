import{S as b,a as S,i as p}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const $=new b(".gallery a",{captionsData:"alt",captionDelay:250});document.querySelector(".gallery");function v({webformatURL:r,largeImageURL:t,tags:s,likes:l,views:e,comments:o,downloads:a}){return` 
  <li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${s}"
      width="360"
      height = "220"
    />
  </a>
  <p class="large-image"> largeImageURL: "${t}"</p>
  <div class ="container-images">  
  <p class="tags"> <span class="text">tags</span> "${s}"</p>
      <p class = "likes"><span class="text"> likes</span> "${l}"</p>
      <p class="likes"> <span class="text">views</span>"${e}"</p>
      <p class="likes"> <span class="text">comments</span>"${o}"</p>
      <p class="likes"> <span class="text">downloads</span>"${a}"</p>
      </div>
</li>`}function w(r){return r.map(v).join("")}function m(r,t){r.insertAdjacentHTML("beforeend",w(t)),$.refresh()}const P="https://pixabay.com/api/",C="42814531-6217cd85928bc5270423ce53d";let E=1;const k=15;async function y(r){const t={key:C,q:r,_page:E,_limit:k,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await S.get(`${P}/`,{params:t})).data}const x=document.querySelector(".search-form"),c=document.querySelector(".loader"),u=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn");f();x.addEventListener("submit",async r=>{r.preventDefault(),u.innerHTML="",d=1;const t=r.target.elements.search.value.trim();if(t===""){n(),f(),p.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}h(),g();try{const s=await y(t,d);if(s.hits.length===0){f(),n(),p.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}s.totalHits>L&&g(),m(u,s.hits)}catch(s){console.log(s)}n(),r.target.reset()});function h(){c&&(c.style.display="block")}function n(){c&&(c.style.display="none")}document.addEventListener("DOMContentLoaded",n);function f(){i&&(i.style.display="none")}function g(){i&&(i.style.display="block")}let d=1;const L=15;let M;i.addEventListener("click",async r=>{h(),d+=1;const t=await y(M);m(u,t.hits);const s=Math.ceil(t.totalHits/L);d===s&&(f(),p.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"We are sorry, but you have reached the end of search results",position:"topRight"})),n()});
//# sourceMappingURL=commonHelpers.js.map
