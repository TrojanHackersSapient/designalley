// Export functionality
$('[data-export]').click(function(e){
  var component = $(e.target).siblings('input').val();
  var content = $('[data-stage]');
  content.removeAttr('data-stage');
  e.preventDefault();
  var childNodes = content.children(), childNodeHTML = '<div>';
  for(var i=0; i<childNodes.length; i++) {
    childNodeHTML += childNodes[i].innerHTML;
  }
  childNodeHTML += '</div>';

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
      content: childNodeHTML
    }
  }).done(function(status){
    console.log(status);
    $.toaster({ priority : 'success', title : 'Success', message : 'The component added to your drawer successfully.'});
  });

  // Add to drawer
  $('.drawer-body').append(content);
});
