import { AxiosResponse } from "axios";
import { BaseTestRailClient } from "./baseClient.js";
import {
  TestRailCase,
  GetTestCaseInput
} from "../../shared/schemas/cases.js";

export class CasesClient extends BaseTestRailClient {
  async getCase(caseId: GetTestCaseInput["caseId"]): Promise<TestRailCase> {

    const response: AxiosResponse<TestRailCase> = await this.client.get(
      `/api/v2/get_case/${caseId}`,
    );
    return response.data;
  }
}

