import { Command as TCommand } from "../api/command/Command";

export const COMMAND_TITLE_FIELD = "name";

export const CommandTitle = (record: TCommand): string => {
  return record.name?.toString() || String(record.id);
};
