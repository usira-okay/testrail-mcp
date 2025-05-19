import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registAllTools } from "./api/index.js";
import { Command } from 'commander'
import { TestRailClientConfig } from "../client/api/baseClient.js";

export const run = async () => {
  const server = new McpServer({
    name: 'testrail-ro-mcp',
    version: '0.0.1'
  });

  const program = new Command();
  program
    .requiredOption('--user-name <type>', '--user-name required')
    .requiredOption('--password <type>', '--password required')
    .requiredOption('--base-url <type>', '--base-url required')
    .parse(process.argv);

  const options = program.opts();

  console.error(options);

  const config: TestRailClientConfig = {
    baseURL: `${options.baseUrl.replace(/\/$/, '')}/index.php?`,
    auth: {
      username: options.userName,
      password: options.password
    },
  }

  registAllTools(server, config);

  const transport = new StdioServerTransport();
  await server.connect(transport);
}
