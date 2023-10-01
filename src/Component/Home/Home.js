import React from 'react';
import Search from './search';
import QuickSearch from './QuickSearch';
import Header from '../Header';
 
const Home = () => {
    return(
        <div>
            <Header />
            <Search/>
            <QuickSearch/>
        </div>
    )

}

export default Home;