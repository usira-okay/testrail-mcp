import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TestRailClient } from "../../client/api/index.js";
import { getProjectSchema } from "../../shared/schemas/projects.js";

export function registProjectTool(
  mcpServer: McpServer,
  testRailClient: TestRailClient
): void {
  mcpServer.tool('get_cases_by_project_id',
    'List all test case ids with project id.',
    {
      projectId: getProjectSchema.shape.projectId.describe(
        "TestRail Project ID to retrieve",
      ),
    },
    async ({ projectId }) => {

      const suites = await testRailClient.suites.getSuites(projectId);
      const testCases = [];

      for (const suite of suites) {
        const result = await testRailClient.cases.getCases(projectId, suite.id);
        testCases.push(result.cases.map((testCase) => ({
          caseId: testCase.id,
          suiteId: suite.id,
        })));
      }

      return {
        content: [{ type: "text", text: JSON.stringify(testCases) }],
      };
    }
  );

}
