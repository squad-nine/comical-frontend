import { useState, type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

type DeleteButtonProps = {
    onDelete?: (docId: string) => void
    docId: string
}

enum DeleteProgression {
    INITIAL,
    CONFIRMING
}

const DeleteButton: FC<DeleteButtonProps> = ({ docId, onDelete }) => {

    const navigate = useNavigate()

    const [ progression, setProgression ] = useState<DeleteProgression>(DeleteProgression.INITIAL)

    const handleClick = () => {
        switch(progression) {
            case (DeleteProgression.INITIAL):
                setProgression(DeleteProgression.CONFIRMING)
                setTimeout(() => setProgression(DeleteProgression.INITIAL), 5000)
                break
            case (DeleteProgression.CONFIRMING):
                axios.delete(`/api/comics/${docId}`)
                    .then(() => {
                        if(typeof onDelete === 'function') {
                            onDelete(docId)
                        }
                        navigate('/comics')
                    })
                break
        }
    }

    return (
        <button type="button" onClick={handleClick} className="w-full hover:opacity-90 bg-hero-red ring-4 ring-inset ring-hero-yellow border-2 border-hero-red py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-lg md:text-2xl f-f-p transition-opacity">
            { progression === DeleteProgression.INITIAL ? 'Delete' : 'Confirm?'}
        </button>
    )
}
export default DeleteButton