import flags from "./model/flags.js";

const div = document.getElementById("flags-div");

let htmlContent = "";

for (const obj of flags){
    
    htmlContent += `
    <div class="flag-item">
        <img src="${obj["image"]}" alt="${obj["name"]}" class="flag-image">
        <p class="flag-name">${obj["name"]}</p>
    </div>
    `;
}
div.innerHTML = htmlContent 