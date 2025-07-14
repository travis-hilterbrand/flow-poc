# Flow POC

## Overview

POC for an application to edit & execute flows
Flows are collections of nodes & connections that execute actions
Actions are short/long-running tasks that accept input, perform user-defined actions on the input, and generate output

## Foundation

- User can add/delete nodes on a canvas
  - 3 main types of nodes (input, output, processor)
- User can add/remove connections between nodes
- Node definitions are defined by a schema
- Every node has a custom property sheet
  - Properties can be of various types (string, enum, number, etc)
- Executing flows is performed within the application
  - Results are displayed in a side panel

## Decisions

- Persistence is not enabled yet. Saves to memory (for now)
- Manual or automatic persistence? Manual persistence is preferred because this supports a "draft"-style workflow where users can test ideas for flows without breaking.
- No sub-flows at this time but is possible
- "Loop" mode not implemented.
  - Connections are assumed using ReactFlow edges. A possible extension is to allow users to select single/multiple connections for use by the processsor
- Custom nodes later. Schema is easily extended to allow this
- Node validation is not enabled

## Future

- more property types
- history + version control

## Types

```typescript
export type FlowNodeProperty = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
};

export type FlowNodeCategories = "input" | "output" | "processor";

export type FlowThemes = "blue" | "grey" | "yellow";

export type FlowNodeSchema = {
  category: FlowNodeCategories;
  description: string;
  id: string;
  name: string;
  properties: FlowNodeProperty[];
  tags: string[];
};

export type FlowEdgeData = {
  id: string;
  source: string;
  target: string;
};
export type FlowNodeData = {
  id: string;
  collapsed: boolean;
  position: {
    x: number;
    y: number;
  };
  properties: FlowNodePropertyDataMap;
  type: string;
};
```
