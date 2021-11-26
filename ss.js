// Carrocel com as imagens

const images = [ 
     { 'id': '1', 'url': './img/facebook.png'},
     { 'id': '3', 'url': './img/login.jpg'},
     { 'id': '4', 'url': './img/topsushi.jpg'},
];

const containerItems = document.querySelector('#container-items');


const loadImages = (images, container) => { 
    images.forEach(image => {
         container.innerHTML += `
            <div class = 'item'>  
                <img src= '${image.url}'
           </div>    
      ` 
  });

}

    loadImages( images , containerItems); 

    let items = document.querySelector('.item');

    const previous = () => {

       containerItems.appendChild(items[1]);
       items = document.querySelectorAll('.item');
    }

    const next = () => { 
        
         const lastItem = items[ítems.length - 1];
         containerItems.insertBefore(lastItem, items[2]);
         items = document.querySelectorAll('.item');
    } 


    document.querySelector('#previous').addEventListener('click', previous);
    document.querySelector('#next').addEventListener('click', next);
