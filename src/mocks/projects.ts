import { Project } from "../types";

export const MockProjects: Project[] = [
  {
    id: "default",
    flows: [
      {
        flows: [
          {
            properties: { name: "test string" },
            type: "Input",
          },
        ],
        id: "default",
      },
    ],
  },
];
