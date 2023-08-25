class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(list) {
        this.list = list;
        this.root = this.buildTree(list);
    }

    sortAndRemove (list) {
        const byValue = (a,b) => a - b;
        return [...new Set(list)].sort(byValue);s
    }

    buildTree (list) {
        let sorted = this.sortAndRemove(list);

        if (sorted.length === 0) {
            return null;
        } else {
            let mid = parseInt((sorted.length) / 2);
            let root = new Node(sorted[mid]);

            root.left = this.buildTree(list.slice(0, mid));
            root.right = this.buildTree(list.slice(mid + 1));
            return root;
        }
        
    }

    insert(value, root = this.root) {
        if (root == null) {
            root = new Node(value);
            return root;
        }

        if (value < root.value) {
            root.left = this.insert(value, root.left);
        } else if (value > root.value) {
            root.right = this.insert(value, root.right);
        }
        return root
    }

    delete(value, root = this.root) {
        if (root === null) return root;
        if (root.value < value) root.right = this.delete(value, root.right);
        else if (root.value > value) root.left = this.delete(value, root.left);
        else {
          if (root.left === null) return root.right;
          else if (root.right === null) return root.left;
          root.value = this.minValue(root.right);
          root.right = this.delete(value, root.right);
        }
        return root;
    }

    minValue(root) {
        let minv = root.key;
        while (root.left != null) {
          minv = root.left.key;
          root = root.left;
        }
        return minv;
      }

}

const essai = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

console.log(essai.buildTree(essai.list));
console.log(essai.insert(40));

console.log(essai.delete(40));
