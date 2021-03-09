import React from "react";
import { Image, List } from "semantic-ui-react";

export default function EventListAttendee() {
  return (
    <List.Item>
      <Image src='/assets/user.png' size='mini' circular />
    </List.Item>
  );
}
