import { useEffect, useState } from 'react'

function App() {
  const [anime, setAnime] = useState('')

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=naruto&limit=30`)

    const resData = await res.json()
    setAnime(resData.data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  )
}

export default App
