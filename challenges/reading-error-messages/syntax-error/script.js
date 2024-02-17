
const pathImgs = [
    './img/img1.jpg',
    './img/img2.jpg',
    './img/img3.jpg';
];

function showImage(index) {
    const containerImage = document.getElementById('imageContainer');
    
    if (index < pathImgs.length) {
      const image = new Image();
      image.src = pathImgs[index];
      image.style.width = '300px'; 
      
      containerImage.innerHTML = ''; 

      containerImage.appendChild(image);

      setTimeout(() => {
        showImage(index + 1);
      }, 3000);
    } else {
      setTimeout(() => {
        showImage(0);
      }, 10 x 1000);
    }
}

window.onload = () => showImage(0);