import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getCaseSchema } from '../../shared/schemas/cases';
import { TestRailClient } from "../../client/api/index";

export function registCaseTool(
  mcpServer: McpServer,
  testRailClient: TestRailClient
): void {
  mcpServer.tool('getCase',
    'Returns an existing test case, including url, caseId, caseName, request and expected results.',
    {
      caseId: getCaseSchema.shape.caseId
    }, async ({ caseId }) => {
      const testCase = await testRailClient.cases.getCase(caseId);

      return {
        content: [{ type: "text", text: JSON.stringify(testCase) }],
      };
    }
  );
}
