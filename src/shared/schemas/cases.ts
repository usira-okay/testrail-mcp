import { z } from "zod";

export const getCaseSchema = z.object({
  caseId: z.number().describe('The ID of the test case'),
});

// Schema for retrieving all test cases in a project
export const getTestCasesSchema = z.object({
  projectId: z.number().describe("TestRail Project ID"),
  suiteId: z.number().describe("TestRail Suite ID"),
});

export const getTestCaseInputSchema = getCaseSchema;
export const getTestCasesInputSchema = getTestCasesSchema;

export type GetTestCaseInput = z.infer<typeof getCaseSchema>;
export type GetTestCasesInput = z.infer<typeof getTestCasesInputSchema>;

export const TestRailCaseSchema = z.object({
  id: z.number(),
  title: z.string(),
  section_id: z.number(),
  template_id: z.number(),
  type_id: z.number(),
  priority_id: z.number(),
  milestone_id: z.number().nullable(),
  refs: z.string().nullable(),
  created_by: z.number(),
  created_on: z.number(),
  updated_by: z.number().nullable(),
  updated_on: z.number().nullable(),
  estimate: z.string().nullable(),
  estimate_forecast: z.string().nullable(),
  suite_id: z.number(),
  display_order: z.number(),
  is_deleted: z.boolean().default(false).optional(),
  status_id: z.number().optional(),
  custom_preconds: z.string().nullable().optional(),
  custom_steps: z.string().nullable().optional(),
  custom_expected: z.string().nullable().optional(),
});

export type TestRailCase = z.infer<typeof TestRailCaseSchema>;
