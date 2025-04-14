import { AxiosResponse } from "axios";
import { BaseTestRailClient } from "./baseClient.js";
import { GetSuiteInput, GetSuitesInput, TestRailSuite } from "../../shared/schemas/suites.js";

export class SuitesClient extends BaseTestRailClient {
  async getSuite(suiteId: GetSuiteInput["suiteId"]): Promise<TestRailSuite> {
    const response: AxiosResponse<TestRailSuite> = await this.client.get(
      `/api/v2/get_suite/${suiteId}`,
    );
    return response.data;
  }

  async getSuites(
    projectId: GetSuitesInput["projectId"],
  ): Promise<TestRailSuite[]> {
    const response: AxiosResponse<TestRailSuite[]> = await this.client.get(
      `/api/v2/get_suites/${projectId}`,
    );
    return response.data;
  }
}
