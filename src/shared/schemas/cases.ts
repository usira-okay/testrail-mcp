import { z } from "zod";

export const getCaseSchema = z.object({
  caseId: z.number().describe('The ID of the test case'),
});

export type TestRailCase = z.infer<typeof TestRailCaseSchema>;

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

export const getTestCaseInputSchema = getCaseSchema;

export type GetTestCaseInput = z.infer<typeof getCaseSchema>;
