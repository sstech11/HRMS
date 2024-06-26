import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BenefitService } from "./benefit.service";
import { BenefitControllerBase } from "./base/benefit.controller.base";

@swagger.ApiTags("benefits")
@common.Controller("benefits")
export class BenefitController extends BenefitControllerBase {
  constructor(protected readonly service: BenefitService) {
    super(service);
  }
}
