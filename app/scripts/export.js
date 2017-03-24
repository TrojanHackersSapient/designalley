// Export functionality
$('[data-export]').click(function(e){
  var component = $(e.target).siblings('input').val();
  var content = $('[data-stage]');

  e.preventDefault();

  // Export component as PNG
  domtoimage.toBlob(content[0])
    .then(function (blob) {
        window.saveAs(blob, component + '.png');
    });

  // Export component as HTML
  $.ajax({
    url: 'http://localhost:9000/api/export',
    type: 'POST',
    data: {
      component: component,
      content: content[0].outerHTML
    }
  }).done(function(status){
    console.log(status);
  });

  // Add to drawer
  $('.drawer-body').append(content);
});
