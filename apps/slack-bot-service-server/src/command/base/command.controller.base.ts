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
import { CommandService } from "../command.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CommandCreateInput } from "./CommandCreateInput";
import { Command } from "./Command";
import { CommandFindManyArgs } from "./CommandFindManyArgs";
import { CommandWhereUniqueInput } from "./CommandWhereUniqueInput";
import { CommandUpdateInput } from "./CommandUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CommandControllerBase {
  constructor(
    protected readonly service: CommandService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Command })
  @nestAccessControl.UseRoles({
    resource: "Command",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCommand(
    @common.Body() data: CommandCreateInput
  ): Promise<Command> {
    return await this.service.createCommand({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        trigger: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Command] })
  @ApiNestedQuery(CommandFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Command",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async commands(@common.Req() request: Request): Promise<Command[]> {
    const args = plainToClass(CommandFindManyArgs, request.query);
    return this.service.commands({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        trigger: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Command })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Command",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async command(
    @common.Param() params: CommandWhereUniqueInput
  ): Promise<Command | null> {
    const result = await this.service.command({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        trigger: true,
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
  @swagger.ApiOkResponse({ type: Command })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Command",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCommand(
    @common.Param() params: CommandWhereUniqueInput,
    @common.Body() data: CommandUpdateInput
  ): Promise<Command | null> {
    try {
      return await this.service.updateCommand({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          trigger: true,
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
  @swagger.ApiOkResponse({ type: Command })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Command",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCommand(
    @common.Param() params: CommandWhereUniqueInput
  ): Promise<Command | null> {
    try {
      return await this.service.deleteCommand({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          trigger: true,
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
}
