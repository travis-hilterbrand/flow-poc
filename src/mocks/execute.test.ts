import { FlowRunResults } from "types";
import { executeFlow } from "./execute";
import { MockNodeSchemaInput, MockNodeSchemaOutput } from "./schema";

describe("executeFlow()", () => {
  /*
  it("returns correct results with empty flow", async () => {
    const generator = executeFlow({ edges: [], nodes: [] });
    const results: FlowRunResults[] = [];
    for await (const result of generator) {
      results.push(result);
    }
    expect(results.length).toEqual(2);
    expect(results[0].executing).toEqual(true);
    expect(results[0].success).toEqual(false);
    expect(results[0].results).toEqual([]);

    expect(results[1].executing).toEqual(false);
    expect(results[1].success).toEqual(true);
    expect(results[1].results).toEqual([]);
  });

  it("returns correct results with simple input", async () => {
    const generator = executeFlow({
      edges: [],
      nodes: [
        {
          data: {
            id: "input-1",
            collapsed: false,
            position: { x: 0, y: 0 },
            properties: { defaultValue: "Input from 1" },
            type: "Input",
          },
          schema: MockNodeSchemaInput,
        },
      ],
    });
    const results: FlowRunResults[] = [];
    for await (const result of generator) {
      results.push(result);
    }

    expect(results[1].executing).toEqual(true);
    expect(results[1].results[0].category).toEqual("input");
    expect(results[1].results[0].executing).toEqual(false);
    expect(results[1].results[0].success).toEqual(true);
    expect(results[1].results[0].result).toEqual("Input from 1");

    expect(results[2].executing).toEqual(false);
    expect(results[2].success).toEqual(true);
  });
  */

  it("returns correct results with simple input + output", async () => {
    const generator = executeFlow({
      edges: [
        {
          id: "",
          source: "input-1",
          target: "output-1",
        },
      ],
      nodes: [
        {
          data: {
            id: "input-1",
            collapsed: false,
            position: { x: 0, y: 0 },
            properties: { defaultValue: "Input from 1" },
            type: "Input",
          },
          schema: MockNodeSchemaInput,
        },
        {
          data: {
            id: "output-1",
            collapsed: false,
            position: { x: 0, y: 0 },
            properties: {},
            type: "Output",
          },
          schema: MockNodeSchemaOutput,
        },
      ],
    });
    const results: FlowRunResults[] = [];
    for await (const result of generator) {
      console.info("test interim", result);
      results.push(result);
    }

    expect(results[2].executing).toEqual(true);
    expect(results[2].results[1].category).toEqual("output");
    expect(results[2].results[1].executing).toEqual(false);
    expect(results[2].results[1].success).toEqual(true);
    expect(results[2].results[1].result).toEqual("Input from 1");

    expect(results[3].executing).toEqual(false);
    expect(results[3].success).toEqual(true);
  });
});
