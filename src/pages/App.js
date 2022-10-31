import React from 'react';
import HomePage from './HomePage';
import Layout from 'Layout';

class App extends React.Component{
    render(){
        return(
            <Layout>
                <HomePage />
            </Layout>
        );
    }
}
export default App;