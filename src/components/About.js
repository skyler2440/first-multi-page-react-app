import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";

const About = () => {
  return (
    <Grid>
      <Grid.Column width={4}>
        <Header as="h4" center>
          You Could Put A Picture Here
        </Header>
      </Grid.Column>
      <Grid.Column width={9}>
        <Header as="h1" center>
          About Your Company
        </Header>
        <p>
          Literally fingerstache chartreuse tumeric, YOLO stumptown offal tote
          bag meggings woke you probably haven't heard of them poutine.
          Church-key truffaut meh cliche kickstarter kogi. Seitan viral swag
          blog literally DIY, next level paleo pitchfork hella microdosing.
          Chambray brunch gastropub yuccie, chia blue bottle pok pok glossier
          cliche artisan pabst chicharrones craft beer. Swag affogato beard,
          pinterest enamel pin selfies hot chicken scenester readymade everyday
          carry tumblr cold-pressed vexillologist.
        </p>
      </Grid.Column>
      <Grid.Column width={3}>
      <Header as="h3" center>
          Whatever you want!!!
        </Header>
      </Grid.Column>
    </Grid>
  );
};
export default About;
