import { SortOrder } from "../../util/SortOrder";

export type CommandOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  trigger?: SortOrder;
  updatedAt?: SortOrder;
};
