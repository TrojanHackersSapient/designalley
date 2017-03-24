var tree = [{
    text: "Button",
    nodes: [{
        text: '<button type="button" onclick="alert("Hello world!")">Click Me!</button>',
        nodes: [{
            text: "Grandchild 1"
          },
          {
            text: "Grandchild 2"
          }
        ]
      },
      {
        text: "Child 2"
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

$('#tree').treeview({
  data: tree
});

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
