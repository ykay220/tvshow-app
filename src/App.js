import axios from 'axios';
import MovieCard from './components/Moviecard';
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
      console.log(apiData);
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

  const selectHandler = (e) => {
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




  return (
    <div>
      <h1>SEARCH FOR SHOWS THAT HAVE A CERTAIN TITLE</h1>
      <form><input onChange={search} value={usersearch} type="text" />
        <button onClick={showsearch} type="submit">Search</button></form>

      <select onChange={selectHandler}>
        <option value="">Select</option>
        <option value="popular">Most Popular</option>
        <option value="least">Least Popular</option>
      </select>

      {/* <button onClick={mostpopular}>Click here for most popular</button> */}
      {/* <button onClick={newlyreleased}>Click here for new</button> */}
      {displayData ? (
        displayData.map((eachshow) => (
          <MovieCard eachshow={eachshow} key={eachshow.show.id} />
        ))
      ) : null}
    </div>
  );
}

export default App;
