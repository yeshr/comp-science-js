/**
 * Created by yeshg on 4/27/2016.
 */

function Node(data) {
    return {
        data: data,
        prev: null,
        next: null
    };
}

function DoubleLinkedList() {
    var length = 0,
        head = null,
        tail = head;

    return {
        add: function(item) {
            var node = Node(item);

            if (length === 0) {
                tail = node;
                head = node;
            }
            else {
                tail.next = node;
                node.prev = tail;
                tail = node;
            }
            length++;

            return length-1;
        },
        remove: function (item) {
            var node = null;

            if (head.data === item) {
                node = head;
                head = node.next;
                head.prev = null;
            }
            else if (tail.data === item) {
                node = tail;
                tail = node.prev;
                tail.next = null;
            }
            else {
                node = head;
                while(node.next) {
                    if (node.data === item) {
                        node.prev.next = node.next;
                        break;
                    }

                    node = node.next;
                }
            }

            if (node) {
                length--;
            }

            return node.data;
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

module.exports = DoubleLinkedList;