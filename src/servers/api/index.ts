import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registCaseTool } from './cases';
import { registProjectTool } from './projects';
import { registSuiteTool } from './suites';
import { TestRailClient } from "../../client/api";
import { TestRailClientConfig } from "../../client/api/baseClient";

export function registAllTools(
  mcpServer: McpServer,
  testRailClientConfig: TestRailClientConfig): void {
  const testRailClient = new TestRailClient(testRailClientConfig);
  registCaseTool(mcpServer, testRailClient);
  registProjectTool(mcpServer, testRailClient);
  registSuiteTool(mcpServer, testRailClient);
}
