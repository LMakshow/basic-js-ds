const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
* class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
*/

class BinarySearchTree {
  constructor () {
    this.tree = new Node(null);
  }

  root() {
    if (this.tree.data === null) return null;
    return this.tree;
  }

  add(data) {
    if (this.tree.data === null) {
      this.tree.data = data;
      return;
    }

    this.tree = addNode(this.tree, data);

    function addNode(branch, data) {
      if (branch === null) return new Node(data);

      if (branch.data === data) return branch;

      if (branch.data > data) branch.left = addNode(branch.left, data);

      if (branch.data < data) branch.right = addNode(branch.right, data);

      return branch;
    }

  }

  has(data) {
    return this.find(data) == null ? false : true;
  }

  find(data) {
    return Search(this.tree, data);

    function Search(branch, data){
      if (branch === null || branch.data === null) return null;

      if (branch.data === data) return branch;

      if (branch.data > data) return Search(branch.left, data);

      if (branch.data < data) return Search(branch.right, data);

      return null;
    }
  }

  min(node = this.tree) {
    if (node.data === null) return null;
    
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max(node = this.tree) {
    if (node.data === null) return null;
    
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

  remove(data) {
    this.tree = removeNode(this.tree, data);

    function removeNode(branch, data) {
      if (branch === null) return null;

      if (branch.data > data) {
        branch.left = removeNode(branch.left, data);
        return branch;
      }

      if (branch.data < data) {
        branch.right = removeNode(branch.right, data);
        return branch;
      }

      if (branch.left === null && branch.right === null) {
        return null;
      }

      if (branch.left === null) {
        branch = branch.right;
        return branch;
      }

      if (branch.right === null) {
        branch = branch.left;
        return branch;
      }

      let minFromRight = branch.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      branch.data = minFromRight.data;

      branch.right = removeNode(branch.right, minFromRight.data);

      return branch;
    }
  }
}

module.exports = {
  BinarySearchTree
};