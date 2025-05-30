import { executeFlow } from "./executeFlow";

describe("executeFlow()", () => {
  it("returns no results with empty flow", async () => {
    const result = await executeFlow([]);
    expect(result).toEqual({ results: [] });
  });
});
