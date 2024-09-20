import { BotUserWhereInput } from "./BotUserWhereInput";
import { BotUserOrderByInput } from "./BotUserOrderByInput";

export type BotUserFindManyArgs = {
  where?: BotUserWhereInput;
  orderBy?: Array<BotUserOrderByInput>;
  skip?: number;
  take?: number;
};
