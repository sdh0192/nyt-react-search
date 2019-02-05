var React = require("react");

var Form = require("./children/Form");
var Results = require("./children/Results");
var History = require("./children/History");

var helpers = require("./utils/helpers");

var Main = React.createClass({

  getInitialState: function() {
    return { searchTerm: "", startYear: "", endYear: "", results: [], history: [] };
  },

  componentDidMount: function() {
    helpers.getHistory().then(function(response) {
      console.log(response);
      if (response !== this.state.history) {
        console.log("History", response.data);
        this.setState({ history: response.data });
      }
    }.bind(this));
  },

  componentDidUpdate: function(prevProps, prevState) {
    console.log("In componentDidUpdate"); 
    console.log("prevProps = " + prevProps);
    console.log("prevState = "+ prevState.searchTerm);
    if (this.state.searchTerm !== prevState.searchTerm) { 

      helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear).then(function(data) {
        if (data !== this.state.results) {
          console.log("Article", data);
          this.setState({ results: data.docs });
          
          console.log(data.docs[0].snippet, data.docs[0].web_url, data.docs[0].pub_date);

       
            helpers.getHistory().then(function(response) {
              console.log("Current History", response.data);

              console.log("History", response.data);

              this.setState({ history: response.data });

            }.bind(this));
        
        }
      }.bind(this));
    } 
  },
   setTerm: function(term,startYear,endYear) {
    this.setState({ searchTerm: term, startYear:startYear, endYear:endYear });
  },
  render: function() {
    return (
       <div>
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">New York Times Article Finder</h2>
            <p className="text-center">
              <em>Enter a search topic</em>
            </p>
          </div>

          <div>

            <Form setTerm={this.setTerm}/>

          </div>

          <div>

            <Results results={this.state.results} />

          </div>

        </div>

        <div className="row">

          <History history={this.state.history} />

        </div>

       </div>
    );
  }
});

module.exports = Main;
