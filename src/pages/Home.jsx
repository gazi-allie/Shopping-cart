import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../components/Product';
import { Spinner } from '../components/Spinner';

const Home = () => {
  const API_URL = 'http://fakestoreapi.com/products';
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  // Fetching data from API on component mount and update whenever data changes
  async function fetchProductData() {

    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching data', error);
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className='grid grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className='flex justify-center items-center' >
          <p> No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
