import isOfType from "./index"

describe("isOfType", () => {
  it("object is of fitting type", () => {
    expect(isOfType({ key: "value" }, "key")).toBe(true)
  })
  it("object is of not fitting type", () => {
    expect(isOfType({ key: "value" }, "otherkey")).toBe(false)
  })
  it("keyed value isn't correct", () => {
    expect(isOfType({ key: "value" }, "key", "notValue")).toBe(false)
  })
  it("empty object doesn't match any keys", () => {
    expect(isOfType({}, "key")).toBe(false)
  })
})
