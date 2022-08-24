import React from 'react'

export const AnimeList = ({ animelist }) => {
  return (
    <>
      {animelist
        ? animelist.map((anime, index) => {
            return (
              <div className="card" key={index}>
                <img
                  src={anime.images.jpg.large_image_url}
                  alt="avatar"
                />
                <div className="animeInfo">
                  <h4>{anime.title}</h4>
                </div>
              </div>
            )
          })
        : 'Not Found'}
    </>
  )
}
