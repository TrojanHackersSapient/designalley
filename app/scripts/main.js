var tree = [{
    text: "Button",
    nodes: [{
        text: '<div class="grid-stack-item ui-draggable" style="position: relative; left: 0px; top: 0px;"><div class="grid-stack-item-content ui-draggable-handle"><button type="button" onclick="alert("Hello world!")">Click Me!</button></div></div>',
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
