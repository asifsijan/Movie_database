import React from 'react';
import { useState, useEffect} from "react";
import Modal from 'react-modal'

const GET_IMG = "https://image.tmdb.org/t/p/w1280";

const Posts = ({ posts, loading }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
//const [mTitle, setMTitle] = useState('');
  const [input, setInput] = useState({
    title: '',
    img: '',
    runtime: '',
    vote_average: '',
    overview: '',
    original_language: '',
    release_date: '',
    vote_count: '',

  });



  if (loading) {
    return <h2>Loading...</h2>;
  }


  return (
    <div className='movie'>

     <section className="content-section">

       <div className="container">

        <div className="row">

          {posts.map(post => (


            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">

              <div onClick={() =>{ setModalIsOpen(true); setInput({
                title: post.title,
                img: GET_IMG + post.poster_path,
                runtime: post.runtime,
                vote_average: post.vote_average,
                overview: post.overview,
                original_language: post.original_language,
                release_date: post.release_date,
                vote_count: post.vote_count,
                })}}>



              <div key={post.id} className=''>



                {/* <img src={GET_IMG + post.poster_path}/> */}
                {/* {post.title} */}

                <div className="video-thumb light">
                  <figure className="video-image"> <a href="#"><img src={GET_IMG + post.poster_path}/></a>
                  <div className="circle-rate">
                    <svg className="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                      <circle className="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                      <circle className="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="100,100" cx="15" cy="15" r="14"></circle>
                    </svg>
                    <b>{post.vote_average}</b> </div>

                    <div className="hd">{post.original_language}</div>

                  </figure>
                  <div className="video-content"> 
                    <h3 className="name" name={post.title}><a href="#">{post.title}</a></h3>
                    <div className="age">{post.release_date.substring(0,4)}</div>


                  </div>

                </div>



              </div>
            </div>

            </div>


            ))}



          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
             style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }}
            >



            {/* <h1>{input.title}</h1> */}
            {/* <h1>{input.runtime}</h1> */}
            {/* <img src={input.img} /> */}

            <section className="content-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="movie-info-box">
                      <h2 className="name">{input.title} 
                      </h2>
                      <ul className="features">
                        <li>
                          <div className="rate">
                            <svg className="circle-chart" viewBox="0 0 30 30" width="40" height="40" fill="transparent"  xmlns="http://www.w3.org/2000/svg">
                              <circle className="circle-chart__background" stroke="#eee" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                              <circle className="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="100,100" cx="15" cy="15" r="14"></circle>
                            </svg>
                            <b>{input.vote_average}</b> TMDB SCORE </div>

                          </li>
                          <li>
                            <div className="year">{input.release_date.substring(0,4)}</div>
                          </li>
                          <li>
                            <div className="hd">1080 <b>HD</b></div>
                          </li>
                          <li>
                            <div className="tags">Romance, Action</div>
                          </li>
                        </ul>
                        <p className="description">{input.overview}</p>



                      </div>

                    </div>

                    <div className="col-lg-4">
                      <div className="movie-side-info-box">
                        <figure><img src={input.img} /></figure>
                        <ul>
                          <li><strong>Release Date: </strong> {input.release_date}</li>
                          <li><strong>Vote Count:</strong> {input.vote_count}</li>
                          <li><strong>Language:</strong> {input.original_language}</li>

                        </ul>
                      </div>

                    </div>

                  </div>

                </div>

              </section>



            </Modal>








          </div>
        </div> 
      </section>


      </div>
      );
};

export default Posts;
