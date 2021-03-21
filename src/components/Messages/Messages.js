import React from "react";
import { Segment, Comment } from "semantic-ui-react";
import styled from "styled-components";

import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";

class Messages extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MessagesHeader />

        <Segment>
          <Group>
            <Comment.Group></Comment.Group>
          </Group>
        </Segment>

        <MessageForm />
      </React.Fragment>
    );
  }
}

export default Messages;

const Group = styled.div`
  height: 50vh;
`;
