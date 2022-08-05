import { useEffect, useState, CSSProperties } from 'react'
import PacmanLoader from "react-spinners/PacmanLoader"
import { Link } from 'react-router-dom'
import ComicGridCell from '@components/ComicGridCell'
import NewComic from '@components/NewComic'
import SignoutButton from '@components/SignoutButton'
import axios from 'axios'

type Comic = {
    _id: string,
    image: string,
    name: string,
    issueNum: number
}

const override: CSSProperties = {
    display: "block",
    margin: 1,
    borderColor: "red",
    boxShadow: "8px 8px 15px 5px #888888"
  };

const Comics = () => {

    const [ comics, setComics ] = useState<Comic[]>([])

    useEffect(() => {
        axios.get<Comic[]>('/api/comics/')
          .then(({ data }) =>{
             setComics(data)
             setLoading(false)
         })
    }, [])

    const addComic = (created: Comic) => {
        setComics([ ...comics, created ])
    }

    let [loading, setLoading] = useState(true);
    let[color, setColor] = useState("#d9ed04");

    return (
        
        <div className="bg-blue-300 w-screen min-h-screen flex flex-col items-center justify-center p-2">
            <SignoutButton />
                    {loading && <div className=" border-solid outline-black sweet-loading fixed  h-screen w-screen z-10 bg-opacity-50 bg-gray-500 grid place-items-center top-0 ">
                    <PacmanLoader color={color} loading={loading} speedMultiplier={1} cssOverride={override} size={55} />
                </div>  }
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 p-6 bg-blue-300">
                { comics && comics.map(({ _id: id, ...comic}) => (
                      <Link to={`/comics/${id}`} key={id}>
                        <ComicGridCell {...comic} />
                      </Link>
                ))}
                <NewComic onCreate={addComic}/>
            </div>
        </div>
    )
}
export default Comics