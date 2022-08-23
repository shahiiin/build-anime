import React from 'react'

export const AnimeList = ({ animelist }) => {
  return (
    <>
      {animelist
        ? animelist.map((anime, index) => {
            return (
              <div className="card">
                <img
                  src="https://cdn.myanimelist.net/images/anime/6/77678.jpg"
                  alt="avatar"
                />
                <div className="anime-info">
                  <h1>Naruto</h1>
                </div>
              </div>
            )
          })
        : 'Not Found'}
    </>
  )
}
