import { polifyMap } from "../../src/promise/map.js";
import { strict as assert } from "assert";

export function test() {
  const vals = ["one", "two", "three"];
  const promise1 = Promise.resolve(vals[0]);
  const promise2 = Promise.resolve(vals[1]);
  const promise3 = Promise.resolve(vals[2]);

  polifyMap();

  Promise.map([promise1, promise2, promise3], (pr, done) => {
    Promise.resolve(pr).then(function (v) {
      done(v + "_test");
    }, done);
  }).then((resolves) => {
    assert.equal(
      resolves,
      vals.map((val) => val + "_test")
    );
  });
}
