import { createBrowserHistory } from 'history'
import React, { Component } from 'react'
import PaymentService from '../services/PaymentService'
import ViewPayment from './ViewPayment'
import {Link} from 'react-router-dom'

const history = createBrowserHistory({forceRefresh:true})
class ListPayment extends Component {
    constructor(props) {
        super(props)

        this.state = {
                payment: []
        }
        this.addPayment = this.addPayment.bind(this);
        this.editPayment = this.editPayment.bind(this);
        this.deletePayment = this.deletePayment.bind(this);
        this.viewPayment=this.viewPayment.bind(this);
    }

    deletePayment(paymentId){
        //let paymentId=id.target.value;
        PaymentService.deletePayment(paymentId).then( res => {
            console.log(res.data);
            this.setState({payment: this.state.payment.filter(payment => payment.paymentId !== paymentId)});
        }).catch((error)=>{console.log(error)});
    }
    viewPayment(paymentId){
        alert(paymentId)
        //paymentid=paymentId
        history.push(`/view/${paymentId}`);
        console.log(paymentId);
    }
    editPayment(paymentId){
        history.push(`/add-payment/${paymentId}`);
    }

    componentDidMount(){
        PaymentService.getPayment().then((res) => {
            this.setState({ payment: res.data});
        }).catch((error)=>{console.log(error)});
    }

    addPayment(){
        history.push('/add-payment/_add');
    }

    render() {
        return (
            <div>

                 <h2 className="text-center1">Payment List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPayment}> Add Payment</button>
                 </div>
                 <br></br>
                 <div className = "pay">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Payment Id</th>
                                    <th> Status </th>
                                    <th> Type</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.payment.map(
                                        payment => 
                                        <tr key = {payment.paymentId}>
                                             <td> {payment.paymentId}</td>
                                                <td> {payment.status}</td>
                                                <td> {payment.type} </td> 
                                             <td>
                                                 {/* <button onClick={ () => this.editPayment(payment.paymentId)} className="btn btn-info">Update </button> */}
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePayment(payment.paymentId)} className="btn btn-danger">Delete </button>
                                                 <Link style={{marginLeft: "10px"}} to={`/view/${payment.paymentId}`} className="btn btn-info">View </Link>
                                             </td>
                                        </tr>
                                    )
                                }

                             

                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListPayment

