import React,{Component} from 'react';
import axios from 'axios'

const Url="http://3.17.216.66:4000/filter"

class CuisineFilter extends Component{

    cuisineFilter = (event) => {
        let mealId= this.props.mealId;
        let cuisineId = event.target.value;
        let cuisineUrl = "";
        if(cuisineId ===""){
            cuisineUrl = `${Url}/${mealId}`
        }
        else{
            cuisineUrl = `${Url}/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(cuisineUrl)
            .then((res) => {this.props.restPerCuisine(res.data)})
    }
    render(){
        return(
            <>
                <center><h3>Cuisine Filter</h3></center>
                <div style={{marginLeft:'15%'}} onChange={this.cuisineFilter}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="2"/>North Indian
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="3"/>South Indian
                    </label> 
                    <label className="radio">
                        <input type="radio" name="cuisine" value="4"/>Chinese
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="5"/>Fast Food
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="5"/>Street Food
                    </label>
                </div>
            </>
        )
    }
}

export default CuisineFilter;