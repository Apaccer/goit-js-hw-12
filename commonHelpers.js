import{i as c,a as h,S as b}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const v=document.querySelector(".search-form"),m=document.querySelector(".gallery"),i=document.querySelector(".loader"),d=document.querySelector(".load-more-btn");let p=1;const u=15,L=Math.ceil(500/u);let l="";i.style.display="none";v.addEventListener("submit",w);d.addEventListener("click",S);function w(o){if(o.preventDefault(),p=1,l=o.target.elements.searchQuery.value.trim(),l)d.style.display="none";else{c.warning({position:"topRight",message:"Please enter a search query."});return}m.innerHTML="",i.style.display="block",f(l).then(t=>y(t)).catch(t=>c.error({position:"topRight",message:`Error: ${t}`})).finally(()=>{o.target.reset(),i.style.display="none"})}async function S(){i.style.display="block";const o=await f(l);y(o),i.style.display="none";const r=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"}),p>L&&(c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),d.style.display="none")}async function f(o){const t=await h.get("https://pixabay.com/api/",{params:{key:"42192602-d8808410d4367b6455b886704",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:p,per_page:u}});return p+=1,t.data}function q(o){const{webformatURL:t,largeImageURL:r,tags:n,likes:e,views:s,comments:a,downloads:g}=o;return`
    <div class="photo-card">
      <a class="photo-card-link" href="${t}">
        <img
          class="photo-card__img"
          src="${r}" 
          alt="${n}" 
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
          <span class="info-item-value">${a}</span>
        </p>
        <p class="info-item">
          <b class="info-item-title">Downloads</b>
          <span class="info-item-value">${g}</span>
        </p>
      </div>
    </div>
    `}function y({hits:o}){if(o.length>0){const t=o.map(q).join("");m.insertAdjacentHTML("beforeend",t),new b(".photo-card-link",{captionDelay:250,captionsData:"alt"}).refresh(),d.style.display="block"}else c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
