import { useEffect, useState } from 'react'

function App() {
  const [anime, setAnime] = useState('')
  const [search, setSearch] = useState('Naruto')
  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=30`)

    const resData = await res.json()
    setAnime(resData.data)
  }
  useEffect(() => {
    getData()
  }, [])

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
    </>
  )
}

export default App
