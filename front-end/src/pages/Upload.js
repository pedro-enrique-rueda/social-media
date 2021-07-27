import React, {useState} from 'react'
import './upload.css';
import Axios from'axios';

function Upload() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState([]);
    

    const upload = () => {
        Axios.post("http://localhost:3001/user/upload",{
                title: title, 
                description: description,
                image: image[0]
            }).then((response)=>{
            console.log("image saved");
        });
    }

    return (
        <div className="Upload">
            <h1>Create A Post</h1>
            <div className="UploadForm">
                <input 
                    type="text" 
                    placeholder="Title ..."  
                    onChange={(event)=>{
                        setTitle(event.target.value)
                    }}

                />
                <input 
                    type="text" 
                    placeholder="Description" 
                    onChange={(event)=>{
                        setDescription(event.target.value)
                    }}  
                    
                />
                <input type="file" onChange={(e) => setImage(e.target.files)}/>
                <button onClick={upload}>Post Image</button>
                {/* <h5>{errorMessage}</h5> */}
            </div>

        </div>
    )
}

export default Upload
