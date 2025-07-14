import { executeAction } from "./action";

describe("executeAction()", () => {
  it("returns error when unmatched", async () => {
    const result = await executeAction(
      {
        id: "",
        collapsed: false,
        position: { x: 0, y: 0 },
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

  it("processes Input", async () => {
    const defaultValueProp = "Default value";
    const result = await executeAction(
      {
        id: "",
        collapsed: false,
        position: { x: 0, y: 0 },
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

  it("processes Output", async () => {
    const defaultValueProp = "Default value";
    const result = await executeAction(
      {
        id: "output-1",
        collapsed: false,
        position: { x: 0, y: 0 },
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

  it("processes CombineText", async () => {
    const combine1 = "combine-1";
    const combine2 = "combine-2";
    const result = await executeAction(
      {
        id: "combine-1",
        collapsed: false,
        position: { x: 0, y: 0 },
        properties: {},
        type: "CombineText",
      },
      [
        { id: "", source: "input-1", target: "combine-1" },
        { id: "", source: "input-2", target: "combine-1" },
      ],
      {
        "input-1": { nodeId: "input-1", result: combine1 },
        "input-2": { nodeId: "input-2", result: combine2 },
      }
    );
    expect(result.error).toEqual("");
    expect(result.success).toEqual(true);
    expect(result.result).toEqual(combine1 + "\n" + combine2);
  });
});
