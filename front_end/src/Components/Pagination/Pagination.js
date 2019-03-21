import React, { Component } from 'react';
import '../../App.css';


class Pagination extends Component {

    constructor(props) {
        super(props);
        this.pageArray = []
        this.users =  []
        this.firstUser = []
        this.ActualPage = 1;
        this.userListState = []
        this.state = {
            
        }
    }
    componentWillReceiveProps(nextProps){
        let { userList } = nextProps
        if(!this.userListState.length){
            this.userListState = userList
        }
        if(!this.firstUser.length){
            this.firstUser = this.listItems(this.userListState, 1, 2)
            this.props.ourInputFunction(this.firstUser)
        }
    }



    listItems(items, pageActual, limitItems) {
        this.ActualPage = pageActual
        this.pageArray = []
        let result = [];
        
        let totalPage = Math.ceil(items.length / limitItems);
        let count = (pageActual * limitItems) - limitItems;
        let delimiter = count + limitItems;

        for (let i = 1; i <= Math.ceil(this.userListState.length / limitItems); i++) {
            this.pageArray.push(i);
        }

        if (pageActual <= totalPage) {
            for (let i = count; i < delimiter; i++) {
                if (items[i] != null) {
                    result.push(items[i]);
                }
                count++;
            }
        }

        return result;
    };

    paginate(ActualPage){
        this.users = this.listItems(this.userListState, ActualPage, 2)
        this.props.ourInputFunction(this.users)
    }


    render() {
        return (
            <div>
                <nav aria-label="Page navigation example" className="paginator">
                    <ul className="pagination">
                        <li className={"page-item"  + (this.ActualPage === 1 ? ' disabled' : '')}><a className="page-link" href="#" onClick={() => this.paginate(this.ActualPage - 1)} >Previous</a></li>

                        {this.pageArray.map((user, index) =>
                            <li className={"page-item active" + (this.ActualPage === (index + 1) ? '' : 'active')} key={index}><a className="page-link" href="#" onClick={() => this.paginate(index + 1)}>{index + 1}</a></li>
                        )}
                        <li className={"page-item" + (this.ActualPage ===  this.pageArray.length ? ' disabled' : '')}><a className="page-link" href="#" onClick={() => this.paginate(this.ActualPage + 1)}>Next</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Pagination;