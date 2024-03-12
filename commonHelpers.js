import{S as m,a as y,i as f}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h=new m(".gallery a",{captionsData:"alt",captionDelay:250}),b=document.querySelector(".gallery");function L({webformatURL:s,largeImageURL:t,tags:o,likes:a,views:e,comments:r,downloads:i}){return` 
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
      <p class="likes"> <span class="text">downloads</span>"${i}"</p>
      </div>
</li>`}function w(s){return s.map(L).join("")}function u(s,t){b.insertAdjacentHTML("beforeend",w(t))}function P(){h.refresh()}const S="https://pixabay.com/api/",$="42814531-6217cd85928bc5270423ce53d";async function d(s,t,o){const a={key:$,q:s,_page:t,_limit:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await y.get(`${S}/`,{params:a})).data}const v=document.querySelector(".search-form"),c=document.querySelector(".loader"),p=document.querySelector(".gallery"),l=document.querySelector(".load-more-btn");k();v.addEventListener("submit",async s=>{s.preventDefault(),p.innerHTML="",n=1,g();const t=s.target.elements.search.value.trim();if(t===""){f.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}x();try{const o=await d(t,n);if(o.hits.length===0)return f.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});u(p,o.hits),P()}catch(o){console.log(o)}finally{E()}s.target.reset()});function x(){c&&(c.style.display="block")}function E(){c&&(c.style.display="none")}function k(){l&&(l.style.display="none")}function g(){l&&(l.style.display="block")}let n=1,C=15,q=0;l.addEventListener("click",async s=>{n+=1;const t=await d(n);u(p,t.hits),Math.ceil(q/C)===n&&(g(),f.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"We are sorry, but you have reached the end of search results",position:"topRight"}))});
//# sourceMappingURL=commonHelpers.js.map
