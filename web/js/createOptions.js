import { fetchNui } from "./fetchNui.js";

const optionsWrapper = document.getElementById("options-wrapper");

function onClick() {
  this.style.pointerEvents = "none";
  fetchNui("select", [this.targetType, this.targetId, this.zoneId]);
  setTimeout(() => (this.style.pointerEvents = "auto"), 100);
}

export function createOptions(type, data, id, zoneId, index = 0) {
  if (data.hide) return;

  const option = document.createElement("div");

  const icon   = data.icon || "fa-solid fa-circle-dot";
  const iconEl = `<i class="fa-fw ${icon} option-icon"${
    data.iconColor ? ` style="color:${data.iconColor}"` : ""
  }></i>`;

  option.innerHTML = `
    <span class="opt-corner opt-corner--tl"></span>
    <span class="opt-corner opt-corner--br"></span>
    <span class="opt-scan"></span>
    ${iconEl}
    <p class="option-label">${data.label}</p>
  `;

  option.className  = "option-container";
  option.style.animationDelay = `${index * 40}ms`;
  option.targetType = type;
  option.targetId   = id;
  option.zoneId     = zoneId;

  option.addEventListener("click", onClick);
  optionsWrapper.appendChild(option);
}
