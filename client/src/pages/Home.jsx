import React, { useState, useEffect } from 'react';

import { Loader, Card, FormField } from '../components';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allposts, setAllPosts] = useState([null]);

  return (
    <section className='max-w-7xl mx-auto'>
        <div>
            <h1>The Community</h1>
        </div>
    </ section>
  );
}

export default Home;
