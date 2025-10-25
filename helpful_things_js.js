document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("submit");
  const textOverview = document.getElementById("textOverview");

  button.addEventListener('click', function() {
    const userText = document.getElementById("userText").value;
    const sentences = userText.split(/[.!?]/);
    let textOverviewText = "";

    sentences.forEach((sentence) => {
      if (sentence.split(" ").length > 19) {
        textOverviewText += `<mark>${sentence}. </mark>`;
      } else {
        textOverviewText += `${sentence}. `;
      }
    });

    textOverview.innerHTML = textOverviewText;
  });
});
