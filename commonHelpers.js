import{S as b,i as d,a as v}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const L=document.querySelector(".search-form"),m=document.querySelector(".gallery"),i=document.querySelector(".loader"),u=document.querySelector(".load-more-btn"),w=new b(".photo-card-link",{captionDelay:250,captionsData:"alt"});let a=1;const f=50;let c="";i.style.display="none";let p=0;L.addEventListener("submit",S);u.addEventListener("click",q);function S(o){if(o.preventDefault(),a=1,c=o.target.elements.searchQuery.value.trim(),!c){d.warning({position:"topRight",message:"Please enter a search query."});return}m.innerHTML="",i.style.display="block",y(c).then(t=>g(t)).catch(t=>d.error({position:"topRight",message:`Error: ${t}`})).finally(()=>{o.target.reset(),i.style.display="none"})}async function q(){i.style.display="block";const o=await y(c);g(o),i.style.display="none";const r=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}async function y(o){const t=await v.get("https://pixabay.com/api/",{params:{key:"42192602-d8808410d4367b6455b886704",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:f}});return a+=1,t.data}function $(o){const{webformatURL:t,largeImageURL:r,tags:l,likes:e,views:s,comments:n,downloads:h}=o;return`
    <div class="photo-card">
      <a class="photo-card-link" href="${r}">
        <img
          class="photo-card__img"
          src="${t}" 
          alt="${l}" 
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
          <span class="info-item-value">${n}</span>
        </p>
        <p class="info-item">
          <b class="info-item-title">Downloads</b>
          <span class="info-item-value">${h}</span>
        </p>
      </div>
    </div>
    `}function g({hits:o,totalHits:t}){if(p=Math.ceil(t/f),o.length>0){const r=o.map($).join("");m.insertAdjacentHTML("beforeend",r),w.refresh(),R(),a>p&&d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}else d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});P()}function P(){a>p&&(u.style.display="none")}function R(){u.style.display="block"}
//# sourceMappingURL=commonHelpers.js.map
