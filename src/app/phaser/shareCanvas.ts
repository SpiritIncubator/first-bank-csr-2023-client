// 'use client'
// import Phaser from 'phaser';

// async function shareCanvas(snapshot: HTMLImageElement | Phaser.Display.Color) {
//   if (snapshot instanceof Phaser.Display.Color) return;
//   // Resize the image to twice its size
//   const canvas = document.createElement('canvas');
//   const ctx = canvas.getContext('2d');
//   if (!ctx) return;
//   canvas.width = 600;
//   canvas.height = 600;
//   ctx.imageSmoothingEnabled = false;
//   ctx.drawImage(snapshot, 0, 0, canvas.width, canvas.height);
//   const shareImage = canvas.toDataURL('image/png');
//   const blob = await (await fetch(shareImage)).blob();
//   canvas.remove(); ''

//   const filesArray = [
//     new File([blob], 'wallemon.png', {
//       type: blob.type,
//       lastModified: new Date().getTime(),
//     }),
//   ];

//   const shareData = {
//     files: filesArray,
//     title: 'Some Title',
//     text: 'description for sharing',
//   };

//   try {
//     await navigator.share(shareData);
//   } catch (err) {
//     console.log('Browser does not support Sharing');
//   }
// }

// export default shareCanvas;