// about us text expand
var content =document.getElementById('aboutTxt');
var button =document.getElementById('showMore');
// about us
button.onclick = function(){
  if ( content.className == 'div5 text-white p-2 open'){
    // shirnk box
    content.className = 'div5 text-white p-2';
    button.innerHTML = 'Show More';

  }else{
    // expand box
    content.className = 'div5 text-white p-2 open';
    button.innerHTML = 'Show Less';
  }
  
};