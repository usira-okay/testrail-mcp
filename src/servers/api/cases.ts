import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getCaseSchema } from '../../shared/schemas/cases';
import { z } from "zod";

export function registCaseTool(mcpServer: McpServer): void {
  mcpServer.tool('getCase',
    'Returns an existing test case, including url, caseId, caseName, request and expected results.',
    {
      caseId: getCaseSchema.shape.caseId
    }, async ({ caseId }) => {
      return {
        content: [{ type: "text", text: String(caseId) }]
      }
    }
  );
}
