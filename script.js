import Select from "./components/Select/index.js";

if (!customElements.get("alien-select")) {
    customElements.define("alien-select", Select);
}

