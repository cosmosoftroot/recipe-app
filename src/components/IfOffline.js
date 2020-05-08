import React, { Component } from 'react';

export default class IfOffline extends Component {
  constructor(props) {
    super(props);
    this.state = { onLine: navigator ? navigator.onLine : true };
  }

  componentDidMount() {
    if (!window) return;
    window.addEventListener('online', this.goOnLine);
    window.addEventListener('offline', this.goOffLine);
  }
  componentWillMount(){
    window.removeEventListener('online', this.goOnLine);
    window.removeEventListener('offline', this.goOffLine);
  }

  goOnline = () => this.setState({ onLine: true })

  goOffline = () => this.setState({ onLine: false })

  render() {
    const { children } = this.props;
    const { onLine } = this.state;

    if (onLine) {
      return null;
    }

    return <span>{children}</span>;
  }
}
