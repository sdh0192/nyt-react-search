var React = require("react");
var Form = React.createClass({
  getInitialState: function () {
    return { term: "", startYear: "", endYear: "" };
  },
  handleChange: function (event) {

    this.setState({ term: event.target.value });

  },

  handleChangeStartYear: function (event) {

    this.setState({ startYear: event.target.value });

  },

  handleChangeEndYear: function (event) {

    this.setState({ endYear: event.target.value });

  },

  handleSubmit: function (event) {
    event.preventDefault();

    this.props.setTerm(this.state.term, this.state.startYear, this.state.endYear);

    this.setState({ term: "", startYear: "", endYear: "" });
  },
  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">


              <h4 class="text-center">Search Topic</h4>
              <input
                value={this.state.term}
                type="text"
                className="form-control"
                id="term"
                onChange={this.handleChange}
                required
              />
              <h4 class="text-center">Start Year</h4>
              <input
                value={this.state.startYear}
                type="text"
                className="form-control"
                id="startYear"
                onChange={this.handleChangeStartYear}
                required
              />
              <h4 class="text-center">End Year</h4>
              <input
                value={this.state.endYear}
                type="text"
                className="form-control"
                id="endYear"
                onChange={this.handleChangeEndYear}
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Form;
