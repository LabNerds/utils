import { polifyWrap } from "../../src/promise/wrap.js";
import { strict as assert } from "assert";

export async function testPromiseWrap() {
  const ajaxCallback = async (url, callback) => {
    callback(null, url + "_test");
  };

  polifyWrap();

  const ajaxPr = Promise.wrap(ajaxCallback);

  const res = await ajaxPr("sample_link");

  assert.equal(res, "sample_link_test");
}
