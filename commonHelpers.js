import{S as m,a as h,i as f}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y=new m(".gallery a",{captionsData:"alt",captionDelay:250}),b=document.querySelector(".gallery");function L({webformatURL:s,largeImageURL:t,tags:o,likes:n,views:e,comments:r,downloads:a}){return` 
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
      <p class = "likes"><span class="text"> likes</span> "${n}"</p>
      <p class="likes"> <span class="text">views</span>"${e}"</p>
      <p class="likes"> <span class="text">comments</span>"${r}"</p>
      <p class="likes"> <span class="text">downloads</span>"${a}"</p>
      </div>
</li>`}function $(s){return s.map(L).join("")}function u(s,t){b.insertAdjacentHTML("beforeend",$(t))}function P(){y.refresh()}const S="https://pixabay.com/api/",w="42814531-6217cd85928bc5270423ce53d";let v=1,x=15;async function d(s){const t={key:w,q:s,_page:v,_limit:x,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await h.get(`${S}/`,{params:t})).data}const E=document.querySelector(".search-form"),l=document.querySelector(".loader"),p=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn");q();E.addEventListener("submit",async s=>{s.preventDefault(),p.innerHTML="",c=1,g();const t=s.target.elements.search.value.trim();if(t===""){f.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}k();try{const o=await d(t,c);if(o.hits.length===0)return f.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});u(p,o.hits),P()}catch(o){console.log(o)}finally{C()}s.target.reset()});function k(){l&&(l.style.display="block")}function C(){l&&(l.style.display="none")}function q(){i&&(i.style.display="none")}function g(){i&&(i.style.display="block")}let c=1,M=15,O=0;i.addEventListener("click",async s=>{c+=1;const t=await d(userSearch);u(p,t.hits),Math.ceil(O/M)===c&&(g(),f.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"We are sorry, but you have reached the end of search results",position:"topRight"}))});
//# sourceMappingURL=commonHelpers.js.map
