import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/addAction';
import './home.css'

const Home = (props) => {    
    return (
        <div className="container">
            
        </div>    
    )
}

const mapStateToProps = (store) => {
    console.log(store)
    return {
        products: store.products
    }
}

export default connect(mapStateToProps, { addToCart })(Home);