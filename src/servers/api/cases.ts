import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getCaseSchema, getTestCasesSchema } from '../../shared/schemas/cases';
import { TestRailClient } from "../../client/api/index";

export function registCaseTool(
  mcpServer: McpServer,
  testRailClient: TestRailClient
): void {
  mcpServer.tool('get_case',
    'Return an existing test case with case id, including url, caseId, caseName, request and expected results.',
    {
      caseId: getCaseSchema.shape.caseId
    }, async ({ caseId }) => {
      const testCase = await testRailClient.cases.getCase(caseId);

      return {
        content: [{ type: "text", text: JSON.stringify(testCase) }],
      };
    }
  );

  mcpServer.tool('get_cases',
    'List all test case ids with project id and suite id.',
    {
      projectId: getTestCasesSchema.shape.projectId,
      suiteId: getTestCasesSchema.shape.suiteId,
    },
    async (args, extra) => {
        const { projectId, suiteId} = args;
        const testCases = await testRailClient.cases.getCases(
          projectId,
          suiteId
        );

        return {
          content: [{ type: "text", text: JSON.stringify(testCases) }],
        };
    }
  );
}
