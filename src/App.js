import { useEffect, useState } from 'react'
import { AnimeList } from './components/AnimeList'

function App() {
  const [anime, setAnime] = useState('')
  const [search, setSearch] = useState('Naruto')
  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=30`,
    )

    const resData = await res.json()
    setAnime(resData.data)
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
        <div className="anime-info"></div>
        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeList />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
