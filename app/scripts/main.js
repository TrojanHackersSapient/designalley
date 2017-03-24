var tree = [
  {
    text: "Button",
    nodes: [
      {
        text: '<button type="button" onclick="alert("Hello world!")">Click Me!</button>',
        nodes: [
          {
            text: "dsfasdf asdf"
          },
          {
            text: "Grandchild 2"
          }
        ]
      },
      {
        text: '<div class="container-fluid"><div class="row"><div class="col-xs-7 col-sm-6 col-lg-8" style="background-color:red;">8</div><div class="col-xs-5 col-sm-6 col-lg-4" style="background-color:lavender;">4</div></div><div class="row"><div class="col-xs-6 col-sm-8 col-lg-10" style="background-color:lavenderblush;">10</div><div class="col-xs-6 col-sm-4 col-lg-2" style="background-color:lightgrey;">2</div></div></div>'
      }
    ]
  },
  {
    text: "Parent 2"
  },
  {
    text: "Parent 3"
  },
  {
    text: "Parent 4"
  },
  {
    text: "Parent 5"
  }
];

$('#tree').treeview({data: tree});

// Testing Export functionality
$('.export-demo').click(function(e){
  e.preventDefault();
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
