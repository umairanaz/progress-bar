const progressBar = document.querySelector(".progress");
const percentageText = document.querySelector(".percentage");
const startButton = document.getElementById("start-download");

startButton.addEventListener("click", () => {
  let progress = 0;
  startButton.disabled = true; 

  const interval = setInterval(() => {
    progress += 1; 

    progressBar.style.width = `${progress}%`;
    percentageText.textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      percentageText.textContent = "Download Complete!";
      startButton.disabled = false; 
    }
  }, 100); 
});
