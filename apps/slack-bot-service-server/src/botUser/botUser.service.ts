import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BotUserServiceBase } from "./base/botUser.service.base";

@Injectable()
export class BotUserService extends BotUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
