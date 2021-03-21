import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import styled from 'styled-components';
import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";

const App = ({ currentUser }) => (
  <Wrapper> 
  <Grid columns="equal" style={{ background: "#eee" }}>
    <ColorPanel />
    <SidePanel currentUser={currentUser} />

    <Grid.Column style={{ marginLeft: 320 }}>
      <Messages />
    </Grid.Column>

    <Grid.Column width={4}>
      <MetaPanel />
    </Grid.Column>
  </Grid>
  </Wrapper> 
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(App);


const Wrapper = styled.div`
  margin: 20px;
`;