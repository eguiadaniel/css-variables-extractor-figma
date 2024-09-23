const fileInput = document.getElementById('jsonFileInput') as HTMLInputElement;
const importButton = document.getElementById('importButton') as HTMLButtonElement;

importButton.onclick = () => {
  const file = fileInput.files?.[0];
  if (!file) {
    alert('Selecciona un archivo JSON.');
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const jsonData = JSON.parse(reader.result as string);
    parent.postMessage({ pluginMessage: { type: 'import-json', data: jsonData } }, '*');
  };
  reader.readAsText(file);
};
