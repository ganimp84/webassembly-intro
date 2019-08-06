const { greet } = wasm_bindgen;

function showGreeting() {
  const greeting = greet('world');
  document.getElementById("container").textContent = greeting;
}

wasm_bindgen('../out/main.wasm')
  .then(showGreeting)
  .catch(console.error);
