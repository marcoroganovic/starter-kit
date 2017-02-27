import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe("first test", () => {
  it("should pass!", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should say hello", (done) => {
    const file = fs.readFileSync("./src/index.html", "utf-8");
    jsdom.env(file, (err, window) => {
      var document = window.document;
      const h1 = document.querySelector("h1");
      expect(h1.innerHTML).to.equal("Hello, World!");
      done();
      window.close();
    });
  });
});
