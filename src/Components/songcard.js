import React from 'react'

export default function songcard({ song, index }) {
    return (
        <div key={index} className='bg-gray-400 rounded p-4'>
            <img src={song.img_url} alt={song.title} className="w-full h-32 object-cover mb-4" />
            <h2 className="text-lg font-bold mb-2">{song.title}</h2>
            <p className="text-sm text-gray-800">{song.artist}</p>
        </div>
    )
}
