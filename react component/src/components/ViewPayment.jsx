import React, { Component } from 'react'
import PaymentService from '../services/PaymentService'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
class ViewPayment extends Component {
    componentDidMount() {
        const params = this.props.params.paymentId;
        console.log(params);
    }
    constructor(props) {
        super(props)
        
    
        this.state = {
            paymentId:this.props.params.paymentId,
            payment: {}

        }
        
        console.log(this.state.paymentId)
    }

    componentDidMount(){
        PaymentService.getPaymentById(this.state.paymentId).then( res => {
            this.setState({payment: res.data});
        }).catch((error)=>{console.log(error)})
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center1"> View Payment Details</h3>
                    <div className = "view">
                    
                        <div className = "row">
                            <label> Status: </label>
                            <div> { this.state.payment.status }</div>
        
                        </div>
                       
                        <div className = "row">
                            <label> Type: </label>
                            <div className='row'>  { this.state.payment.type}</div>
                        </div>
                        </div>
                    </div>
                   
                </div>
        )
    }
}

export default withParams(ViewPayment);