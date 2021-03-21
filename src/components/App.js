import React from "react";
import styled from "styled-components";
import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";
import { Grid } from "semantic-ui-react";

const App = () => {
  return (
    <Wrapper>
      <Grid colums="equal" style={{ background: "eee" }}>
        <ColorPanel />
        <SidePanel />

        <Grid.Column style={{ marginLeft: 220 }}>
          <Messages />
        </Grid.Column>

        <Grid.Column width={4} style={{ marginLeft: 320 }}>
          <MetaPanel />
        </Grid.Column>
      </Grid>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  margin: 20px;
`;
