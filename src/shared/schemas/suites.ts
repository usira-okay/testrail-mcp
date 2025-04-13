import { z } from "zod";

// Schema for retrieving a specific suite
export const getSuiteSchema = z.object({
  suiteId: z.number().describe("TestRail Suite ID"),
});

export const getSuitesSchema = z.object({
  projectId: z.number().describe("TestRail Project ID"),
});

export const getSuiteInputSchema = getSuiteSchema;
export const getSuitesInputSchema = getSuitesSchema;

export type GetSuiteInput = z.infer<typeof getSuiteInputSchema>;
export type GetSuitesInput = z.infer<typeof getSuitesInputSchema>;

export const TestRailSuiteSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  project_id: z.number(),
  is_master: z.boolean(),
  is_baseline: z.boolean(),
  is_completed: z.boolean(),
  completed_on: z.number().nullable(),
  url: z.string(),
});
export type TestRailSuite = z.infer<typeof TestRailSuiteSchema>;
