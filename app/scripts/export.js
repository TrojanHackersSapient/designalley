// Export functionality
$('.export-demo').click(function(e){
  e.preventDefault();

  // Testing Export as PNG
  domtoimage.toBlob($('.sidebar')[0])
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
    });

  // Export component as HTML
  $.ajax({
    url: 'http://localhost:9000/api/export',
    type: 'POST',
    data: {
      component: 'button',
      content: $('.header')[0].outerHTML
    }
  }).done(function(status){
    console.log(status);
  });
});
