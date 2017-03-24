var allComponents = ['button', 'grid'];
var tree = [];
for(var i=0; i<allComponents.length; i++) {
  $.ajax({
    url: 'http://localhost:9000/components/'+allComponents[i]+'.html',
    type: 'GET',
    action: allComponents[i]
  }).done(function(response) {
    var obj = {
      text: this.action,
      nodes: [{
        text: '<div class="grid-stack-item ui-draggable" style="position: relative; left: 0px; top: 0px;"><div class="grid-stack-item-content ui-draggable-handle">'+response+'</div></div>'
      }]
    };
    tree.push(obj);
  });
}

setTimeout(function() {
  $('#tree').treeview({
    data: tree
  });
  $(function() {
  var options = {
    width: 6,
    float: false,
    removable: '.trash',
    removeTimeout: 100,
    acceptWidgets: '.grid-stack-item'
  };
  $('#grid1').gridstack(options);
  $('#grid2').gridstack(_.defaults({
    float: true
  }, options));

  var items = [{
      x: 0,
      y: 0,
      width: 2,
      height: 2
    },
    {
      x: 3,
      y: 1,
      width: 1,
      height: 2
    },
    {
      x: 4,
      y: 1,
      width: 1,
      height: 1
    },
    {
      x: 2,
      y: 3,
      width: 3,
      height: 1
    },
    {
      x: 2,
      y: 5,
      width: 1,
      height: 1
    }
  ];

  $('.grid-stack').each(function() {
    var grid = $(this).data('gridstack');

    _.each(items, function(node) {
      grid.addWidget($('<div><div class="grid-stack-item-content" /><div/>'),
        node.x, node.y, node.width, node.height);
    }, this);
  });

  $('.grid-stack-item').draggable({
    revert: 'invalid',
    handle: '.grid-stack-item-content',
    scroll: false,
    appendTo: 'body'
  });
});
}, 2000);

// Testing Export functionality
$('.export-demo').click(function(e) {
  e.preventDefault();
  $.ajax({
    url: 'http://localhost:9000/api/export',
    type: 'POST',
    data: {
      component: 'button',
      content: $('.header')[0].outerHTML
    }
  }).done(function(status) {
    console.log(status);
  });
});
