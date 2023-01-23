function loadData() {
    return new Promise((resolve, reject) => {
      
      setTimeout(resolve, 1000);
    })
  }
  
  loadData()
    .then(() => {
      let preloaderEl = document.getElementById('preloader');
      preloaderEl.classList.add('hidden');
      preloaderEl.classList.remove('visible');
    });
console.log('Anatoliy Dryapak also known as Tolia Driapak. Likes to develop websites, ride a skateboard and write music. ')
console.log('Instagram: https://www.instagram.com/toliadriapakmusic/')