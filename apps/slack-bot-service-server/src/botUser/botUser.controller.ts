import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BotUserService } from "./botUser.service";
import { BotUserControllerBase } from "./base/botUser.controller.base";

@swagger.ApiTags("botUsers")
@common.Controller("botUsers")
export class BotUserController extends BotUserControllerBase {
  constructor(
    protected readonly service: BotUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
