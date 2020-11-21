class Node {
  constructor(value, x, y) {    
    this.value = value;
    this.left = null;
    this.right = null;
    this.distance = 2;
    this.x = x;
    this.y = y;
  }

  addNode(n) {                  
    if (n.value < this.value) {
      if (this.left == null) {
        this.left = n;
        this.left.x = this.x - (2000 / Math.pow(2, n.distance));
        this.left.y = this.y + (1000 / 12);
      } else {
        n.distance += 1;
        this.left.addNode(n);
      }
    } else {
      if (this.right == null) {
        this.right = n;
        this.right.x = this.x + (2000 / Math.pow(2, n.distance));
        this.right.y = this.y + (1000 / 12);
      } else {
        n.distance += 1;
        this.right.addNode(n);
      }
    }
  }
  draw(parent) {                
    if (this.left != null) {
      this.left.draw(this);
    }

    strokeWeight(2);
    stroke(200);
    line(parent.x, parent.y, this.x, this.y);

    stroke(255);
    fill('#222222');
    ellipse(parent.x, parent.y, 45, 45);
    noStroke();

    fill(255);
    textAlign(CENTER);
    textSize(25);
    text(parent.value, parent.x, parent.y + 10);

    stroke(255);
    fill('#222222');
    ellipse(this.x, this.y, 45, 45);
    noStroke();

    fill(255);
    textAlign(CENTER);
    textSize(25);
    text(this.value, this.x, this.y + 10);

    if (this.right != null) {
      this.right.draw(this);
    }
  }
  delNode(root, key) {
    if (root === null) {
      console.log('cmon')
    }

    if (key < root.value) {
      root.left = this.delNode(root.left, key);
      return root;
    }
    else if (key > root.value) {
      root.right = this.delNode(root.right, key);
      return root;
    }
    else {

      if (root.left === null && root.right === null) {
        root = null;
        return root;
      }

      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      let currNode = root.right;
      while (currNode.left !== null) {
        currNode = currNode.left;
      }
      root.value = currNode.value;
      
      root.right = this.delNode(root.right, currNode.value);
      return root;
    }
  }
  search(val) {
    if (this.value == val) {
      return this;
    } else if (val < this.value && this.left != null) {
      return this.left.search(val);
    } else if (val > this.value && this.right != null) {
      return this.right.search(val);
    }
    return null;
  }
  inorder(root, arr) {
    if(root !== null)
    {
      this.inorder(root.left, arr);
      arr.push(root.value)
      this.inorder(root.right, arr);
    }
  }

  postorder(root, arr) {
    if(root !== null)
    {
      this.postorder(root.left, arr);
      this.postorder(root.right, arr);
      arr.push(root.value)
    }
  }

  preorder(root, arr) {
    if(root !== null)
    {
      arr.push(root.value)
      this.preorder(root.left, arr);
      this.preorder(root.right, arr);
    }
  }
}