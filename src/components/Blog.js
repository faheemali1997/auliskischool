import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Pricing from '../components/pricing/Pricing'
import Album from '../components/album/Album'

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Route path="/" exact component={Album} />
                <Route path="/new-post" component={Pricing} />
            </div>
        );
    }
}

export default Blog;