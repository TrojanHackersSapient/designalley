/**
* Main.js
*
*/

(function(){
  // Load drawer
  var loadDrawerComponents = function(){
    var drawer = $('.drawer-body');

    $.getJSON('http://localhost:9000/components.json', function(components){
      for (var i=0; i<components.length; i++) {
        $.ajax({
          url: 'http://localhost:9000/components/'+components[i].name+'.html',
          type: 'GET'
        }).done(function(response) {
          drawer.append(`<div class="item-wrap">${response}<div>`);
        });
      }
    });
  };

  var init = function(){
    loadDrawerComponents();
  }

  init();
}());

