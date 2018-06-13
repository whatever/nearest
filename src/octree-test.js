import assert from 'assert';
import {Octree} from './octree.js';


describe("Octree", () => {

  describe("- Basic Operations", () => {

    it("add nodes", () => {
      let t = new Octree();
      t.update("ok", [0.0, 0.0, 0.0]);
      t.update("ok", [0.0, 0.0, 0.0]);
      assert.equal(t.size(), 1);
      t.update("butt", [1.0, 0.0, 0.0]);
      assert.equal(t.size(), 2);
    });

    it("x_x", () => {
      let t = new Octree();
      t.update("ok", [0.0, 0.0, 0.0]);
      t.update("ok", [0.0, 0.0, 0.0]);
      let hits = t.near({
        center: [0.0, 0.0, 0.0],
        width: 1.0,
        height: 1.0,
        depth: 1.0,
      });
      assert.equal(hits.length, 2);
    });

    it("should never", () => {
    });

  });
});


