import React,{Component} from 'react'
import './search.css';

const base_url = "http://3.17.216.66:4000";
// const restUrl = "http://3.17.216.66:4000/restaurant?stateId=1"

class Search extends Component{

    constructor(){
        super()

        this.state={
            location:'',
            restData:''
        }
       // console.log("inside constructor>>>")
    }


    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        }
    } 

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <option value={this.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    handleRest = (event) => {
        console.log(">>>props>>",this.props)
        this.props.history.push(`/details?restId=${event.target.value}`)
    }

    handleCity = (event) => {
        let stateId = event.target.value;
        fetch(`${base_url}/restaurant?stateId=${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restData:data})
    })
}

    render(){
        console.log("inside render>>>")
        return(
            <div id="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find Best Place Near You
                </div>
                <div class="dropdown">
                    <select onChange={this.handleCity}>
                        <option>----SELECT YOUR CITY----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select id="restDrop" >
                        <option>
                            ----SELECT YOUR RESTAURANTS----
                        </option>
                        {this.renderRest(this.state.restData)}
                    </select>
                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log("inside componentDidMount>>>")
        fetch(`${base_url}/location`,{method: 'GET'})
        // return promise
        .then((res) => res.json())
        // return data
        //console.log(data)
        .then((data) => {
            this.setState({location:data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
}


export default Search;






// import React,{useState,useEffect} from 'react'
// import './search.css';

// const base_url = "http://3.17.216.66:4000";
// // const restUrl = "http://3.17.216.66:4000/restaurant?stateId=1"

// function Search(){

//     const [location,setlocation] = useState('')
//     const [restData,setrestData] = useState('')

//     useEffect(() => {
//         fetch(`${base_url}/location`,{method:'GET'})
//         .then((res) => res.json())
//         .then((data) => {
//             setlocation(data)
//         })
//     },[])

//     const  renderCity = (data) => {
//         if(data){
//             return data.map((item) => {
//                 return(
//                     <option value={item.state_id} key={item.state_id}>
//                         {item.state}
//                     </option>
//                 )
//             })
//         }
//     } 

//     const renderRest = (data) => {
//         if(data){
//             return data.map((item) => {
//                 return (
//                     <option value={this.restaurant_id} key={item.restaurant_id}>
//                         {item.restaurant_name} | {item.address}
//                     </option>
//                 )
//             })
//         }
//     }

//     const handleCity = (event) => {
//         let stateId = event.target.value;
//         fetch(`${base_url}/restaurant?stateId=${stateId}`,{method:'GET'})
//         .then((res) => res.json())
//         .then((data) => {
//             setrestData(data)
//         })
//     }

//     return(
//         <>
//             <div id="search">
//                 <div id="logo">
//                     <span>D!</span>
//                 </div>
//                 <div id="heading">
//                     Search Place near to you
//                 </div>
//                 <div id="dropdown">
//                     <select onChange={handleCity}>
//                         <option>
//                             ---select City---
//                         </option>
//                         {renderCity(location)}
//                     </select>
//                 <select className='restSelect'>
//                     <option value="">
//                         ---select Restaurants---
//                     </option>
//                         {renderRest(restData)}
//                 </select>
//                 </div>
//             </div>
//         </>
//     )
// }


// export default Search;




