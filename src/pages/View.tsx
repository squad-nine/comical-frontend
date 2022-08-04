import { useState, useEffect,} from 'react'
import { useToggle } from 'react-use'
import { useParams, useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import TextField from '@components/Fields/Text'
import axios from 'axios'
import DeleteButton from '@components/DeleteButton'


type ViewState = {
  image: string;
  name: string;
  issueNum: number;
};

type ViewRouteParams = {
    id: string
}

const View = () => {

    const { id } = useParams<ViewRouteParams>()

    const [ state, setState ] = useState<ViewState>({
        image: "",
        issueNum: 0,
        name: ""
    })

    useEffect(() => {
        axios.get<ViewState>(`/api/comics/${id}`)
            .then(({ data }) => {
                setState(data)
                setLoading(false)
            })
    }, [])

    const [ editing, toggleEditing ] = useToggle(false)
    const [ loading, setLoading ] = useState(true)
    const goToWiki = () => {
      window.open("https://en.wikipedia.org/wiki/"+state.name,"_blank")
    }

    const editButtonClick = (submitFunc: Function) => {
        if(editing) {
            submitFunc()
        }
        toggleEditing()
    }
    const navigate = useNavigate();
    
    
        
    
  
 
    return (
        <div className="h-full flex items-center justify-center bg-blue-300">
            <div className="flex flex-col md:flex-row gap-2 bg-dots-pattern bg-dots-color shadow-hard-border border-black p-3">
                <img src={state.image} alt={state.name} />
                { !loading && (
                    <Formik initialValues={state} onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true)
                        axios.patch<ViewState>(`/api/comics/${id}`, values)
                            .then(({ data }) => {
                                setState(data)
                                setSubmitting(false)
                            })
                    }}>
                    {({ isSubmitting, submitForm }) => (
                        <Form className="font-bangers text-white text-3xl">
                            { editing ? (
                                <>
                                    <Field as={TextField} name="name" />
                                    <Field as={TextField} name="issueNum" placeholder="Issue Number" />
                                </>
                            ) : (
                                <>
                                    <h2 className="text-3xl font-bangers tracking-wide text-white text-outline-black">Name</h2>
                                    <h2 className="text-2xl font-bangers tracking-wide text-white text-outline-black">{state.name}</h2>
                                    <h2 className="text-3xl font-bangers tracking-wide text-white text-outline-black">Issue Number</h2>
                                    <h2 className="text-2xl font-bangers tracking-wide text-white text-outline-black">{state.issueNum}</h2>
                                </>
                            )}
                            
                            <button
                onClick={() => goToWiki()}
                className="w-full hover:opacity-90 bg-hero-red ring-4 ring-inset ring-hero-yellow border-2 border-hero-red py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-lg md:text-2xl f-f-p transition-opacity"
              >
                View Page
              </button>
                            <button disabled={isSubmitting} type="button" onClick={() => editButtonClick(submitForm)} className="w-full hover:opacity-90 bg-hero-red ring-4 ring-inset ring-hero-yellow border-2 border-hero-red py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-lg md:text-2xl f-f-p transition-opacity">{ editing ? 'Save Changes' : 'Edit'}</button>
                            <DeleteButton docId={id!} />
                            <>
          
                            <button onClick={()=>navigate("/comics")} className="w-full hover:opacity-90 bg-hero-red ring-4 ring-inset ring-hero-yellow border-2 border-hero-red py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-lg md:text-2xl f-f-p transition-opacity">Back</button>
                            </>
                        </Form>
                    )}
                    </Formik>)
                }
            </div>
        </div>
    )
}
export default View
