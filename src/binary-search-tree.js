const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    function addInsideTree(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (data < node.data) {
        node.left = addInsideTree(node.left, data);
      } else {
        node.right = addInsideTree(node.right, data);
      }
      return node;
    }
    this.tree = addInsideTree(this.tree, data);
  }

  has(data) {
    function searchInsideTree(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      return node.data < data
        ? searchInsideTree(node.right, data)
        : searchInsideTree(node.left, data);
    }
    return searchInsideTree(this.tree, data);
  }

  find(data) {
    function findInsideTree(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      return node.data < data
        ? findInsideTree(node.right, data)
        : findInsideTree(node.left, data);
    }
    return findInsideTree(this.tree, data);
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let min = this.tree;
    while (min.left) min = min.left;
    return min.data;
  }

  max() {
    let max = this.tree;
    while (max.right) max = max.right;
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};