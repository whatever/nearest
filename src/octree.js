
// Octnode: parent-child aware
class Octnode {

  // Constructor
  constructor(id, position) {
    this.id = id;
    this.parent = null;
    this.children = null;
  }

  leaf() {
    return null;
  }

  // Return where in the tree it is
  depth() {
    return 0;
  }
}


// Octree
export class Octree {
  constructor() {
    this.root = new Octnode();
    this.nodes = {};
    this.keys = [];
  }

  update(id, node) {
    if (!this.nodes.hasOwnProperty(id)) {
      this.keys.push(id);
    }
    this.nodes[id] = node;
  }

  remove(node) {
  }

  near(box) {
    return [];
  }

  size() {
    return this.keys.length;
  }
}
