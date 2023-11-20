import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      console.log("ErrorBoundary: Something went wrong");
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
