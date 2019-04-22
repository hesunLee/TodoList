import React, {Component} from 'react';
import '../css/GroupList.css'
import '../css/CardList.css';
import '../css/AddForm.css';

class AddForm extends Component {
    state = {
        title : ''
    };

    handleGroupTitle = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    handleGroupInsert = (e) => {
        e.preventDefault();
        if (this.state.title !== '') {
            this.props.onSubmit(this.state);
            this.setState({title: ''});
        }
    }

    render() {
        const {onClick, isInsertForm} = this.props;

        if (isInsertForm) {
            return (
                <div className="groupArea">
                    <div className="cardListArea">
                        <form onSubmit={this.handleGroupInsert}>
                            <input name="title" className="titleText" onChange={this.handleGroupTitle} value={this.state.title} placeholder="Enter List Title"/>
                            <button type="submit" className="btnAddList">Add</button>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="groupArea">
                    <button onClick={onClick} className="btnAddForm"> + Add CardList</button>
                </div>
            )
        }
    }
}




export default AddForm;