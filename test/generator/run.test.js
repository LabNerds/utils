import { run } from "../../src/generator/run.js";
import { strict as assert } from "assert";

export async function test() {
  function* foo() {
    const r1 = yield Promise.resolve(5);
    const r2 = yield Promise.resolve(7);

    return r1 + r2;
  }

  assert.equal(await run(foo), 12);
}
