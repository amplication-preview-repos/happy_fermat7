import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { BotUserTitle } from "../botUser/BotUserTitle";
import { ChannelTitle } from "../channel/ChannelTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="botUser.id" reference="BotUser" label="BotUser">
          <SelectInput optionText={BotUserTitle} />
        </ReferenceInput>
        <ReferenceInput source="channel.id" reference="Channel" label="Channel">
          <SelectInput optionText={ChannelTitle} />
        </ReferenceInput>
        <TextInput label="text" multiline source="text" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
