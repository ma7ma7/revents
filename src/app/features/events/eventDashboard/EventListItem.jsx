import React from "react";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem() {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image src='/assets/user.png' circular size='tiny' />
            <Item.Content>
              <Item.Header content='Event Title' />
              <Item.Description>Hosted by me</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment>
        <span>
          <Icon name='clock' /> Date
          <Icon name='marker' /> Venue
        </span>
      </Segment>

      <Segment secondary>
        <List horizontal>
          <EventListAttendee />
          <EventListAttendee />
          <EventListAttendee />
          <EventListAttendee />
        </List>
      </Segment>

      <Segment clearing>
        <span>Description of Event</span>
        <Button content='view' color='teal' floated='right' />
      </Segment>
    </Segment.Group>
  );
}
