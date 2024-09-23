import ui from './ui.html';

figma.showUI(ui);

figma.ui.onmessage = (msg) => {
  if (msg.type === 'import-json') {
    const jsonData = msg.data;
    console.log('Datos importados del JSON:', jsonData);
    figma.notify('JSON importado correctamente');
  }
};


// import { once, showUI, emit } from '@create-figma-plugin/utilities'

// // Define an interface for our CSS variables object
// interface CSSVars {
//   [key: string]: string;
// }

// // Handler for importing JSON
// async function importJSON(jsonData: string) {
//   const cssVars: CSSVars = JSON.parse(jsonData);
//   for (const [key, value] of Object.entries(cssVars)) {
//     const style = figma.createPaintStyle();
//     style.name = key;
//     style.paints = [{type: 'SOLID', color: hexToRgb(value)}];
//   }
//   figma.notify('CSS variables imported successfully');
// }

// // Handler for exporting JSON
// async function exportJSON() {
//   const styles = await figma.getLocalPaintStylesAsync();
//   const cssVars: CSSVars = {};
//   for (const style of styles) {
//     if (style.paints.length > 0 && style.paints[0].type === 'SOLID') {
//       const paint = style.paints[0] as SolidPaint;
//       cssVars[style.name] = rgbToHex(paint.color);
//     }
//   }
//   return JSON.stringify(cssVars, null, 2);
// }

// // Utility function to convert hex to RGB
// function hexToRgb(hex: string): RGB {
//   const r = parseInt(hex.slice(1, 3), 16) / 255;
//   const g = parseInt(hex.slice(3, 5), 16) / 255;
//   const b = parseInt(hex.slice(5, 7), 16) / 255;
//   return {r, g, b};
// }

// // Utility function to convert RGB to hex
// function rgbToHex(color: RGB): string {
//   const toHex = (value: number) => {
//     const hex = Math.round(value * 255).toString(16);
//     return hex.length === 1 ? '0' + hex : hex;
//   };
//   return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
// }

// export default function() {
//   once('IMPORT', async (data: string) => {
//     await importJSON(data);
//   });

//   once('EXPORT', async () => {
//     const jsonData = await exportJSON();
//     emit('EXPORT_RESULT', jsonData);
//   });

//   showUI({
//     width: 300,
//     height: 200,
//   });
// }