export function copyReport(text) {
  if (!text) {
    alert("Nothing to copy.");
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Report copied successfully!");
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to copy report.");
    });
}