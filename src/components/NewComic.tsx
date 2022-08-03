import type { FC } from 'react'
import { useToggle } from 'react-use'
import { Formik, Form, Field } from 'formik'
import TextField from '@components/Fields/Text'
import axios from 'axios'

type Comic = {
    _id: string,
    image: string,
    name: string,
    issueNum: number
}

type NewComicProps = {
    onCreate: (created: Comic) => void
}

const NewComic: FC<NewComicProps> = ({ onCreate }) => {

    const [ collapsed, toggleCollapsed ] = useToggle(true)

    return collapsed 
    ? (
        <div className="flex flex-col items-center justify-center">
            <button className="bg-hero-red font-bangers tracking-wider text-white text-4xl p-2 border-b-8 border-black hover:border-b-2" onClick={toggleCollapsed}>Add a new comic</button>
        </div>
    ) : (
        <div className="flex flex-col gap-2 bg-dots-pattern bg-dots-color shadow-hard-border border-black p-3">
            <h2 className="text-3xl font-bangers tracking-wide text-white text-outline-black">New Comic</h2>
            <Formik initialValues={{
                name: '',
                issueNum: ''
            }} onSubmit={async values => {
                const { data } = await axios.post<Comic>('/api/comics', values)
                onCreate(data)
                toggleCollapsed()
            }}>
                {({ values }) => (
                    <Form className="text-white font-bangers tracking-wide flex flex-col gap-3">
                        <Field name="name" type="text" as={TextField}/>
                        <Field name="issueNum" type="text" as={TextField} />
                        <button type="submit" className="bg-hero-red ring-4 ring-inset ring-hero-yellow border-2 border-hero-red py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-lg md:text-2xl f-f-p">Add</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default NewComic
