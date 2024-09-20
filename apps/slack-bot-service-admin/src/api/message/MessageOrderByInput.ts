import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  botUserId?: SortOrder;
  channelId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
