import{S as h,a as b,i as f}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const L=new h(".gallery a",{captionsData:"alt",captionDelay:250});document.querySelector(".gallery");function S({webformatURL:r,largeImageURL:t,tags:o,likes:i,views:e,comments:s,downloads:a}){return` 
  <li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${o}"
      width="360"
      height = "220"
    />
  </a>
  <p class="large-image"> largeImageURL: "${t}"</p>
  <div class ="container-images">  
  <p class="tags"> <span class="text">tags</span> "${o}"</p>
      <p class = "likes"><span class="text"> likes</span> "${i}"</p>
      <p class="likes"> <span class="text">views</span>"${e}"</p>
      <p class="likes"> <span class="text">comments</span>"${s}"</p>
      <p class="likes"> <span class="text">downloads</span>"${a}"</p>
      </div>
</li>`}function $(r){return r.map(S).join("")}function d(r,t){r.insertAdjacentHTML("beforeend",$(t)),L.refresh()}const w="https://pixabay.com/api/",P="42814531-6217cd85928bc5270423ce53d";let v=1,k=15;async function g(r){const t={key:P,q:r,_page:v,_limit:k,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await b.get(`${w}/`,{params:t})).data}const x=document.querySelector(".search-form"),l=document.querySelector(".loader"),p=document.querySelector(".gallery"),n=document.querySelector(".load-more-btn");u();x.addEventListener("submit",async r=>{r.preventDefault(),p.innerHTML="",c=1;const t=r.target.elements.search.value.trim();if(t===""){f.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}m();try{const o=await g(t,c);if(o.hits.length===0)return u(),f.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});d(p,o.hits)}catch(o){console.log(o)}finally{y(),C()}r.target.reset()});function m(){l&&(l.style.display="block")}function y(){l&&(l.style.display="none")}function u(){n&&(n.style.display="none")}function C(){n&&(n.style.display="block")}let c=1,E=15,q,M;n.addEventListener("click",async r=>{m(),c+=1;const t=await g(M);d(p,t.hits);const o=Math.ceil(q/E);c===o&&(u(),f.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"We are sorry, but you have reached the end of search results",position:"topRight"})),y()});
//# sourceMappingURL=commonHelpers.js.map
