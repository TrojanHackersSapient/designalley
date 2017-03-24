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
          drawer.append(`<div draggable="true" id=${someId} class="item-wrap">${response}<div>`);
          $( ".drawer-body .item-wrap" ).draggable({
            cancel: '',
            appendTo: 'body',
            helper: 'clone'
          });
          $( ".grid-stack" ).droppable({
            drop: function(event, ui) {
              if(ui.draggable.closest('.drawer-body')[0]){
                $(this).append(ui.draggable.clone());
                $('.grid-stack .item-wrap').draggable({
                  containment: 'parent',
                  cancel: ''
                });
              }

            }
          });
        });
      });
    });
  };

  var init = function(){
    loadDrawerComponents();
  }

  init();
}());
