/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
    this.nodeMaxSum = 0;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(current=this.root) {
    if(current === null) return 0

    if(current.left === null && current.right === null) return 1;

    if(current.left === null) {
      return 1 + this.minDepth(current.right)
    }
    else if(current.right === null) {
      return 1 + this.minDepth(current.left)
    }

    return 1 + Math.min(this.minDepth(current.left), this.minDepth(current.right))

  } 

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(current=this.root) {
    if(current === null) return 0

    if(current.left === null && current.right === null) return 1;

    if(current.left === null) {
      return 1 + this.maxDepth(current.right)
    }
    else if(current.right === null) {
      return 1 + this.maxDepth(current.left)
    }

    return 1 + Math.max(this.maxDepth(current.left), this.maxDepth(current.right))
  }

/** calcMaxSum(): saves the maximum sum you can obtain by traveling along a path in the tree to the nodeMaxSum variale.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  calMaxSum(current=this.root) {
    if(current === null) return 0;

    if(current.left === null && current.right === null) { 
      return current.val;
    }

     let left = this.calMaxSum(current.left);

     let right = this.calMaxSum(current.right) 

     let max1 = Math.max(Math.max(left,right) + current.val, current.val) 

     let finalMax = Math.max(max1, left + right + current.val)  

     if(finalMax > this.nodeMaxSum ) {
       this.nodeMaxSum  = finalMax;
     }
     return max1
  }
  
/**Calls the calcMaxSum function and returns the max sum */
  maxSum() {
    this.calMaxSum()
    return this.nodeMaxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

    // if(current === null) return null;

    // if(current.left === null && current.right === null) {
    //     if(current.val > lowerBound) return current.val;
    
    //     return null;
    //   };
    if(this.root === null) return null;

    let toVisit = [this.root];
    let val = [];


    while(toVisit.length) {
      let current = toVisit.shift();
      console.log(current.val)
      if(current.val > lowerBound) val.push(current.val);

      if(current.left) toVisit.push(current.left);
      if(current.right) toVisit.push(current.right)
    }

    if(val.length === 0) return null;
    
    return (Math.min(...val))
  }

  // if(current === null) return null;

  // if(current.left === null && current.right === null) {
  //   if(current.val > lowerBound) return current.val;

  //   return null;
  // };

  // let left = this.nextLarger(current.left);
  // let right = this.nextLarger(current.right);

  // if(left.val > lowerBound)
  // if(current.left === null) {
  //   return 1 + this.maxDepth(current.right)
  // }
  // else if(current.right === null) {
  //   return 1 + this.maxDepth(current.left)
  // }

  // return 1 + Math.max(this.maxDepth(current.left), this.maxDepth(current.right))

  

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
