import React,{Component} from 'react'
import './details.css'
import axios from 'axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import MenuDisplay from './menuDetails';
import Header from '../Header';

const base_url="http://3.17.216.66:4000"

class Details extends Component{

    constructor(props){
        super(props)

        this.state={
            details:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1,
            menuList:'',
            userItem:''
        }
    }
    proceed = () => {
        sessionStorage.setItem('menu',this.state.userItem)
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    addToCart = (data) => {
        this.setState({userItem:data})
    } 

    render(){
        let {details} = this.state;
        return(
            <>
            <Header />
                <div className="main">
                    <div className="tileImage">
                        <div className="imageClass">
                            <img src={details.restaurant_thumb} alt="" />
                        </div>
                    </div>
                    <div className="tileContent">
                    <div className="content">
                        <h1>{details.restaurant_name}</h1>
                        <span id="cfeedback">231 Customers Rating Average</span>
                            <h3>Old Price <del>Rs. 450</del></h3>
                            <h3>Offer Price Rs. {details.cost}</h3>
                            <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                            <div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/wJvrhYg/veg.png" alt=""/>
                                </div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt=""/>
                                </div>
                            </div>
                    </div>
                </div>
                <Tabs>
                    <TabList>
                        <Tab>About</Tab>
                        <Tab>Contact</Tab>
                    </TabList>

                    <TabPanel>
                     <h2>{details.restaurant_name}</h2>
                     <p>{details.restaurant_name} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, fuga.</p>
                    </TabPanel>
                    <TabPanel>
                     <h2>{details.address}</h2>
                     <h3>Contact: {details.contact_number}</h3>
                    </TabPanel>
                </Tabs>
                <Link to={`/Listing/${this.state.mealId}`} className="btn btn-danger">
                    Back
                </Link>&nbsp;
                <button className="btn btn-success" onClick={this.proceed}>
                    Proceed
                </button>
                <div className="col-md-12">
                    <center>
                        <h2>
                            Menu
                        </h2>
                    </center>
                    <MenuDisplay menudata={this.state.menuList}
                    finalOrder={(data) => {this.addToCart(data)}}/>
                </div>
                </div>
            </>
        )
    }
    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${base_url}/details/${restId}`)
        let menuResponse = await axios.get(`${base_url}/menu/${restId}`)
        this.setState({details:response.data[0],menuList:menuResponse.data})
    }
}
 
export default Details;