import { MessageUpdateManyWithoutChannelsInput } from "./MessageUpdateManyWithoutChannelsInput";

export type ChannelUpdateInput = {
  messages?: MessageUpdateManyWithoutChannelsInput;
  name?: string | null;
  slackId?: string | null;
};
