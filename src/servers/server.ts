import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import config from "../../config.json";
import { registAllTools } from "./api/index.js";

export const run = async () => {
  const server = new McpServer({
    name: config.name,
    version: config.version
  });

  registAllTools(server);

  const transport = new StdioServerTransport();
  await server.connect(transport);
}
