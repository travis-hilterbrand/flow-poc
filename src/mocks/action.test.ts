import { executeAction } from "./action";

describe("executeAction()", () => {
  it("returns error when unmatched", async () => {
    const result = await executeAction(
      {
        id: "",
        collapsed: false,
        position: { x: 100, y: 0 },
        properties: {},
        type: "unknown",
      },
      [],
      {}
    );
    expect(result.error).toEqual("Node not implemented");
    expect(result.success).toEqual(false);
    expect(result.result).toEqual("");
  });

  it("processes input", async () => {
    const defaultValueProp = "Default value";
    const result = await executeAction(
      {
        id: "",
        collapsed: false,
        position: { x: 100, y: 0 },
        properties: { defaultValue: defaultValueProp },
        type: "Input",
      },
      [],
      {}
    );
    expect(result.error).toEqual("");
    expect(result.success).toEqual(true);
    expect(result.result).toEqual(defaultValueProp);
  });

  it("processes output", async () => {
    const defaultValueProp = "Default value";
    const result = await executeAction(
      {
        id: "output-1",
        collapsed: false,
        position: { x: 100, y: 0 },
        properties: {},
        type: "Output",
      },
      [{ id: "", source: "input-1", target: "output-1" }],
      { "input-1": { nodeId: "input-1", result: defaultValueProp } }
    );
    expect(result.error).toEqual("");
    expect(result.success).toEqual(true);
    expect(result.result).toEqual(defaultValueProp);
  });
});
