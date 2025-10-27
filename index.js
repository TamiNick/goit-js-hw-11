import{S as d,a as f,i}from"./assets/vendor-DXKtl-Fy.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let m=new d(".gallery a",{captionsData:"alt",captionDelay:300});function g(o){const a=o.map(t=>`
        <li class="gallery-item">
        <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}"/>
        </a>
        <ul class="card">
            <li class="card-item"><b>Likes:</b> ${t.likes}</li>
            <li class="card-item"><b>Views:</b> ${t.views}</li>
            <li class="card-item"><b>Comments:</b> ${t.comments}</li>
            <li class="card-item"><b>Downloads:</b> ${t.downloads}</li>
        </ul>
        </li>`).join("");l.insertAdjacentHTML("beforeend",a),m.refresh()}function p(){l.innerHTML=""}function y(){u.classList.remove("is-hidden")}function h(){u.classList.add("is-hidden")}const b="52838885-6d116f44af4c58ac8463c8402",L="https://pixabay.com/api/";async function w(o){const{data:a}=await f(L,{params:{key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}});return a}const n=document.querySelector(".form"),S=n.querySelector("input[name='search-text']");n.addEventListener("submit",q);async function q(o){o.preventDefault();const a=S.value.trim();if(!a){i.warning({message:"Please enter a search term!",position:"topRight"});return}p(),y();try{const t=await w(a);if(!t.hits||t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}catch{i.warning({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{h(),n.reset()}}
//# sourceMappingURL=index.js.map
