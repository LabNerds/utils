import { polifyMap } from "../../src/promise/map.js";
import { strict as assert } from "assert";

export async function test() {
  const vals = ["one", "two", "three"];
  const promise1 = Promise.resolve(vals[0]);
  const promise2 = Promise.resolve(vals[1]);
  const promise3 = Promise.resolve(vals[2]);

  polifyMap();

  const result = await Promise.map(
    [promise1, promise2, promise3],
    (pr, done) => {
      Promise.resolve(pr).then(function (v) {
        done(v + "_test");
      }, done);
    }
  );

  assert.equal(result.length, vals.length);
  assert.equal(result[0], vals[0] + "_test");
}
