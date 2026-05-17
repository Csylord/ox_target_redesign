import { createOptions } from "./createOptions.js";

const optionsWrapper = document.getElementById("options-wrapper");
const body           = document.body;
const eye            = document.getElementById("eye");

window.addEventListener("message", (event) => {
  switch (event.data.event) {

    case "visible": {
      optionsWrapper.innerHTML = "";
      body.style.visibility = event.data.state ? "visible" : "hidden";
      eye.classList.remove("active");
      return;
    }

    case "leftTarget": {
      optionsWrapper.innerHTML = "";
      eye.classList.remove("active");
      return;
    }

    case "setTarget": {
      optionsWrapper.innerHTML = "";
      eye.classList.add("active");

      let index = 0;

      if (event.data.options) {
        for (const type in event.data.options) {
          event.data.options[type].forEach((data, id) => {
            createOptions(type, data, id + 1, undefined, index++);
          });
        }
      }

      if (event.data.zones) {
        for (let i = 0; i < event.data.zones.length; i++) {
          event.data.zones[i].forEach((data, id) => {
            createOptions("zones", data, id + 1, i + 1, index++);
          });
        }
      }
    }
  }
});
