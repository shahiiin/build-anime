import React from 'react'

export const AnimeList = ({ animelist }) => {
  return (
    <>
      {animelist
        ? animelist.map((anime, index) => {
            return (
              <div className="card" key={index}>
                <img
                  src="https://cdn.myanimelist.net/images/anime/6/77678.jpg"
                  alt="avatar"
                />
                <div className="animeInfo">
                  <h4>Naruto</h4>
                </div>
              </div>
            )
          })
        : 'Not Found'}
    </>
  )
}
