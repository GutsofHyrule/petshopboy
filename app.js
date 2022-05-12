var shop = [
  {
    title: 'Agheel',
    image: './petpics/Agheel-1536x872.png',
    price: '5,000',
    description: ''
  },
  {
    title: 'Greyoll',
    image: './petpics/Greyoll-1536x873.png',
    price: '50,000',
    description: ''
  },
  {
    title: 'Greyll',
    image: './petpics/Greyll-1536x873.png',
    price: '80,000',
    description:''
  },
  {
    title: 'Placidusax',
    image: './petpics/Placidusax-1536x874.png',
    price: '280,000',
    description:''
  },
  {
    title: 'Ekzykes',
    image: './petpics/Ekzykes-1536x872.png',
    price: '38,000',
    description:''
  },
  {
    title: 'Smarag',
    image: './petpics/Smarag-1536x872.png',
    price: '14,699',
    description:''
  },
  {
    title: 'Adula',
    image: './petpics/Adula.1-1536x760.png',
    price: '120,000',
    description:''
  },
  {
    title: 'Borealis',
    image: './petpics/Borealis-1536x873.png',
    price: '100,000',
    description:''
  },
  {
    title: 'Makar',
    image: './petpics/Makar-1536x875.png',
    price: '18,000',
    description:''
  },
  {
    title: 'Theodorix',
    image: './petpics/Theodorix-1536x872.png',
    price: '180,000',
    description:''
  },
  {
    title: 'Lansseax',
    image: './petpics/Lansseax2-1536x872.png',
    price: '60,000',
    description:''
  },
  ]
  var postHTML = " "
  
 

  for (var i=0; i < shop.length; i++){
      var wrapper = '<div class="card m-3" style="width: 18rem;" >'
      var heading = '<h5 class="card-title"> ' + shop[i].title + '</h5>'
      var image = ' <img class="card-img-top" src=' + shop[i].image + '>'
      var price = '<p> $' +  shop[i].price + '</p></span>'
      var description = '<div class="card-body"><p class="card-text">'+ shop[i].description + '</p><a href="#" class="btn btn-info">See more</a></div></div></div>'
      var concatThis =  wrapper + heading + image + price + description;
      postHTML = postHTML + concatThis
  }
  document.getElementById('market').innerHTML = postHTML
// setting data-toggle and target to open modals
function addId(){
  var buttons = document.getElementsByClassName('btn');
  for(let i = 0; i < buttons.length; i++){
    // buttons[i].id = 'modal' + i
    buttons[i].setAttribute('data-toggle', 'modal')
    buttons[i].setAttribute('data-target',  '#modal' + i)
  }
};
addId();