import { useEffect, useState } from 'react'
import AddToList from './components/AddToList'
import { AnimeInfo } from './components/AnimeInfo'
import { AnimeList } from './components/AnimeList'
import { RemoveList } from './components/RemoveList'

function App() {
  const [anime, setAnime] = useState('')
  const [search, setSearch] = useState('Naruto')
  const [animeInfo, setAnimeInfo] = useState()
  const [myAnimeList, setMyAnimeList] = useState([])

  const addTo = (anime) => {
    const newArray = [...myAnimeList, anime]
    setMyAnimeList(newArray)
  }
  const RemoveFrom =(anime)=>{
    const newArray = myAnimeList.filter((myanime)=>{
      return myanime.mal_id !== anime.mal_id
    })
    setMyAnimeList(newArray)
  }

  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=30`,
    )

    const resData = await res.json()
    setAnime(resData.data)
    console.log(resData.data)
  }
  useEffect(() => {
    getData()
  }, [search])

  return (
    <>
      <div className="header">
        <h1>My Anime list</h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="search you are anime"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="container">
        <div className="animeInfo">
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>
        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeList
              animelist={anime}
              setAnimeInfo={setAnimeInfo}
              animeComponent={AddToList}
              HandleList={(anime) => addTo(anime)}
            />
          </div>
          <h2 className="text-heading">My List</h2>
          <div className="row">
            <AnimeList
              animelist={myAnimeList}
              setAnimeInfo={setAnimeInfo}
              animeComponent={RemoveList}
              HandleList={(anime) => RemoveFrom(anime)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
