import React from "react";
import { Header, Grid, Image } from "semantic-ui-react";
import "../App.css"
import image from "./img/store.jpg"
import bar from "./img/bar.jpg"

const Home = () => {
  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={3}>
          <Header as="h4">Some Info or A Picture Here</Header>
          <Image src={image} fluid />
        </Grid.Column>
        <Grid.Column width={13}>
          <Header as="h1">Some Info or A Picture Here</Header>
          <p>
            Typewriter butcher chia, migas gentrify messenger bag actually
            bespoke prism chicharrones viral DIY small batch pok pok. Chia
            seitan 90's pour-over cray venmo yuccie chartreuse banh mi. Mixtape
            blog brunch everyday carry succulents vice. Photo booth craft beer
            hashtag selfies four dollar toast ennui palo santo semiotics celiac.
            DIY taxidermy sustainable, yuccie hell of four loko ethical
            raclette. Paleo hoodie 8-bit intelligentsia heirloom franzen
            thundercats craft beer food truck pitchfork kombucha raw denim
            drinking vinegar ethical. Thundercats affogato succulents, franzen
          </p>
          <p>
            ennui subway tile pork belly schlitz waistcoat knausgaard wolf
            health goth austin listicle. Chartreuse franzen kinfolk occupy
            tumblr kogi butcher. Roof party affogato meh banh mi schlitz,
            everyday carry flexitarian. Freegan paleo activated charcoal,
            heirloom typewriter palo santo plaid swag. Meggings vape slow-carb
            portland mixtape yuccie, blue bottle pop-up la croix. Authentic
            subway tile tbh unicorn ennui pok pok. Chambray shabby chic keffiyeh
            squid craft beer, kickstarter tofu. Unicorn la croix health goth
          </p>
          <p>
            austin waistcoat woke vape cray poke sustainable. Williamsburg
            raclette la croix artisan DIY lomo normcore lo-fi live-edge selfies
            waistcoat disrupt PBR&B stumptown air plant. Bicycle rights hella
            kickstarter glossier tumblr cardigan kombucha readymade tbh la croix
            squid meh artisan quinoa. Cred palo santo austin activated charcoal
            street art typewriter kombucha +1. Distillery gentrify skateboard
            butcher everyday carry fam twee occupy fixie taxidermy narwhal hot
            chicken flexitarian tilde. Art party drinking vinegar vice, offal 3
            wolf moon kogi locavore live-edge waistcoat subway tile palo santo
            distillery +1. Mixtape pug shabby chic, live-edge stumptown
            gastropub heirloom forage readymade williamsburg cred. Church-key +1
          </p>
          <p>
            XOXO, scenester typewriter vexillologist jean shorts small batch.
            Artisan woke shabby chic tattooed, fam squid blue bottle skateboard
            8-bit. Paleo occupy disrupt flexitarian chambray yr umami retro
            small batch af bushwick taxidermy. Cronut cliche locavore offal,
            godard XOXO YOLO succulents migas. Messenger bag brooklyn iPhone
            banjo. Pop-up offal disrupt blue bottle twee. Shabby chic PBR&B
            migas leggings. Hexagon narwhal affogato before they sold out,
            chambray shoreditch gochujang typewriter heirloom. Artisan fixie
            bespoke meggings normcore. Sriracha chia air plant, roof party
            crucifix adaptogen put a bird on it kitsch +1 gluten-free viral pug
            hella. Shabby chic ugh pork belly retro occupy PBR&B live-edge
            authentic dreamcatcher intelligentsia kogi hammock tumeric fashion
            axe. Selfies flexitarian brunch kogi vape. Hella freegan meggings
            next level, church-key blue bottle activated charcoal wolf
            lumbersexual lomo iceland meditation PBR&B. Migas distillery raw
            denim asymmetrical brunch plaid, venmo subway tile offal locavore
            banh mi jianbing polaroid occupy.
          </p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
          <Header as="h4">Some Info or A Picture Here</Header>
          <p>
            Pork belly you probably haven't heard of them try-hard, small batch
            hot chicken bespoke yuccie beard jianbing humblebrag fanny pack
            mlkshk cronut lumbersexual sartorial. Kitsch hashtag kombucha
            glossier venmo. Mixtape live-edge raw denim venmo snackwave banjo.
            Listicle poutine freegan, DIY locavore drinking vinegar try-hard
            woke shaman lo-fi intelligentsia cold-pressed lomo kickstarter. YOLO
            hot chicken photo booth chillwave banh mi venmo.
          </p>
        </Grid.Column>
        <Grid.Column width={10}>
          <Header as="h2">Some Info or A Picture Here</Header>
         <Image src={bar} fluid />
                 </Grid.Column>
        <Grid.Column width={3}>
          <Header as="h3" color="blue">We can even add some color!</Header>
          <p className="colored">
            Oh. You need a little dummy text for your mockup? How quaint. I bet
            you’re still using Bootstrap too…
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default Home;
