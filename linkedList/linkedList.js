/**
 * Created by yeshg on 4/27/2016.
 */

function Node(data) {
    return {
        data: data,
        next: null
    };
}

function LinkedList() {
    var head = null,
        length = 0;

    return {
        add: function (data) {
            var current;

            // if its first node
            if (head === null) {
                head = Node(data);
            }
            // has node traverse to the end
            else {
                current = head;
                while(current.next) {
                    current = current.next;
                }

                current.next = Node(data);
            }
            // Increment the count of nodes
            length++;
        },
        item: function (index) {
            // Check for index out of bounds
            if (index < -1 && index > length) {
                return null;
            }

            var current = head;
            var i = 0;
            while(i<index) {
                current = current.next
                i++;
            }

            return current.data;
        },
        remove: function(index) {
            if (index < -1 || index > length) {
                return null;
            }

            var previous,
                current = head,
                i = 0;

            if (index === 0) {
                head = current.next;
            }
            // traverse till the node that is pointing
            // to node being deleted.
            else {
                while (i < index - 1) {
                    current = current.next;
                    i++;
                }

                previous = current;
                // step one forward to get to node to be removed.
                current = current.next;

                previous.next = current.next;
                length--;

                return current.data;
            }
        },
        item: function (index) {
            var i = 0,
                node = head;

            while(i < index) {
                node = node.next;
                i++;
            }

            return node.data;
        },
        size: function() {
            return length;
        }
    };
}

module.exports = LinkedList;