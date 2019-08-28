import React from 'react';

import './assets/style/App.css';

import Header from './components/Header';
import PostList from './components/PostList';

function App() {
    return (
        <>
            <Header />
            <PostList />
        </>
    );
}

export default App;