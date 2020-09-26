// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { countBits } from "./solution";

describe("example", function () {
  it("test", function () {
    assert.equal(countBits(0), 0);
    assert.equal(countBits(4), 1);
    assert.equal(countBits(7), 3);
    assert.equal(countBits(9), 2);
    assert.equal(countBits(10), 2);
  });
});
