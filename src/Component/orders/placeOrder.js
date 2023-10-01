import React,{Component} from 'react'
import './placeOrder.css'
import Header from '../Header'

const url = 'http://3.17.216.66:4000/menuItem'
const purl='http://localhost:8200/orders'

class PlaceOrder extends Component{

    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:'Yash',
            email:'yash@gmail.com',
            cost:0,
            phone:856455647,
            address:'seepz midc',
            menuItem:''
            }
    }


    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }



    PlaceOrder =() => {
        let obj = this.state;
        console.log(obj);
        console.log( sessionStorage.getItem('menu'));
        obj.menuItem = sessionStorage.getItem('menu')
        console.log(obj);
        fetch(purl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(this.props.history.push('/viewBooking'))
        // alert('Order Placed')
    }

    renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <div className="orderItem" key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name } />
                        <h3>{item.menu_name}</h3>
                        <h4>Rs. {item.menu_price}</h4>
                    </div>
                )
            })
        }
    }
    render(){
        return(
            <>
            <Header />
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Your Order for Rest{this.state.hotel_name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <input type="hidden" name="cost" value={this.state.cost}/>
                            <input type="hidden" name="id" value={this.state.cost}/>
                            <input type="hidden" name="hotel_name" value={this.state.hotel_name}/>
                            <div className="form-group col-md-6">
                                <label >Name</label>
                                <input className='form-control' name="name" value={this.state.name}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label >Email</label>
                                <input className='form-control' name="email" value={this.state.email}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label >Phone</label>
                                <input className='form-control' name="phone" value={this.state.phone}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label >Address</label>
                                <input className='form-control' name="address" value={this.state.address}
                                onChange={this.handleChange}/>
                            </div>

                            {this.renderItem(this.state.menuItem)}
                            
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Total Price is Rs.{this.state.cost}</h2>
                                </div>
                            </div>
                            <button className="btn btn-success" onClick={this.PlaceOrder}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>      
            </div>
            </>
        )
    }

    // calling api 
    componentDidMount(){
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            const value = sessionStorage.getItem(key);
            console.log(`Key: ${key}, Value: ${value}`);
          }
      
        let menuItem = sessionStorage.getItem('menu');
        console.log("menuItem",menuItem)
        let orderId =[];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item))
            return 'ok'
        })
        console.log("orderID",orderId)
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let totalPrice = 0;
            data.map((item) => {
                totalPrice+=parseFloat(item.menu_price);
                return 'ok'
            })
            this.setState({menuItem:data,cost:totalPrice})
        })
    }
} 

export default PlaceOrder;