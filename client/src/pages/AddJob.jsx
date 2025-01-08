import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";

const AddJob = () => {

    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('Bangalore')
    const [category, setCategory] = useState('Programming')
    const [level, setLevel] = useState('Beginner level')
    const [salary, setSalary] = useState(0)

    const editorRef = useRef(null)
    const quillRef = useRef(null)

    useEffect(() => {
        // init quill only once

        if(!quillRef.current && editorRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow'
            })
        }
    }, [])

    return <form>
        <div>
            <p>Job Title</p>
            <input onChange={e => setTitle(e.target.value)} value={title} type="text" placeholder="Type here" required/>
        </div>

        <div>
            <p>Job Description</p>
            <div ref={editorRef}>

            </div>
        </div>

        <div>
            <div>
                <p>Job Category</p>
                <select onChange={e => setCategory(e.target.value)}>
                    {JobCategories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div>
                <p>Job Location</p>
                <select onChange={e => setLocation(e.target.value)}>
                    {JobLocations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                    ))}
                </select>
            </div>
            <div>
                <p>Job Level</p>
                <select onChange={e => setLevel(e.target.value)}>
                   <option value="Beginner level">Beginner level</option>
                   <option value="Intermediate level">Intermediate level</option>
                   <option value="Senior level">Senior level</option>
                </select>
            </div>
        </div>
    </form>;
  };
  
  export default AddJob;
  