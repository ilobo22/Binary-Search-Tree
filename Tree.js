class Tree {
  constructor() {                     
    this.root = null;
  }

  addNode(value) {                   
    let node = new Node(value);
    if (this.root == null) {
      this.root = node;
      this.root.x = 2000 / 2;         
      this.root.y = 30;
    } else {
      this.root.addNode(node);
    }
  }
  removeNode(value) {
    this.root = this.root.delNode(this.root, value);
  }
  search(value) {
    document.getElementById('pID').innerText = "";
    var found = this.root.search(value);

    if (found != null) {
      document.getElementById('pID').innerText += value + " is in the tree."
    }
    else {
      document.getElementById('pID').innerText += value + " is not in the tree."
    }
    document.getElementById('searchCon').style.display = 'block'
  }
  create() {
    this.root.draw(this.root);
  }
  inorder() {
    var arr = [];
    document.getElementById('pID').innerText = "";
    this.root.inorder(this.root, arr);
    document.getElementById('pID').innerText += "The inorder is " + arr.join(" ");
    document.getElementById('searchCon').style.display = 'block'
  }

  postorder() {
    var arr = [];
    document.getElementById('pID').innerText = "";
    this.root.postorder(this.root, arr);
    document.getElementById('pID').innerText += "The postorder is " + arr.join(" ");
    document.getElementById('searchCon').style.display = 'block'
  }

  preorder() {
    var arr = [];
    document.getElementById('pID').innerText = "";
    this.root.preorder(this.root, arr);
    document.getElementById('pID').innerText += "The preorder is " + arr.join(" ");
    document.getElementById('searchCon').style.display = 'block'    
  }
}