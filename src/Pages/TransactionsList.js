import React from 'react';
import ComponentTransactionLine from '../Components/ComponentTransactionLine';
import baseUrl from './globalVars';


class TransactionsList extends React.Component {

  ButtonOnCliskRefresh() {
    this.load1()
  }

  load1() {
    console.log(" started loading ");
    fetch(
      baseUrl+
      
      "TransactionLines"
      //fetch("https://localhost:44361/api/TransactionLines"  
      , { crossDomain: true, headers: { 'Content-Type': 'application/json' } }
    )
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loadingMovies: false,
            items: result
          });
          console.log(result);
          console.log(" done loading ");
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            loadingMovies: false,
            error
          });
        }
      )
  }

  constructor() {
    super();
    this.state = {
      loadingMovies: false,
      character: {},
      items: []
    }

    this.ButtonOnCliskRefresh = this.ButtonOnCliskRefresh.bind(this)
    this.load1 = this.load1.bind(this)

  }

  componentDidMount() {
    this.load1();
  }

  render() {
    let transactionsDataArr = this.state.items.map(transactionLine => <ComponentTransactionLine //props goes here :
      // let transactionsDataArr =  transactionsData.map(transactionLine => <ComponentTransactionLine //props goes here :
      userName={"/\\Tarekk"}
      key={transactionLine.transactionLineID}
      obj_props={transactionLine}
    ></ComponentTransactionLine>);

    let textLoading = this.state.loadingMovies ? "Loadding ....." : "Ready"

    return <div>
      {textLoading}
      {this.state.character.title}
      <div className="App">
        {transactionsDataArr}
        <button onClick={this.ButtonOnCliskRefresh}> Refresh </button>
      </div>
    </div>;

  }
}

export default TransactionsList