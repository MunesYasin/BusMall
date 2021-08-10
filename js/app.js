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
let leftRandom =0;
let counter = 0;
let middleRandom =0;
let round = 25;
let rightRandom =0;

const mainSection = document.getElementById('photos');
let leftImage = document.getElementById('left');
let middleImage = document.getElementById('middle');
let rightImage =document.getElementById('right');

function Product(imageName , imageSource , votes =0 , shown = 0){
this.name = imageName;
this.source = imageSource;
this.votes=votes;
this.shown=shown;
Product.newImage.push(this);

}

Product.newImage =[];

getStorage();

//for( let i =0 ;i<imageArr.length;i++){
  //  new Product(imageArr[i].split('.')[0], imageArr[i]);
//}


function render(){
do {
     leftRandom = randomNumber( 0 , imageArr.length-1);
     middleRandom = randomNumber( 0 , imageArr.length-1);
     rightRandom = randomNumber( 0 , imageArr.length-1);
    }while(
        leftRandom === middleRandom || middleRandom === rightRandom || leftRandom === rightRandom 
    )


leftImage.src = './img/' + Product.newImage[leftRandom].source;
Product.newImage[leftRandom].shown++;
middleImage.src = './img/' + Product.newImage[middleRandom].source;
Product.newImage[middleRandom].shown++;
rightImage.src = './img/' + Product.newImage[rightRandom].source;
Product.newImage[rightRandom].shown++;

localStorage.data = JSON.stringify(Product.newImage)



}
render();

mainSection.addEventListener('click', newClick);
function newClick(e) {
    
    

    if(e.target.id === 'left'  && counter < round ){
        Product.newImage[leftRandom].votes ++
        console.log(Product.newImage[leftRandom].votes)
        counter++;
        render();
       
    }else
    if(e.target.id === 'middle'  && counter < round ){
        Product.newImage[middleRandom].votes ++
        console.log(Product.newImage[middleRandom].votes)
        counter++;
        render();
    }
        else
    
     
    if(e.target.id === 'right'  && counter < round ){
        Product.newImage[rightRandom].votes ++
        console.log(Product.newImage[rightRandom].votes)
        counter++;
        render();
        
    }
    if (counter >= round){
        mainSection.removeEventListener('click', newClick);
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

   
 buttonClick.removeEventListener('click' , getResult );
 createChart();
}

function createChart (){
    let nameArr = [];
    let shownArr = [];
    let voteArr = [];
     
    for ( let i =0 ;i <Product.newImage.length;i++){

        nameArr.push(Product.newImage[i].name);
        shownArr.push(Product.newImage[i].shown);
        voteArr.push(Product.newImage[i].votes);
    }
console.log(nameArr)
console.log(shownArr)
console.log(voteArr)

let ctx = document.getElementById( 'chart' ).getContext( '2d' );

for (let i =0 ; i<nameArr.length;i++){

let myChart = new Chart( ctx, {

  type: 'bar',
  data: {
    labels: nameArr,
    datasets: [{
      label: ' shown',
      data: shownArr,
      backgroundColor:
              'rgba(2955, 9, 132, 0.2)',
      borderWidth: 2,},
      {
        label: ' votes',
      data: voteArr,
      backgroundColor:
              'rgba(0, 0, 0, 1)',
      borderWidth: 2,
      

    }]
    
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
} )};
}
function getStorage (){

    if (localStorage.data){

let data = JSON.parse(localStorage.data);
for(let i = 0 ; i<imageArr.length;i++){


    new Product(data[i].name , data[i].source,data[i].votes, data[i].shown);
}
{

}

    }else{
        for(let i = 0 ; i<imageArr.length;i++){
        new Product(imageArr[i].split('.')[0], imageArr[i]);

    }
}

}


