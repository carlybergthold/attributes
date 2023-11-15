import React, { Component } from "react";
import AppViews from './AppViews';
import { withRouter } from "react-router-dom";
import "./assets/scss/core.scss";

class AttributeApp extends Component {
  render() {
    return(
      <AppViews />
    )
  }
}

export default withRouter(AttributeApp);