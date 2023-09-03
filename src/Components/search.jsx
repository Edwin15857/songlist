import React from 'react'
import SongCard from './songcard'
import SearchIcon from '../../public/search.svg'


export const Search = ({ list }) => {
    const [searchTerm, setsearchTerm] = React.useState("")

    let filterByArtistOrSongName = list.filter((song) => {
        return song.artist.match(searchTerm) || song.title.match(searchTerm)
    })

    return (
        <>
            <div className='rounded-md border-none bg-[#1f2123] max-[600px]:w-[100%] sm:w-[50%] md:w-[50%] lg:w-[40%] px-4 py-4 mx-auto mb-8 align-middle justify-center flex'>
                <input className="outline-none rounded-md pr-4 bg-inherit flex-1 text-white" placeholder={"搜索歌手或歌曲..."} value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)}></input>
                <img className="inline h-7 w-7" src={SearchIcon.src} alt="search" onClick={() => { setsearchTerm(searchTerm) }} />
            </div>

            {
                filterByArtistOrSongName?.length > 0 ? (
                    <div className='text-xl  text-white flex flex-wrap justify-center gap-4 ml-4 mr-4 mb-10'>{filterByArtistOrSongName.map((song, index) => (
                        <SongCard song={song} index={index} />
                    ))}</div>) : (
                    <div className='text-xl  text-white flex flex-wrap justify-center gap-4 ml-4 mr-4 mb-10'>{list.map((song, index) => (
                        <SongCard song={song} index={index} />
                    ))}</div>
                )
            }
        </>
    )
}
