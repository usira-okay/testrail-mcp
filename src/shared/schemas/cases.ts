import { z } from "zod";

export const getCaseSchema = z.object({
  caseId: z.number().describe('The ID of the test case'), // case_id 為整數且必填
});

