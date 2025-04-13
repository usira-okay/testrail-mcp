import { AxiosResponse } from "axios";
import { BaseTestRailClient } from "./baseClient.js";
import {
  TestRailCase,
  GetTestCaseInput,
  GetTestCasesInput
} from "../../shared/schemas/cases.js";

export class CasesClient extends BaseTestRailClient {
  async getCase(caseId: GetTestCaseInput["caseId"]): Promise<TestRailCase> {

    const response: AxiosResponse<TestRailCase> = await this.client.get(
      `/api/v2/get_case/${caseId}`,
    );
    return response.data;
  }

  async getCases(
    projectId: GetTestCasesInput["projectId"],
    suiteId: number,
  ): Promise<{
    cases: TestRailCase[];
  }> {
    const response: AxiosResponse<{
      cases: TestRailCase[];
      offset: number;
      limit: number;
      size: number;
      _links: { next: string | null; prev: string | null };
    }> = await this.client.get(`/api/v2/get_cases/${projectId}`, {
      params: {
        suite_id: suiteId,
      },
    });
    return {
      cases: response.data.cases,
    };
  }
}

