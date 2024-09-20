import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChannelModuleBase } from "./base/channel.module.base";
import { ChannelService } from "./channel.service";
import { ChannelController } from "./channel.controller";
import { ChannelResolver } from "./channel.resolver";

@Module({
  imports: [ChannelModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChannelController],
  providers: [ChannelService, ChannelResolver],
  exports: [ChannelService],
})
export class ChannelModule {}
