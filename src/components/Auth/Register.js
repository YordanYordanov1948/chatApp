import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
  FormInput,
} from "semantic-ui-react";

const Register = () => {
  return (
    <Container>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="blue" textAlign="center">
            <Icon name="chat" color="blue" />
            Register for ChatBook
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="Username"
              />
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email"
              />
              <Form.Input
                fluid
                name="password"
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
              />
              <Form.Input
                fluid
                name="passwordConfirmation"
                name="password Confirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="Password Confirmation"
              />
              <Button color="blue" fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>
          <Message>
            Already an a user? <Link to="/login"> Login </Link>
          </Message>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  padding: 50px;
  margin-left: 20px;
`;
