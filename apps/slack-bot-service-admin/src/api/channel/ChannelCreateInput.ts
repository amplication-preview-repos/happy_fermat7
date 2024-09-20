import { MessageCreateNestedManyWithoutChannelsInput } from "./MessageCreateNestedManyWithoutChannelsInput";

export type ChannelCreateInput = {
  messages?: MessageCreateNestedManyWithoutChannelsInput;
  name?: string | null;
  slackId?: string | null;
};
