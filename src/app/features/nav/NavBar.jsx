import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar({ setFormOpen }) {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          RE-Events
        </Menu.Item>
        <Menu.Item name='Events' />
        <Menu.Item>
          <Button
            onClick={() => setFormOpen(true)}
            inverted
            content='Create Event'
            positive
          />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='Login' />
          <Button
            basic
            inverted
            content='Register'
            style={{ marginLeft: "0.5em" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
