import { TestRailProject } from "../../shared/schemas/projects";
import { BaseTestRailClient } from "./baseClient";

export class ProjectsClient extends BaseTestRailClient {
  async getProjects(): Promise<TestRailProject[]> {
    const response = await this.client.get<TestRailProject[]>(
      "/api/v2/get_projects",
    );
    // For debugging
    console.error(
      "TestRail API getProjects raw response:",
      JSON.stringify(response.data),
    );
    return response.data;
  }
}
