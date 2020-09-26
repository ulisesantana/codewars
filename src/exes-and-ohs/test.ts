import { xo } from "./solution";
import { assert } from "chai";

describe("xo", function () {
  it("Basic Tests", function () {
    assert.strictEqual<boolean>(xo("xo"), true);
    assert.strictEqual<boolean>(xo("xxOo"), true);
    assert.strictEqual<boolean>(xo("xxxm"), false);
    assert.strictEqual<boolean>(xo("Oo"), false);
    assert.strictEqual<boolean>(xo("ooom"), false);
  });
});
