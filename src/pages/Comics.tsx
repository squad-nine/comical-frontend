import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ComicGridCell from '@components/ComicGridCell'
import NewComic from '@components/NewComic'

type Comic = {
    image: string,
    name: string,
    issueNum: number
}

const Comics = () => {

    const [ comics, setComics ] = useState<Comic[]>()

    useEffect(() => {
        // TODO: Make this fetch from API
        setComics([{
            image: "https://comicvine.gamespot.com/a/uploads/scale_small/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
            issueNum: 13,
            name: "Chamber of Chills"
        },
        {
            image: "https://comicvine.gamespot.com/a/uploads/scale_small/0/4/17-1497-16-1-journey-into-mystery.jpg",
            issueNum: 3,
            name: "Journey into Mystery"
        },
        {
            image: "https://comicvine.gamespot.com/a/uploads/scale_small/0/4/18-1433-17-1-spy-cases.jpg",
            issueNum: 13,
            name: "Spy Cases"
          },
          {
            image: "https://comicvine.gamespot.com/a/uploads/scale_small/0/4/22-989-23-1-blackhawk.jpg",
            issueNum: 57,
            name: "Blackhawk"
          },
          {
            image: "https://comicvine.gamespot.com/a/uploads/scale_small/0/4/30-1283-31-1-marvel-tales.jpg",
            issueNum: 109,
            name: "Marvel Tales"
          },
          {
            image: "https://comicvine.gamespot.com/a/uploads/scale_small/0/4/31-1423-32-1-battle.jpg",
            issueNum: 13,
            name: "Battle"
          },
          {
            image: "https://comicvine.gamespot.com/a/uploads/scale_small/0/4/32-1172-33-1-lone-ranger-the.jpg",
            issueNum: 52,
            name: "The Lone Ranger"
          }
    ],)
    }, [])

    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 p-6 bg-blue-300">
            { comics && comics.map((c, i) => (
                  <Link to={`/comics/${i}`} key={i}>
                    <ComicGridCell {...c} />
                  </Link>
            ))}
            <NewComic />
        </div>
    )
}
export default Comics