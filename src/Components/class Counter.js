const { Component } = require("react");

class Counter extends React.Component {
  state = {
    count: 0
  };


  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }
  reset() {
    this.setState({
      count: 0

    });
  }

  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='res' onClick={this.reset}>Reset!</button>

        <h1>{this.state.count}</h1>
      </div>
    )
  }

  componentDidMount() {
    this.timerID = setInterval(
      this.increment, 1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

}


}
