import { step } from "../../src/generator/step.js";
import { strict as assert } from "assert";

export function test() {
  let a = 1;
  let b = 2;

  function* foo() {
    a++;
    yield;
    b = b * a;
    a = (yield b) + 3;
  }

  const s = step(foo);
  s();
  assert.equal(a, 2);
  assert.equal(b, 2);

  s();
  assert.equal(a, 2);
  assert.equal(b, 4);

  s();
  assert.equal(a, 7);
  assert.equal(b, 4);
}
