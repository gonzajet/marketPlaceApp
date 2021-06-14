import React, { useEffect } from "react";
import { connect } from "react-redux";

import IStoreState from "store/IStoreState";
import { IAuthenticationState } from "pages/authentication/stateManagement/state";
import { getToken } from "pages/authentication/stateManagement/thunks";
import { Button, Container } from "@chakra-ui/react";

interface IAuthenticationDispathProps {
  getToken: () => void;
}

export function AuthenticationButton(
  props: IAuthenticationDispathProps
): JSX.Element {

  useEffect(() => {
    props.getToken();
  }, []);

  return <Button onClick={() => props.getToken()}>Get token</Button>;
}

const mapStateToProps = (state: IStoreState): IAuthenticationState =>
  state.authentication;

const mapDispatchToProps = {
  getToken,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationButton);
