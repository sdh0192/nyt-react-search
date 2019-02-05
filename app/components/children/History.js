var React = require("react");
var History = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search History</h3>
        </div>
        <div className="panel-body text-center">

          { this.props.history && 
            this.props.history.map(function(search, i) {
              return (
                <div> 
                  <p key={i}><a href={search.url} target="_blank">{search.topic}</a> - {search.date}</p>
                  <hr className="line"/> 
                </div>
              );
            })}
          
        </div>
      </div>
    );

  }
});

module.exports = History;
