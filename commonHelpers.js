import{i as c,a as b,S as v}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const L=document.querySelector(".search-form"),u=document.querySelector(".gallery"),n=document.querySelector(".loader"),d=document.querySelector(".load-more-btn");let p=1;const m=15;let l="";n.style.display="none";let f=0;L.addEventListener("submit",w);d.addEventListener("click",S);function w(o){if(o.preventDefault(),p=1,l=o.target.elements.searchQuery.value.trim(),l)d.style.display="none";else{c.warning({position:"topRight",message:"Please enter a search query."});return}u.innerHTML="",n.style.display="block",y(l).then(t=>g(t)).catch(t=>c.error({position:"topRight",message:`Error: ${t}`})).finally(()=>{o.target.reset(),n.style.display="none"})}async function S(){n.style.display="block";const o=await y(l);g(o),n.style.display="none";const r=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}async function y(o){const t=await b.get("https://pixabay.com/api/",{params:{key:"42192602-d8808410d4367b6455b886704",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:p,per_page:m}});return p+=1,t.data}function q(o){const{webformatURL:t,largeImageURL:r,tags:a,likes:e,views:s,comments:i,downloads:h}=o;return`
    <div class="photo-card">
      <a class="photo-card-link" href="${r}">
        <img
          class="photo-card__img"
          src="${t}" 
          alt="${a}" 
        />
      </a>
      <div class="info">
        <p class="info-item">
          <b class="info-item-title">Likes</b>
          <span class="info-item-value">${e}</span>
        </p>
        <p class="info-item">
          <b class="info-item-title">Views</b>
          <span class="info-item-value">${s}</span>
        </p>
        <p class="info-item">
          <b class="info-item-title">Comments</b>
          <span class="info-item-value">${i}</span>
        </p>
        <p class="info-item">
          <b class="info-item-title">Downloads</b>
          <span class="info-item-value">${h}</span>
        </p>
      </div>
    </div>
    `}function g({hits:o,totalHits:t}){if(f=Math.ceil(t/m),o.length>0){const r=o.map(q).join("");u.insertAdjacentHTML("beforeend",r),new v(".photo-card-link",{captionDelay:250,captionsData:"alt"}).refresh(),$()}else c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function $(){p>f?c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}):d.style.display="block"}
//# sourceMappingURL=commonHelpers.js.map
