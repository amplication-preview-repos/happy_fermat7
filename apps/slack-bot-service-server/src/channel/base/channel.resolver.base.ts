/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Channel } from "./Channel";
import { ChannelCountArgs } from "./ChannelCountArgs";
import { ChannelFindManyArgs } from "./ChannelFindManyArgs";
import { ChannelFindUniqueArgs } from "./ChannelFindUniqueArgs";
import { CreateChannelArgs } from "./CreateChannelArgs";
import { UpdateChannelArgs } from "./UpdateChannelArgs";
import { DeleteChannelArgs } from "./DeleteChannelArgs";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { ChannelService } from "../channel.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Channel)
export class ChannelResolverBase {
  constructor(
    protected readonly service: ChannelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Channel",
    action: "read",
    possession: "any",
  })
  async _channelsMeta(
    @graphql.Args() args: ChannelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Channel])
  @nestAccessControl.UseRoles({
    resource: "Channel",
    action: "read",
    possession: "any",
  })
  async channels(
    @graphql.Args() args: ChannelFindManyArgs
  ): Promise<Channel[]> {
    return this.service.channels(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Channel, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Channel",
    action: "read",
    possession: "own",
  })
  async channel(
    @graphql.Args() args: ChannelFindUniqueArgs
  ): Promise<Channel | null> {
    const result = await this.service.channel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Channel)
  @nestAccessControl.UseRoles({
    resource: "Channel",
    action: "create",
    possession: "any",
  })
  async createChannel(
    @graphql.Args() args: CreateChannelArgs
  ): Promise<Channel> {
    return await this.service.createChannel({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Channel)
  @nestAccessControl.UseRoles({
    resource: "Channel",
    action: "update",
    possession: "any",
  })
  async updateChannel(
    @graphql.Args() args: UpdateChannelArgs
  ): Promise<Channel | null> {
    try {
      return await this.service.updateChannel({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Channel)
  @nestAccessControl.UseRoles({
    resource: "Channel",
    action: "delete",
    possession: "any",
  })
  async deleteChannel(
    @graphql.Args() args: DeleteChannelArgs
  ): Promise<Channel | null> {
    try {
      return await this.service.deleteChannel(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Message], { name: "messages" })
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  async findMessages(
    @graphql.Parent() parent: Channel,
    @graphql.Args() args: MessageFindManyArgs
  ): Promise<Message[]> {
    const results = await this.service.findMessages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
