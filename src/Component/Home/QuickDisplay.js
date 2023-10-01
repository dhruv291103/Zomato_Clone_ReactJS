import React from 'react'
import './quickSearch.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData) {
            return mealData.map((item) => {
                return (
                    <Link to={`/listing/${item.mealtype_id}`} key={item._id}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt={item.mealtype}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.mealtype}
                                </div>
                                <div className="componentSubHeading">
                                    {item.content}
                                </div>
                                </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <>
            {listMeal(props)}
        </>
    )
    
}

export default QuickDisplay;