import React, { useState } from 'react';
import Nav from './Nav';
import Title from './Title';
import axios from 'axios'

const Create = () => {
    const [state, setState] = useState({
        title: '',
        content: '',
        user: ''
    });
    const { title, content, user } = state;

    const handleChange = name => event => {
        // console.log('name', name, 'event', event.target.value);

        setState({ ...state, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // console.table({ title, content, user });
        axios
            .post(`${process.env.REACT_APP_API}/post`, { title, content, user })
            .then(response => {
                console.log(response);
                // empty state
                setState({ ...state, title: '', content: '', user: '' });
                // show sucess alert
                alert(`Post titled ${response.data.title} is created`);
            })
            .catch(error => {
                console.log(error.response);
                alert(error.response.data.error);
            });
    };

    console.log(state)
    return (
        <div className="container p-5">
            <Title name="create blog post" subTitle="my comment" />
            <h1>CREATE POST</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input type="text" className="form-control" placeholder="Post title" required onChange={handleChange('title')} value={title} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Content</label>
                    <textarea type="text" className="form-control" placeholder="Write something.." required onChange={handleChange('content')} value={content} />
                </div>
                <div className="form-group">
                    <label className="text-muted">User</label>
                    <input type="text" className="form-control" placeholder="Your name" required onChange={handleChange('user')} value={user}/>
                </div>
                <div>
                    <button className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    );
    
}


export default Create;