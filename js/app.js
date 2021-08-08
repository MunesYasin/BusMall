let imageArr=[
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
     'boots.jpg',
     'breakfast.jpg',
     'bubblegum.jpg',
     'chair.jpg',
     'cthulhu.jpg',
     'dog-duck.jpg',
     'dragon.jpg',
     'pen.jpg',
     'pet-sweep.jpg',
     'scissors.jpg',
     'shark.jpg',
     'sweep.png',
     'tauntaun.jpg',
     'unicorn.jpg',
     'water-can.jpg',
     'wine-glass.jpg',
];

let newImage =[];

let counter = 0;
let round = 25;

const mainSection = document.getElementById('photos');
let leftImage = document.getElementById('left');
let middleImage = document.getElementById('middle');
let rightImage =document.getElementById('right');

function Product(imageName , imageSource){
this.name = imageName;
this.source = imageSource;
this.votes=0;
this.shown=0;
Product.newImage.push(this);

}

Product.newImage =[];
for( let i =0 ;i<imageArr.length;i++){
    new Product(imageArr[i].split('.')[0], imageArr[i]);
}


function render(){

    let leftRandom = randomNumber( 0 , imageArr.length-1);
    let middleRandom = randomNumber( 0 , imageArr.length-1);
    let rightRandom = randomNumber( 0 , imageArr.length-1);

leftImage.src = './img/' + Product.newImage[leftRandom].source;
Product.newImage[leftRandom].shown++;
middleImage.src = './img/' + Product.newImage[middleRandom].source;
Product.newImage[middleRandom].shown++;
rightImage.src = './img/' + Product.newImage[rightRandom].source;
Product.newImage[rightRandom].shown++;


}
render();

mainSection.addEventListener('click', newClick);
function newClick(e) {
    
    let leftRandom = randomNumber( 0 , imageArr.length-1);
    let middleRandom = randomNumber( 0 , imageArr.length-1);
    let rightRandom = randomNumber( 0 , imageArr.length-1);

    if(e.target.id === 'left'  && counter < round ){
        Product.newImage[leftRandom].votes ++
        
        counter++;
        render();
       
    }else
    if(e.target.id === 'middle'  && counter < round ){
        Product.newImage[middleRandom].votes ++
        counter++;
        render();
    }
        else
    
     
    if(e.target.id === 'right'  && counter < round ){
        Product.newImage[rightRandom].votes ++
        counter++;
        render();
        
    }
    
}


    
  
  




function randomNumber (min , max){
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}










let buttonClick = document.getElementById('button');

buttonClick.addEventListener('click',getResult);
function getResult(event){
    let list = document.getElementById('list')
    let unorderedlist = document.createElement('ul')
    list.appendChild(unorderedlist);
    
    for(let i=0 ; i<Product.newImage.length;i++){
let listItem = document.createElement('li')
unorderedlist.appendChild(listItem)
 listItem.textContent= Product.newImage[i].name + ' had ' + Product.newImage[i].votes + ' votes , and shown '+ Product.newImage[i].shown


    }
    
 
}




