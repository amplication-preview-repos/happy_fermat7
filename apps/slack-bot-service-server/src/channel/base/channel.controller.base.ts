/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ChannelService } from "../channel.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ChannelCreateInput } from "./ChannelCreateInput";
import { Channel } from "./Channel";
import { ChannelFindManyArgs } from "./ChannelFindManyArgs";
import { ChannelWhereUniqueInput } from "./ChannelWhereUniqueInput";
import { ChannelUpdateInput } from "./ChannelUpdateInput";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ChannelControllerBase {
  constructor(
    protected readonly service: ChannelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Channel })
  @nestAccessControl.UseRoles({
    resource: "Channel",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createChannel(
    @common.Body() data: ChannelCreateInput
  ): Promise<Channel> {
    return await this.service.createChannel({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        slackId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Channel] })
  @ApiNestedQuery(ChannelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Channel",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async channels(@common.Req() request: Request): Promise<Channel[]> {
    const args = plainToClass(ChannelFindManyArgs, request.query);
    return this.service.channels({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        slackId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Channel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Channel",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async channel(
    @common.Param() params: ChannelWhereUniqueInput
  ): Promise<Channel | null> {
    const result = await this.service.channel({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        slackId: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Channel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Channel",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateChannel(
    @common.Param() params: ChannelWhereUniqueInput,
    @common.Body() data: ChannelUpdateInput
  ): Promise<Channel | null> {
    try {
      return await this.service.updateChannel({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          slackId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Channel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Channel",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteChannel(
    @common.Param() params: ChannelWhereUniqueInput
  ): Promise<Channel | null> {
    try {
      return await this.service.deleteChannel({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          slackId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/messages")
  @ApiNestedQuery(MessageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  async findMessages(
    @common.Req() request: Request,
    @common.Param() params: ChannelWhereUniqueInput
  ): Promise<Message[]> {
    const query = plainToClass(MessageFindManyArgs, request.query);
    const results = await this.service.findMessages(params.id, {
      ...query,
      select: {
        botUser: {
          select: {
            id: true,
          },
        },

        channel: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        text: true,
        timestamp: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/messages")
  @nestAccessControl.UseRoles({
    resource: "Channel",
    action: "update",
    possession: "any",
  })
  async connectMessages(
    @common.Param() params: ChannelWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        connect: body,
      },
    };
    await this.service.updateChannel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/messages")
  @nestAccessControl.UseRoles({
    resource: "Channel",
    action: "update",
    possession: "any",
  })
  async updateMessages(
    @common.Param() params: ChannelWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        set: body,
      },
    };
    await this.service.updateChannel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/messages")
  @nestAccessControl.UseRoles({
    resource: "Channel",
    action: "update",
    possession: "any",
  })
  async disconnectMessages(
    @common.Param() params: ChannelWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        disconnect: body,
      },
    };
    await this.service.updateChannel({
      where: params,
      data,
      select: { id: true },
    });
  }
}
