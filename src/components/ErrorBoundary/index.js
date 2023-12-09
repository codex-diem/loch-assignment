import React, { Component } from "react";
import PropTypes from "prop-types";
import BlockMessage from "../BlockMessage";
// import Tracker from "../../helpers/tracker";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (error.name !== "ChunkLoadError") {
      // Tracker.captureException(error, errorInfo);
    }
  }

  render() {
    const { error, hasError } = this.state;
    if (hasError) {
      return error.name === "ChunkLoadError" ? (
        <BlockMessage title="Application Updated">
          This application has been updated, please refresh your browser to see the latest content.
        </BlockMessage>
      ) : (
        <BlockMessage title="An Error Occurred">
          An error has occurred, please refresh and try again.
        </BlockMessage>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
