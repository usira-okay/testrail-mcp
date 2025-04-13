import { BaseTestRailClient, TestRailClientConfig } from "./baseClient.js";
import { CasesClient } from "./cases.js";
import { ProjectsClient } from "./projects.js";
import { SuitesClient } from "./suites.js";

export class TestRailClient extends BaseTestRailClient {
  readonly cases: CasesClient;
  readonly suites: SuitesClient;
  readonly projects: ProjectsClient;

  constructor(config: TestRailClientConfig) {
    super(config);
    this.cases = new CasesClient(config);
    this.suites = new SuitesClient(config);
    this.projects = new ProjectsClient(config);
  }
}

export { CasesClient } from "./cases.js";
export { SuitesClient } from "./suites.js";
export { ProjectsClient } from "./projects.js";
