import axios from 'axios';
import MovieCard from './components/Moviecard';
import { FaSearch } from "react-icons/fa"
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [usersearch, updateUsersearch] = useState("");
  const [showsData, updateShowsData] = useState();
  const [displayData, updateDisplayData] = useState();
  


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

  const selectRating = (e) => {
    if (e.target.value === 'popular') {
      // updateDisplayData(showsData.filter((eachShow)=> eachShow.show.rating.average > 7.5))
      let popularshows = showsData.filter((eachShow) => eachShow.show.rating.average > 7.5);
      updateDisplayData(popularshows);



    }
    if (e.target.value === 'least') {
      // updateDisplayData(showsData.filter((eachShow)=> eachShow.show.rating.average < 6.5))
      let leastshows = showsData.filter((eachShow) => eachShow.show.rating.average < 7.5);
      updateDisplayData(leastshows);

    }


  }

  const selectDate = (e) => {
    if (e.target.value === 'new') {
      let newshows = showsData.filter((eachShow) => eachShow.show.premiered >= '2020') ;
      updateDisplayData(newshows);
    }
    if (e.target.value === 'old') {
      let oldshows = showsData.filter((eachShow) =>  eachShow.show.premiered < '2020');
      updateDisplayData(oldshows);

    }


  }



  return (
    <div>

      <div className="header-absolute"></div>
          <div className="header-main">
            <div className="header-content">
                <div className="header-h1">
                  <h1>tvDiscovery</h1>
                </div>
                <div className="header-form">
                  <form>
                    <input placeholder="Search..."onChange={search} value={usersearch} type="text" />
                    <button onClick={showsearch} type="submit"><FaSearch/></button>
                  </form>
                </div>
            </div>
            </div>

     

      {/* <button onClick={mostpopular}>Click here for most popular</button> */}
      {/* <button onClick={newlyreleased}>Click here for new</button> */}
    <div className="middle-content">
      <div className="select-wrap">
           <select className="selected"onChange={selectRating}>
        <option disabled selected value="">Check Rating</option>
        <option value="popular">Most Popular</option>
        <option value="least">Least Popular</option>
      </select>

      <select className="selected"onChange={selectDate} >
        <option disabled selected value="">Sort by Date</option>
        <option value="new">New</option>
        <option value="old">Old</option>
      </select>

      
      </div>
   
    <div className="movie-container">
      {displayData ? (
        displayData.map((eachshow) => (
          <MovieCard displayData={displayData} eachshow={eachshow} key={eachshow.show.id} />
        ))
      ) : null}
      </div>
      </div>
    </div>
  );
}

export default App;
