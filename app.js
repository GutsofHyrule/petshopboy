var content =  document.getElementById('aboutTxt');

function expand(){
let cardClick= content.addEventListener('click', expand)
 cardClick
}

var shop = [
    {
      title: 'Agheel',
      image: './petpics/Agheel-1536x872.png',
      price: '$7,500-15,000',
      description: 'The Great Dragon Agheel dwells in the swamps of Limgrave. With its massive size, strength, and flaming breath, it can easily fell any who dare challenge it.'
    },
    {
      title: 'Greyoll',
      image: './petpics/Greyoll-1536x873.png',
      price: '$7,500-15,000',
      description: 'A massive Dragon, suffering from the Scarlet Rot, and unable to fly. Her only means of protection are her children, which sleep nearby. She will awaken them with a mighty roar, signally them to defend their mother.'
    },
    {
      title: 'Greyll',
      image: './petpics/Greyll-1536x873.png',
      price: '$7,500-15,000',
      description:'A large and powerful Great Dragon, found guarding a narrow bridge. Like its cousins, it will utilize stomps, breath attacks, bites to take down any who try to cross.'
    },
    {
      title: 'Placidusax',
      image: './petpics/Placidusax-1536x874.png',
      price: '$7,500-15,000',
      description:'The Lord of the doomed Farum Azula, stuck in time. Despite its battered appearance, he is a force to be reckoned with, wielding powerful Lightning attacks and often phasing in and out of reality to strike.'
    },
    {
      title: 'Ekzykes',
      image: './petpics/Ekzykes-1536x872.png',
      price: '$7,500-15,000',
      description:'A pale white dragon — its scales blighted by the same scarlet rot that plagues the region of Caelid. It silently waits along the southern highway, awaiting unsuspecting travelers to fall prey to its deathly onslaught.'
    },
    {
      title: 'Smarag',
      image: './petpics/Smarag-1536x872.png',
      price: '$7,500-15,000',
      description:'A fearsome Great Dragon that devoured countless sorcerers, eventually becoming corrupted by their glintstones. Capable of spewing magic breath and firing off devastating shards at any who dares to disturb it.'
    },
    {
      title: 'Adula',
      image: './petpics/Adula.1-1536x760.png',
      price: '$7,500-15,000',
      description:'A Great Dragon that serves Ranni the Witch, and will protect her from any intruders. It can summon its signature Moonblade to slice and can blast enemies away with homing crystals.'
    },
    {
      title: 'Borealis',
      image: './petpics/Borealis-1536x873.png',
      price: '$7,500-15,000',
      description:'A Great Dragon of frost, found atop the frozen lake on the Mountaintops. It appears suddenly after a blizzard, using its breath to freeze foes solid.'
    },
    {
      title: 'Makar',
      image: './petpics/Makar-1536x875.png',
      price: '$7,500-15,000',
      description:'Aggressive Fire Wyrm guarding the entrance to Altus Plains from any who attempt to bypass the lift.'
    },
    {
      title: 'Theodorix',
      image: './petpics/Theodorix-1536x872.png',
      price: '$7,500-15,000',
      description:'Once known as a great warrior, Theodorix has succumbed to the power of Dragon Communion, transforming into a malformed Wyrm. It is capable of using its sword, along with its magma breath on anything that dares to awaken it.'
    },
    {
      title: 'Lansseax',
      image: './petpics/Lansseax2-1536x872.png',
      price: '83,000',
      description:'One of the Ancient Dragons, who had sturdy stone scales and wielded powerful lightning, Lansseax is an extremely deadly foe. She attacks with a combination of fire breath, claw swipes, and her imposing Lightning Glaive.'
    },
    
    
    
    ]
    
    var postHTML = " "
  
  
    for (var i=0; i < shop.length; i++){
        var wrapper = '<div class="card m-3" style="width: 18rem;" >'
        var heading = '<h5 class="card-title"> ' + shop[i].title + '</h5>'
        var image = ' <img class="card-img-top" src=' + shop[i].image + '>'
        var price = '<p> $' +  shop[i].price + '</p></span>'
        var description = '<div class="card-body"><p class="card-text">'+ shop[i].description + '</p><a href="#" class="btn btn-primary">Add to cart</a></div></div></div>'
        var concatThis =  wrapper+ heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML