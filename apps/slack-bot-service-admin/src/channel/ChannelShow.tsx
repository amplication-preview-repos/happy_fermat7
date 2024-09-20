import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BOTUSER_TITLE_FIELD } from "../botUser/BotUserTitle";
import { CHANNEL_TITLE_FIELD } from "./ChannelTitle";

export const ChannelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="slackId" source="slackId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Message"
          target="channelId"
          label="Messages"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="BotUser"
              source="botuser.id"
              reference="BotUser"
            >
              <TextField source={BOTUSER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Channel"
              source="channel.id"
              reference="Channel"
            >
              <TextField source={CHANNEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="text" source="text" />
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
