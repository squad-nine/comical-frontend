import type { FC } from 'react'

type ComicGridCellProps = {
    image: string,
    name: string,
    issueNum: number
}

const ComicGridCell: FC<ComicGridCellProps> = ({ name, issueNum, image }) => {
  return (
    <div className="flex flex-col gap-2 bg-dots-pattern bg-dots-color shadow-hard-border border-black p-3">
        <img src={image} alt={name} />
        <h2 className="text-3xl font-bangers tracking-wide text-white text-outline-black">{name}#{issueNum}</h2>
    </div>
  )
}
export default ComicGridCell