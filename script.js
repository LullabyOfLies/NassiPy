const addProcessButton = document.querySelector("#add-process");
const processContainer = document.querySelector("#process-container");

addProcessButton.addEventListener("click", function() {
  const processSymbol = document.createElement("div");
  processSymbol.classList.add("process-symbol");
  const processInput = document.createElement("input");
  processInput.type = "text";
  processInput.placeholder = "Process";
  processSymbol.appendChild(processInput);
  const deleteProcessButton = document.createElement("button");
  deleteProcessButton.classList.add("delete-process");
  deleteProcessButton.innerHTML = "&times;";
  processSymbol.appendChild(deleteProcessButton);
  processContainer.appendChild(processSymbol);
});

processContainer.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-process")) {
    event.target.parentNode.remove();
  }
});
