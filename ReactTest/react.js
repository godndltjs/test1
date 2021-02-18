class HelloMessage extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "dddd ",
      this.props.name
    );
  }
}

ReactDOM.render(React.createElement(HelloMessage, { name: "Taylor" }), document.getElementById('hello-example'));