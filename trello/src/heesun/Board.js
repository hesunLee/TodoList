import React, {Component} from 'react';
import GroupList from './GorupList';
import AddForm from './AddForm';

class Board extends Component {
    //group list �� idx
    group_idx = 2;
    state = {
        group_list : [
            {idx: 1, title : 'test'}
        ],
        group_title_form : false, //group title �Է� �� Ȱ��ȭ ����
    };

    //addForm �� ��� ��ư Ŭ���� �̺�Ʈ
    handleAddSubmit = (e) => {
        const {group_list} = this.state;
        this.setState({
            group_list: group_list.concat({idx: this.group_idx++ , title: e.title}),
            group_title_form: false
        });
    };

    //addForm add click ��ư Ŭ���� �̺�Ʈ
    handleAddClick = (e) => {
        const {group_list} = this.state;
        this.setState({
            group_list,
            group_title_form : true,
        });
    };

    render() {
        return (
            <div>
                <GroupList data={this.state.group_list} />
                <AddForm onClick={this.handleAddClick}
                         onSubmit={this.handleAddSubmit}
                         isInsertForm={this.state.group_title_form} />
            </div>
        )
    }
}

export default Board