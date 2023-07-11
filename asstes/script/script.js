const nameCats = [
    'Кот с усами', 
    'Кошка с колпаком', 
    'Кот с тыквой', 
    'Кошка-балерина'
];

const imgCats = [
    'assets/img/cat-cart-img1.png', 
    'assets/img/cat-cart-img2.png', 
    'assets/img/cat-cart-img3.png', 
    'assets/img/cat-cart-img4.png'
];

for(let i = 0; i < nameCats.length; i++){
    const dataNameCats = document.createTextNode(nameCats[i]);
    const catsText = document.getElementById(`name-cat-${i + 1}`);
    catsText.appendChild(dataNameCats);
}

const imgPaths = document.querySelectorAll('.thumb > img');

for(let i = 0; i < imgPaths.length; i++){
    imgPaths[i].src = imgCats[i];
    imgPaths[i].alt = nameCats[i];
}

