import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'

const Header = () => {
    return(
        <>
         <header>
            <div id="brand">
                developer funnel &nbsp; 
                <Link to="/" className='btn btn-info'>Home</Link>
             </div>

             <div id="social">
                <Link to="/" className='btn btn-success'>
                    <span className="glyphicon glyphicon-log-in"></span>LogIn
                </Link> &nbsp;
                <Link to="/" className='btn btn-danger'>
                    <span className="glyphicon glyphicon-user"></span>SignUp
                </Link>
             </div>
            </header>
        </>
    )
}

export default Header;


// -----------------------------------------



// import React,{Component} from 'react';
// import {Link,withRouter} from 'react-router-dom';
// import './header.css'

// const url = "http://3.17.216.66:5000/api/auth/userinfo"

// class Header extends Component{
//     constructor(props){
//         super(props)

//         this.state={
//             userData:''
//         }
//     }

//     handleLogout = () => {
//         sessionStorage.removeItem('ltk');
//         sessionStorage.removeItem('userInfo');
//         sessionStorage.removeItem('loginStatus','loggedOut');
//         this.setState({userData:''})
//         this.props.history.push('/')
//     }

//     conditionalHeader = () => {
//         if(this.state.userData.name){
//             let data=this.state.userData;
//             sessionStorage.setItem('userInfo',JSON.stringify(data));
//             sessionStorage.setItem('loginStatus','loggedIn');
//             // agar logged in hai to ye do button 
//             return(
//                 <>
//                     <Link to="/Login" className='btn btn-success'>
//                         <span className="glyphicon glyphicon-user">Hi {data.name}</span>LogIn
//                     </Link> &nbsp;
//                     <button onClick={this.handleLogout} className='btn btn-danger'>
//                         <span className="glyphicon glyphicon-log-out"></span>Logout
//                     </button>
//                 </>
//             )
//         }

//         else{
//             return(
//                 <>
//                     <Link to="/login" className='btn btn-success'>
//                         <span className="glyphicon glyphicon-log-in"></span>LogIn
//                     </Link> &nbsp;
//                     <Link to="/Register" className='btn btn-danger'>
//                         <span className="glyphicon glyphicon-log-out"></span>Signup
//                     </Link>
//                 </>
//             )
//         }
//     }

//     render(){
//         return(
//             <>
//              <header>
//                 <div id="brand">
//                     developer funnel &nbsp; 
//                     <Link to="/" className='btn btn-info'>Home</Link>
//                  </div>
    
//                  <div id="social">
//                     {this.conditionalHeader()}
//                     <Link to="/Login" className='btn btn-success'>
//                         <span className="glyphicon glyphicon-log-in"></span>LogIn
//                     </Link> &nbsp;
//                     <Link to="/Register" className='btn btn-danger'>
//                         <span className="glyphicon glyphicon-user"></span>SignUp
//                     </Link>
//                  </div>
//                 </header>
//             </>
//         )
//     }

//     componentDidMount(){
//         fetch(url,{
//             method:'GET',
//             headers:{
//                 'x-access-token':sessionStorage.getItem('ltk')
//             }
//         })
//         .then((res) => res.json())
//         .then((data) => {
//             this.setState({
//                 user:data
//             })
//         })
//     }
    
// }

// export default withRouter(Header);







// import React,{Component} from 'react';
// import {Link,withRouter} from 'react-router-dom';
// import './header.css'

// const url = "http://3.17.216.66:5000/api/auth/userinfo"

// class Header extends Component{
//     constructor(props){
//         super(props)

//         this.state={
//             userData:''
//         }
//     }

//     handleLogout = () => {
//         sessionStorage.removeItem('ltk');
//         sessionStorage.removeItem('userInfo');
//         sessionStorage.removeItem('loginStatus','loggedOut');
//         this.setState({userData:''})
//         this.props.history.push('/')
//     }

//     conditionalHeader = () => {
//         if(this.state.userData.name){
//             let data=this.state.userData;
//             sessionStorage.setItem('userInfo',JSON.stringify(data));
//             sessionStorage.setItem('loginStatus','loggedIn');
//             // agar logged in hai to ye do button 
//             return(
//                 <>
//                     <Link to="/Login" className='btn btn-success'>
//                         <span className="glyphicon glyphicon-user">Hi {data.name}</span>LogIn
//                     </Link> &nbsp;
//                     <button onClick={this.handleLogout} className='btn btn-danger'>
//                         <span className="glyphicon glyphicon-log-out"></span>Logout
//                     </button>
//                 </>
//             )
//         }

//         else{
//             return(
//                 <>
//                     <Link to="/login" className='btn btn-success'>
//                         <span className="glyphicon glyphicon-log-in"></span>LogIn
//                     </Link> &nbsp;
//                     <Link to="/Register" className='btn btn-danger'>
//                         <span className="glyphicon glyphicon-log-out"></span>Signup
//                     </Link>
//                 </>
//             )
//         }
//     }

//     render(){
//         return(
//             <>
//              <header>
//                 <div id="brand">
//                     developer funnel &nbsp; 
//                     <Link to="/" className='btn btn-info'>Home</Link>
//                  </div>
    
//                  <div id="social">
//                     {this.conditionalHeader()}
//                     <Link to="/Login" className='btn btn-success'>
//                         <span className="glyphicon glyphicon-log-in"></span>LogIn
//                     </Link> &nbsp;
//                     <Link to="/Register" className='btn btn-danger'>
//                         <span className="glyphicon glyphicon-user"></span>SignUp
//                     </Link>
//                  </div>
//                 </header>
//             </>
//         )
//     }

//     componentDidMount(){
//         fetch(url,{
//             method:'GET',
//             headers:{
//                 'x-access-token':sessionStorage.getItem('ltk')
//             }
//         })
//         .then((res) => res.json())
//         .then((data) => {
//             this.setState({
//                 user:data
//             })
//         })
//     }
    
// }

// export default withRouter(Header);