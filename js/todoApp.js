import React from 'react';
import ReactDOM from 'react-dom';

var TodoItems = React.createClass({
    render: function() {
        var todoEntries = this.props.entries;

        function loopTasks(item) {
              return <li key={item.key}>{item.text}</li>
        }

        var listItems = todoEntries.map(loopTasks);

        return (
              <ul className="listRow">
                {listItems}
              </ul>
        );
    }
});

var TodoList = React.createClass({
    getInitialState: function() {
        return {
          items: []
        };
    },
    addList: function(e) {
        if(!this._inputElement.value.trim()) {
            alert("please enter data");
            return;
        }

        var itemArray = this.state.items;

        itemArray.push(
            {
                text: this._inputElement.value,
                key: Date.now()
            }
        );

        this.setState({
            items: itemArray
        });

        this._inputElement.value = "";

        e.preventDefault();
    },
    render: function() {
        return (
            <div className="todoListWrap">
                <div className="inputBox">
                    <form onSubmit={this.addList}>
                        <input ref={(a) => this._inputElement = a} placeholder="add a new task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        );
    }
});




ReactDOM.render(<TodoList />, document.getElementById('app'));
