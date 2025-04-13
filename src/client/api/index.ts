import { BaseTestRailClient, TestRailClientConfig } from "./baseClient.js";
import { CasesClient } from "./cases.js";

export class TestRailClient extends BaseTestRailClient {
  readonly cases: CasesClient;

  constructor(config: TestRailClientConfig) {
    super(config);
    this.cases = new CasesClient(config);
  }
}

export { CasesClient } from "./cases.js";
