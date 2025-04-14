import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registCaseTool } from './cases.js';
import { registProjectTool } from './projects.js';
import { registSuiteTool } from './suites.js';
import { TestRailClient } from "../../client/api/index.js";
import { TestRailClientConfig } from "../../client/api/baseClient.js";

export function registAllTools(
  mcpServer: McpServer,
  testRailClientConfig: TestRailClientConfig): void {
  const testRailClient = new TestRailClient(testRailClientConfig);
  registCaseTool(mcpServer, testRailClient);
  registProjectTool(mcpServer, testRailClient);
  registSuiteTool(mcpServer, testRailClient);
}
