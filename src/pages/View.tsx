import { useState } from 'react'
import { useToggle } from 'react-use'
import { Formik, Form, Field } from 'formik'
import TextField from '@components/Fields/Text'

type ViewState = {
    image: string,
    name: string,
    issueNum: number
}

const View = () => {
    const [ state, setState ] = useState<ViewState>({
        image: "https://comicvine.gamespot.com/a/uploads/scale_small/0/4/18-1433-17-1-spy-cases.jpg",
        issueNum: 13,
        name: "Spy Cases"
    })

    const [ editing, toggleEditing ] = useToggle(false)

    return (
        <div className="h-full flex items-center justify-center bg-blue-300">
            <div className="flex flex-col md:flex-row gap-2 bg-dots-pattern bg-dots-color shadow-hard-border border-black p-3">
                <img src={state.image} alt={state.name} />
                <Formik initialValues={state} onSubmit={console.log}>
                    {() => (
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
                            <button onClick={toggleEditing} className="w-full hover:opacity-90 bg-hero-red ring-4 ring-inset ring-hero-yellow border-2 border-hero-red py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-lg md:text-2xl f-f-p transition-opacity">Edit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default View