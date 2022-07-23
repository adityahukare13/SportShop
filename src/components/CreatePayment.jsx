import React, { Component } from 'react'
import PaymentService from '../services/PaymentService';
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class CreatePayment extends Component {
    componentDidMount() {
        const params = this.props.params.paymentId;
        console.log(params);
    }
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            paymentId: this.props.params.paymentId,//,
            status: '',
            type: '',
        }
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        //this.saveOrUpdatePayment = this.saveOrUpdatePayment.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.paymentId === '_add'){
            return
        }else{
            PaymentService.getPaymentById(this.state.paymentId).then( (res) =>{
                let payment = res.data;
                this.setState({status: payment.status,
                    type: payment.type,
                });
            });
        }
                
    }
    saveOrUpdatePayment = (e) => {
        e.preventDefault();
        let payment = {status: this.state.status, type: this.state.type};
        console.log('payment => ' + JSON.stringify(payment));

        // step 5
        if(this.state.paymentId === '_add'){
            PaymentService.CreatePayment(payment).then(res =>{
                this.props.history.push('/payment');
            });
        }else{
            PaymentService.updatePayment(payment, this.state.paymentId).then( res => {
                this.props.history.push('/payment');
            });
        }
    }
    
    changeAmountHandler= (event) => {
        this.setState({status: event.target.value});
    }

    changeBillDateHandler= (event) => {
        this.setState({type: event.target.value});
    }

    cancel(){
        this.props.history.push('/payment');
    }
    getTitle(){
        if(this.state.paymentId === '_add'){
            return <h3 className="text-center">Add Payment</h3>
        }else{
            return <h3 className="text-center">Update Payment</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Status: </label>
                                            <input type="text" placeholder="Status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changeStatusHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Type: </label>
                                            <input type="text" placeholder="Type" name="type" className="form-control" 
                                                value={this.state.type} onChange={this.changeTypeHandler}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.saveOrUpdatePayment}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default withParams(CreatePayment);