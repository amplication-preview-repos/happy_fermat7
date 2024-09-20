import { SortOrder } from "../../util/SortOrder";

export type BotUserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  isBot?: SortOrder;
  slackId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
