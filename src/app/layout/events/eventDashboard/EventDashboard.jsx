import React from "react";
import { Grid } from "semantic-ui-react";

export default function EventDashboard() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <h2>Left Side</h2>
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Right Side</h2>
      </Grid.Column>
    </Grid>
  );
}
