/**
* Main.js
*
*/

(function(){
  // Load drawer
  var loadDrawerComponents = function(){
    var drawer = $('.drawer-body');

    $.getJSON('http://localhost:9000/components.json', function(components){
      $.each(components, function(i, component){
        $.ajax({
          url: 'http://localhost:9000/components/'+components[i].name+'.html',
          type: 'GET'
        }).done(function(response) {
          var someId = 'id-' + Math.floor(Math.random() * 1000);
          drawer.append(`<div draggable="true" ondragstart="drag(event)" id=${someId} class="item-wrap">${response}<div>`);
        });
      });
    });
  };

  var init = function(){
    loadDrawerComponents();
  }

  init();
}());
