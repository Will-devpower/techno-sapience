import React from 'react';
import './styles.css';


function PostDetail(props) {
    console.log(props)
    return (
        <div className="postContainer">
            <h1 className="postTitle">{props.location.state.title}</h1>
            <p className="postDescription">{props.location.state.creator}</p>
            <section className="socialNetworks">
                Social Icons here
            </section>
            <img
              src={props.location.state.image}
              alt=""
              className="postImage"
            />
            <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta similique eos cupiditate facere autem libero expedita aspernatur, excepturi accusantium quod quidem quaerat asperiores ratione dolorem possimus sit nam. Architecto, earum.</p>
            <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta similique eos cupiditate facere autem libero expedita aspernatur, excepturi accusantium quod quidem quaerat asperiores ratione dolorem possimus sit nam. Architecto, earum.</p>
            <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta similique eos cupiditate facere autem libero expedita aspernatur, excepturi accusantium quod quidem quaerat asperiores ratione dolorem possimus sit nam. Architecto, earum.</p>
            <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta similique eos cupiditate facere autem libero expedita aspernatur, excepturi accusantium quod quidem quaerat asperiores ratione dolorem possimus sit nam. Architecto, earum.</p>
            <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta similique eos cupiditate facere autem libero expedita aspernatur, excepturi accusantium quod quidem quaerat asperiores ratione dolorem possimus sit nam. Architecto, earum.</p>
            <img
              src={props.location.state.image}
              alt=""
              className="postImage"
            />
            <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta similique eos cupiditate facere autem libero expedita aspernatur, excepturi accusantium quod quidem quaerat asperiores ratione dolorem possimus sit nam. Architecto, earum.</p>
            <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta similique eos cupiditate facere autem libero expedita aspernatur, excepturi accusantium quod quidem quaerat asperiores ratione dolorem possimus sit nam. Architecto, earum.</p>
            <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta similique eos cupiditate facere autem libero expedita aspernatur, excepturi accusantium quod quidem quaerat asperiores ratione dolorem possimus sit nam. Architecto, earum.</p>
            <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta similique eos cupiditate facere autem libero expedita aspernatur, excepturi accusantium quod quidem quaerat asperiores ratione dolorem possimus sit nam. Architecto, earum.</p>
            <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta similique eos cupiditate facere autem libero expedita aspernatur, excepturi accusantium quod quidem quaerat asperiores ratione dolorem possimus sit nam. Architecto, earum.</p>
            <img
              src={props.location.state.image}
              alt=""
              className="postImage"
            />
            <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta similique eos cupiditate facere autem libero expedita aspernatur, excepturi accusantium quod quidem quaerat asperiores ratione dolorem possimus sit nam. Architecto, earum.</p>
            <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta similique eos cupiditate facere autem libero expedita aspernatur, excepturi accusantium quod quidem quaerat asperiores ratione dolorem possimus sit nam. Architecto, earum.</p>
            <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta similique eos cupiditate facere autem libero expedita aspernatur, excepturi accusantium quod quidem quaerat asperiores ratione dolorem possimus sit nam. Architecto, earum.</p>
            <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta similique eos cupiditate facere autem libero expedita aspernatur, excepturi accusantium quod quidem quaerat asperiores ratione dolorem possimus sit nam. Architecto, earum.</p>
            <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta similique eos cupiditate facere autem libero expedita aspernatur, excepturi accusantium quod quidem quaerat asperiores ratione dolorem possimus sit nam. Architecto, earum.</p>
            <img
              src={props.location.state.image}
              alt=""
              className="postImage"
            />
            <h1 style= {{color: "black", marginTop: "15px", marginBottom: "15px"}}>FOOTER HERE</h1>
        </div>  
    )
}




export default PostDetail;

