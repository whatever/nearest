import assert from 'assert';
import {NaiveNearest} from './nearest.js';


describe("Box", () => {

  describe("- Basic", () => {
  });

});

describe("Nearest", () => {

  describe("- Basic Operations", function() {

    it("should insert multiple points", () => {
      let n = new NaiveNearest();
      n.insert(
        [0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0],
      );
      assert.equal(n.points.length, 3);
    });

    it("should find points in a region", () => {
      let n = new NaiveNearest();

      let insert_these = [
        [0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0],
        [10.0, 0.0, 0.0],
        [11.0, 11.0, 11.0],
      ];

      n.insert(insert_these);

      let matches = n.get({
        center: [0.0, 0.0, 0.0],
        width: 2.0,
        height: 2.0,
        depth: 2.0,
      })

      assert.equal(matches.length, 3);
      assert.equal(matches[0], insert_these[0]);
      assert.equal(matches[1], insert_these[1]);
      assert.equal(matches[2], insert_these[2]);

      matches = n.get({
        center: [0.0, 0.0, 0.0],
        width: 20.0,
        height: 20.0,
        depth: 20.0,
      })

      assert.equal(matches.length, 4);
      assert.equal(matches[0], insert_these[0]);
      assert.equal(matches[1], insert_these[1]);
      assert.equal(matches[2], insert_these[2]);
      assert.equal(matches[3], insert_these[3]);

      matches = n.get({
        center: [15.0, 15.0, 10.0],
        width: 10.0,
        height: 10.0,
        depth: 10.0,
      })

      assert.equal(matches.length, 1);
      assert.equal(matches[0], insert_these[4]);
    });

  });
});
