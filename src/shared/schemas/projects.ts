import { z } from 'zod';

export const getProjectSchema = z.object({
  projectId: z.number().describe("TestRail Project ID"),
});

export const getProjectInputSchema = getProjectSchema;

export type GetProjectInput = z.infer<typeof getProjectInputSchema>;

export const TestRailProjectSchema = z.object({
  id: z.number(),
  name: z.string()
});

export type TestRailProject = z.infer<typeof TestRailProjectSchema>;
