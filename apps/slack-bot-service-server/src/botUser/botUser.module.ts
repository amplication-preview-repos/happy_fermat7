import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BotUserModuleBase } from "./base/botUser.module.base";
import { BotUserService } from "./botUser.service";
import { BotUserController } from "./botUser.controller";
import { BotUserResolver } from "./botUser.resolver";

@Module({
  imports: [BotUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [BotUserController],
  providers: [BotUserService, BotUserResolver],
  exports: [BotUserService],
})
export class BotUserModule {}
