import axios from 'axios';
import MovieCard from './components/Moviecard';
import { FaSearch } from "react-icons/fa"
import { useState, useEffect } from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import './App.css';

function App() {
  const [usersearch, updateUsersearch] = useState("");
  const [showsData, updateShowsData] = useState();
  const [displayData, updateDisplayData] = useState();
  const [labelShows, updatelabelShows] = useState('FEATURED SHOWS')
  


  const fetchTvShowsapi = async (string) => {
    try {
      const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${string}`)
      const apiData = res.data;
      updateShowsData(apiData);
      updateDisplayData(apiData);
      // console.log(apiData);
    } catch (e) {
      console.log("error ", e)
    }
  }


  useEffect(() => {
    fetchTvShowsapi('arrow')

  }, [])

 
  const search = (e) => {
    updateUsersearch(e.target.value)
  }

  const showsearch = (e) => {
    e.preventDefault();
    fetchTvShowsapi(usersearch)
  }

  // const mostpopular = () => {
  //   updateShows(shows.filter((show)=> show.show.rating.average > 5.5))
  // }

const ratingLabel = (e) => {
  selectRating(e)
  labelprop(e)
}

const dateLabel = (e) => {
  selectRating(e)
  labelprop(e)
  selectDate(e)
}



  const selectRating = (e) => {
    if (e.target.value === 'Most Popular') {
      // updateDisplayData(showsData.filter((eachShow)=> eachShow.show.rating.average > 7.5))
      let popularshows = showsData.filter((eachShow) => eachShow.show.rating.average > 7.5);
      updateDisplayData(popularshows);
      



    }
    if (e.target.value === 'Least Popular') {
      // updateDisplayData(showsData.filter((eachShow)=> eachShow.show.rating.average < 6.5))
      let leastshows = showsData.filter((eachShow) => eachShow.show.rating.average < 7.5);
      updateDisplayData(leastshows);

    }


  }

  const selectDate = (e) => {
    if (e.target.value === 'New Shows') {
      let newshows = showsData.filter((eachShow) => eachShow.show.premiered >= '2020') ;
      updateDisplayData(newshows);
    }
    if (e.target.value === 'Old Shows') {
      let oldshows = showsData.filter((eachShow) =>  eachShow.show.premiered < '2020');
      updateDisplayData(oldshows);

    }


  }

  const labelprop = (e) => {
    updatelabelShows(e.target.value)
  }



  return (
    <div>

      <div className="header-absolute"></div>
          <div className="header-main">
            <div className="header-content">
                <motion.div
                  initial={{
                     x:100,
                     opacity:0
                 }}
                 animate={{
                     x:0,
                     opacity:1,
                     transition: {
                         delay: 0.1
                     }

                 }}
                className="header-h1">
                  <h1>tvDiscovery</h1>
                </motion.div>
                <motion.div
                   initial={{
                    opacity:0
                }}
                animate={{
                    opacity:1,
                    transition: {
                        delay: 0.3
                    }
                }}
                className="header-form">
                  <form>
                    <input placeholder="Search..."onChange={search} value={usersearch} type="text" />
                    <button onClick={showsearch} type="submit"><FaSearch/></button>
                  </form>
                </motion.div>
            </div>
            </div>

     

      {/* <button onClick={mostpopular}>Click here for most popular</button> */}
      {/* <button onClick={newlyreleased}>Click here for new</button> */}
    <div className="middle-content">
      <motion.div 
         initial={{
          x:100,
          opacity:0
      }}
      animate={{
          x:0,
          opacity:1,
          transition: {
              delay: 0.1
          }

      }}
      className="featured"><h2>{labelShows}</h2></motion.div>
      <div className="select-wrap">
           <select className="selected"onChange={ratingLabel}>
        <option disabled selected value="">Check Rating</option>
        <option value="Most Popular">Most Popular</option>
        <option value="Least Popular">Least Popular</option>
      </select>

      <select className="selected" onChange={dateLabel}>
        <option disabled selected value="">Sort by Date</option>
        <option value="New Shows">New Shows</option>
        <option value="Old Shows">Old Shows</option>
      </select>

      
      </div>
   
    <div className="movie-container">
      {displayData ? (
        displayData.map((eachshow) => (
          <MovieCard showsData={showsData} displayData={displayData} eachshow={eachshow} key={eachshow.show.id} />
        ))
      ) : null}
      </div>
      </div>
      <div className="footer"><p>Yama Karimi</p></div>
    </div>
  );
}

export default App;
