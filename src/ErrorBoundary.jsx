import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    // no equivalent in function components
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    // no equivalent in function components
    // typically you would log this in new relic or a similar service
    console.error("Error Boundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // if an error return a graceful error page
      return (
        <h2>
          There was an unknown error with this listing{" "}
          <Link to="/">Click here to get back to the home page</Link>
        </h2>
      );
    }
    // otherwise return whatever was being rendered
    return this.props.children;
  }
}

export default ErrorBoundary;
