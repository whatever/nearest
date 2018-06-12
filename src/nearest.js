// Nearest
class AbstractNearest {
}


export class Box {
  constructor(c, w, h, d) {
    this.center = center;
    this.width = w;
    this.height = h;
    this.depth = d;
  }
}

// ...
export class Nearest {
  constructor() {
    this.points = [];
  }

  // 
  insert(points) {
    points.forEach((v) => {
      this.points.push(v);
    });
  }

  // Return list of points matching position
  get({center, width, height, depth}) {
    let results = [];

    let w2 = width/2.0;
    let h2 = height/2.0;
    let d2 = depth/2.0;

    this.points.forEach((v) => {
      let cx = v[0] - center[0];
      let cy = v[1] - center[1];
      let cz = v[2] - center[2];

      if (Math.abs(cx) > w2) {
        return;
      } else if (Math.abs(cy) > h2) {
        return;
      } else if (Math.abs(cx) > d2) {
        return;
      }

      results.push(v);
    });

    return results;
  }

  // Update
  update(obj) {
  }

  // Savage
  refresh() {
  }
}
