class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeSum = (root) => {
    if (root === null) return 0;
    return root.val + treeSum(root.left) + treeSum(root.right);
}

const treeSumIterative = (root) => {
    if (root == null) return 0;
    let sum = 0;
    let queue = [root];
    while (queue.length > 0) {
        let current = queue.shift();
        sum += current.val;
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return sum;
}

//sum method using recursive method
console.log(treeSum(a))

//sum method using Iterative
console.log(treeSumIterative(a));