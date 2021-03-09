import React from "react";
import { DateInput } from "semantic-ui-calendar-react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm() {
  return (
    <Segment clearing>
      <Header content='Create new Project' />
      <Form>
        <Form.Field>
          <input type='text' placeholder='Event title' />
        </Form.Field>

        <Form.Field>
          <input type='text' placeholder='Category' />
        </Form.Field>

        <Form.Field>
          <input type='text' placeholder='Description' />
        </Form.Field>

        <Form.Field>
          <input type='text' placeholder='City' />
        </Form.Field>

        <Form.Field>
          <input type='text' placeholder='Venu' />
        </Form.Field>

        <Form.Field>
          <DateInput
            name='date'
            placeholder='Date'
            iconPosition='left'
            popupPosition='bottom left'
          />
        </Form.Field>

        <Button type='submit' floated='right' positive content='submit' />
        <Button type='submit' floated='right' content='cancel' />
      </Form>
    </Segment>
  );
}
