import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import _ from 'lodash';

export default class FlashCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: Math.floor(Math.random() * 100 + 1),
      num2: Math.floor(Math.random() * 100 + 1),
      userPoints: 0,
      userInput: null,
      turnToBack: false,
      isCorrect: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNewRound = this.handleNewRound.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getSuccessMessage = this.getSuccessMessage.bind(this);
    this.getFailMessage = this.getFailMessage.bind(this);
    this.backOfCard = this.backOfCard.bind(this);

    // _.bindAll(this, [
    //   'handleSubmit',
    //   'handleNewRound',
    //   'handleChange',
    //   'handleFlip'
    // ]);
  }

  handleChange(event){
    this.setState({ value: event.target.value });
  }

  handleFilp() {
    const { turnToBack } = this.state;
    this.setState({ turnToBack: !turnToBack });
  }

  updateUserPoints() {
    this.setState({
      userPoints: this.state.userPoints + 1
    });
  }

  getSuccessMessage() {
    return <SuccessMessage onClick={this.handleNewRound} />;
  }

  getFailMessage() {
    return <FailMessage onClick={this.handleNewRound} />;
  }

  handleNewRound() {
    const { turnToBack } = this.state;
    this.setState({
      num1: Math.floor(Math.random() * 100 + 1),
      num2: Math.floor(Math.random() * 100 + 1),
      value: null,
      turnToBack: !turnToBack
    });
  }
  getResult() {
    return this.state.num1 + this.state.num2;
  }
  handleSubmit() {
    this.handleFilp();
  }

  backOfCard() {
    const backOfCard =
      this.state.value == this.getResult()
        ? this.getSuccessMessage()
        : this.getFailMessage();
    return backOfCard;
  }

  render() {
    const { num1, num2, turnToBack } = this.state;

    const topNum = num1 >= num2 ? num1 : num2;
    const bottomNum = num1 <= num2 ? num1 : num2;

    const backOfCard = this.backOfCard;

    return (
      <div>
        {turnToBack ? (
          backOfCard()
        ) : (
          <FrontOfCard
            topNum={topNum}
            bottomNum={bottomNum}
            onChange={this.handleChange}
            onClick={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

function FrontOfCard({ topNum, bottomNum, onChange, onClick }) {
  return (
    <Card>
      <div>
        <h2 className="text-center">{topNum}</h2>
        <h2 className="text-center">{bottomNum}</h2>
      </div>
      <input type="text" onChange={onChange} />
      <Button onClick={onClick} variant="outlined" >Submit</Button>
    </Card>
  );
}

function SuccessMessage({ onClick }) {
  return (
    <div className="notification-banner standalone success">
      <span className="icon" />
      <h3>Great Job!</h3>
      <div>
        <Button onClick={onClick} variant="outlined" >Start New Round</Button>
      </div>
    </div>
  );
}

function FailMessage({ onClick }) {
  return (
    <div className="notification-banner standalone alert">
      <span className="icon" />
      <h3>Wrong Answer. Keep Trying!</h3>
      <div>
        <Button onClick={onClick} variant="outlined" >Start New Round</Button>
      </div>
    </div>
  );
}
