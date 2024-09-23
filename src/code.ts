// import ui from './ui';

// figma.showUI(ui);

// figma.ui.onmessage = (msg) => {
//   if (msg.type === 'import-json') {
//     const jsonData = msg.data;
//     console.log('Datos importados del JSON:', jsonData);
//     figma.notify('JSON importado correctamente');
//   }
// };

figma.showUI(__html__); 

figma.ui.onmessage = (msg) => {
  if (msg.type === 'import-json') {
    const jsonData = msg.data;
    console.log('Received JSON:', jsonData);
    figma.notify('JSON imported successfully');
  }
  figma.closePlugin();
};