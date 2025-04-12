import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registCaseTool } from './cases';


export function registAllTools(mcpServer: McpServer): void {
  registCaseTool(mcpServer);
}
