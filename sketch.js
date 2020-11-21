let tree = new Tree();                        

function setup() {
  clear();
  createCanvas(2000, 1000);
  background(245, 245, 220);
}

function insert() {
  tree.addNode(parseInt(document.getElementById("insert").value));
  tree.create();                              
}

function removeTheNode() {
  tree.removeNode(parseInt(document.getElementById("removeNode").value));
  this.setup();
  tree.create();                              
}

function searchNode()
{
  tree.search(parseInt(document.getElementById('search').value));
}

function inorder()
{
  tree.inorder();
}

function postorder()
{
  tree.postorder();
}

function preorder()
{
  tree.preorder();
}