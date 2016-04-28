/**
 * Created by yeshg on 4/27/2016.
 */

function Node(data) {
    return {
        data: data,
        left: null,
        right: null
    };
}

function traverse(process) {
    return (function inOrder(node) {
        while(node) {
            // Left sub tree.
            if (node.left !== null) {
                inOrder(node.left);
            }
            // Node
            process(node);

            // Right sub tree
            if (node.right !== null) {
                inOrder(node.right);
            }
        }
    });
}

function inOrder(node, process) {
    while(node) {
        // Left sub tree.
        if (node.left !== null) {
            inOrder(node.left, process);
        }
        // Node
        process(node);

        // Right sub tree
        if (node.right !== null) {
            inOrder(node.right, process);
        }
    }
}

function BinarySearchTree() {
    var root = null;

    return {
        add: function (item) {
            var current,
                node = Node(data);

            if (root === null) {
                root = node;
            }
            else {
                current = root;

                while(true) {
                    if (current.data < item) {
                        if (current.right === null) {
                            current.right = node;
                            break;
                        }
                        else {
                            current = current.right;
                        }
                    }
                    else if (current.data > item) {
                        if (current.left === null) {
                            current.left = node;
                            break;
                        }
                        else {
                            current = current.left;
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        },
        contains: function (item) {
            var node = root,
                found = false;

            while (!found && node) {
                if (node.data < item) {
                    node = node.left;
                }
                else if (node.data > item) {
                    node = node.right;
                }
                else {
                    found = true;
                }
            }
            return found;
        },
        remove: function (item) {
            var current = root,
                parent = null,
                found = false;

            while(!found && current) {
                if (current.data < item) {
                    parent = current;
                    current = current.right;
                }
                else if (current.data > item) {
                    parent = current;
                    current = current.left;
                }
                else {
                    found = true;
                }
            }


            if (found) {
                var childCount = (current.left !== null ? 1 : 0) +
                                 (current.right !== null ? 1 : 0);


                switch(childCount) {
                    case 0:
                        // root
                        if (parent === null) {
                            root = null;
                        }
                        // right
                        else if (parent.value < current.value) {
                            parent.right = null;
                        }
                        // left
                        else {
                            parent.left = null;
                        }
                        break;
                    case 1:
                        // root
                        if (parent === null) {
                            root = (current.left !== null) ?
                                current.left : current.right;
                        }
                        // right child
                        else if (parent.value < current.value) {
                            parent.right = (current.left !== null) ?
                                current.left : current.right;
                        }
                        // left child
                        else {
                            parent.left = (current.left !== null) ?
                                current.left : current.right;
                        }
                        break;
                    case 2:
                        // predecessor (right most child of left sub tree)
                        var predecessorNode = current.left,
                            predecessorParent = null;

                        while(predecessorNode.right) {
                            predecessorParent = predecessorNode;
                            predecessorNode = predecessorNode.right;
                        }

                        // has children
                        if (predecessorParent !== null) {
                            // Assign any left children of predecessor node as right children of its parent
                            predecessorParent.right = predecessorNode.left;

                            predecessorNode.left = current.left;
                            predecessorNode.right = current.right;
                        }
                        else {
                            predecessorNode.right = current.right;
                        }

                        if (parent === null) {
                            // set root
                            root = predecessorNode;
                        }
                        else {
                            if (cuurent.data < parent.data) {
                                parent.left = predecessorNode;
                            }
                            else {
                                parent.right = predecessorNode;
                            }
                        }

                        //successor (left most child or right sub tree)

                        break;
                }

                // If leaf node remove and reset parent pointer
                if (current.left === null && current.right === null) {
                    parent.data < current.data ? parent.right = null : parent.left = null;
                }
                // If has one child update reference of parent node to current nodes child
                else if ( this.size(current) === 1) {

                }
            }
            //return node.data;
        },
        size: function (node) {
            var length = 0,
                counter;

            counter = function() {
              length++;
            };

            node = node || root;
            //traverse(counter)(root);
            inOrder(node, counter);

            return length;
        },
        toArray: function () {
            var arr = [],
                pusher;

            pusher = function (node) {
                arr.push(node.data);
            };

            //traverse(pusher)(root);
            inOrder(root, pusher);

            return arr;
        },
        toString: function () {
            return this.toArray().toString();
        }
    };
}