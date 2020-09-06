import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import  FirstSection  from '../firstSection';
import './home.css';
import SecondSection from '../secondSection';
import NewsSection from '../newsSection';
import firebase from 'firebase/app';
import 'firebase/database';
import { useState } from 'react';

const Home = (props) => {
    const [posts, setPosts] = useState([]);
    console.log(posts)
    useEffect(() => {
        firebase.database().ref("posts").on("value", snapshot => {
           setPosts(Object.values(snapshot.toJSON()))
        })
        return () => {
            
        }
    }, [])
    const postFirstSection = posts.slice(0, 3);   
    const postSecondSection = posts.slice(3);   
    return (
        <div className="container">            
            <FirstSection posts={postFirstSection} />
            <SecondSection posts={postSecondSection} />
            <NewsSection />
        </div>    
    )
}

const mapStateToProps = (store) => {
    console.log(store)
    return {
       posts: store.posts
    }
}

export default connect(mapStateToProps, null)(Home);