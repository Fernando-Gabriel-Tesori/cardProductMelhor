document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os botões de rotação
  const buttons = document.querySelectorAll(".options > div");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const rotationY = button.getAttribute("data-rotation");
      const card = button.closest(".card");
      const modelViewer = card.querySelector("model-viewer");

      if (modelViewer && rotationY) {
        modelViewer.cameraOrbit = `${rotationY}deg 75deg auto`;
      }

      highlightButton(button);
    });
  });

  function highlightButton(activeBtn) {
    const allButtons = activeBtn.parentElement.querySelectorAll("div");
    allButtons.forEach(btn => btn.classList.remove("active"));
    activeBtn.classList.add("active");
  }
});
