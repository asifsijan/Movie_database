import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';


import './App.css';
//const GET_ALL = "https://api.themoviedb.org/4/list/7096014?page=1&api_key=4275cf25831de3b150d6ae572b31a179";
const GET_ALL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=4275cf25831de3b150d6ae572b31a179";
const GET_IMG = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=4275cf25831de3b150d6ae572b31a179&query=";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(10);



  useEffect(() => {
    fetch(GET_ALL)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.results);
      });
  },[]);


const handleOnSubmit = (e) => {
  e.preventDefault();

  fetch(SEARCH_API+searchTerm)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.results);
      });
}

const handleOnChange = (e) => {
  setSearchTerm(e.target.value);
}




  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>

      <div className="item-counter">
            
           <button onClick={() => setPostsPerPage(5)}>
            5
          </button>
          <button onClick={() => setPostsPerPage(10)}>
            10
          </button>
          <button onClick={() => setPostsPerPage(20)}>
            20
          </button>
      </div>

     <form onSubmit={handleOnSubmit}>  
        <div className="search-bar">
            <input className="search" name="s" type="text" placeholder="search......" value={searchTerm} onChange= {handleOnChange} required/>
        </div>     
     </form>
       
      
      
      <Posts posts={currentPosts} loading={loading} />

          <div className="paginate-group">
            

              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
              />
          </div>
    </div>
  );
};

export default App;
