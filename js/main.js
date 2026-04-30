import { examplePlayers } from "./mockData.js";

const root = document.getElementById("app");
if (root) {
  root.innerHTML = `
    <p style="padding: 1rem;">Edit <code>js/main.js</code> and <code>css/styles.css</code> to build your flow.</p>
    <p class="helper-text" style="padding: 0 1rem;">Loaded ${examplePlayers.length} mock records.</p>
  `;
}
