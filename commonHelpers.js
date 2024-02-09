import{i as c,a as g,S as h}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const b=document.querySelector(".search-form"),m=document.querySelector(".gallery"),n=document.querySelector(".loader"),d=document.querySelector(".load-more-btn");let p=1;const v=15;let l="";n.style.display="none";b.addEventListener("submit",L);d.addEventListener("click",w);function L(t){if(t.preventDefault(),p=1,l=t.target.elements.searchQuery.value.trim(),l)d.style.display="none";else{c.warning({position:"topRight",message:"Please enter a search query."});return}m.innerHTML="",n.style.display="block",u(l).then(o=>f(o)).catch(o=>c.error({position:"topRight",message:`Error: ${o}`})).finally(()=>{t.target.reset(),n.style.display="none"})}async function w(){n.style.display="block";const t=await u(l);f(t),n.style.display="none";const r=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"}),console.log(totalPages),p>totalPages&&(c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),d.style.display="none")}async function u(t){const o=await g.get("https://pixabay.com/api/",{params:{key:"42192602-d8808410d4367b6455b886704",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:p,per_page:v}});return p+=1,o.data}function S(t){const{webformatURL:o,largeImageURL:r,tags:a,likes:e,views:s,comments:i,downloads:y}=t;return`
    <div class="photo-card">
      <a class="photo-card-link" href="${o}">
        <img
          class="photo-card__img"
          src="${r}" 
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
          <span class="info-item-value">${y}</span>
        </p>
      </div>
    </div>
    `}function f({hits:t,totalHits:o}){if(t.length>0){const r=t.map(S).join("");m.insertAdjacentHTML("beforeend",r),new h(".photo-card-link",{captionDelay:250,captionsData:"alt"}).refresh(),d.style.display="block"}else c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
