import React, {Component} from 'react';

class AddForm extends Component {
    state = {
        title : ''
    };

    handleGroupTitle = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    handleGroupInsert = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({title: ''})
    }



    render() {
        const {onClick, isInsertForm} = this.props;
        if (isInsertForm) {
            return (
                <form onSubmit={this.handleGroupInsert}>
                    <input name="title" onChange={this.handleGroupTitle} value={this.state.title}/>
                    <button type="submit">Add CardList</button>
                </form>
            )
        } else {
            return (
                <button onClick={onClick}> Add CardList +</button>
            )
        }

    }
}

export default AddForm;