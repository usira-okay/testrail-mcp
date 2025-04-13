import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TestRailClient } from "../../client/api";
import { getSuiteSchema } from "../../shared/schemas/suites";

export function registSuiteTool(
  mcpServer: McpServer,
  testRailClient: TestRailClient
): void {
  mcpServer.tool('get_cases_by_suite_id',
    'List all test case ids with suite id.',
    {
      suiteId: getSuiteSchema.shape.suiteId.describe(
        "TestRail Suite ID to retrieve",
      ),
    },
    async ({ suiteId }) => {

      const projectId = (await testRailClient.suites.getSuite(suiteId)).project_id;

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
