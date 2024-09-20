import { SortOrder } from "../../util/SortOrder";

export type ChannelOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  slackId?: SortOrder;
  updatedAt?: SortOrder;
};
