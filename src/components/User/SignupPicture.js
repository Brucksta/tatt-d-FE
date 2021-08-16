import { useMutation } from '@apollo/client';
import React, {useState, useRef} from 'react';
import { UPLOAD_FILE } from '../../api/mutations';

const UploadProfilePic = () => {
  const [mutate ] = useMutation(UPLOAD_FILE)
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);
  const optionsRef = useRef(null);
  const submit = async () => {
    if (!file) {
        return
      }
      console.log(`Uploading ${file.name}.`)
    console.log(optionsRef.current.value)
    const fileResponse = await mutate({variables: {file, tattooType: optionsRef.current.value}});
    console.log(`Sucessfully uploaded ${fileResponse.data.singleUpload.filename}`);
    setFile(null);
    inputRef.current.value = "";
  }
  const updateFile = ({target: {files:[inputFile]}}) => {
    setFile(inputFile || null);
    console.log(inputFile.name)
  }

  return (
    
    <div className="container mt-20 flex justify-center">
      <form>
      <h1>Upload a display picture!</h1>
      <label for="option"></label>
      <select ref={optionsRef} name="option">
      <option value="profilePicture"></option>
      </select>
      <br />
      <input ref={inputRef} type="file" onChange={updateFile} />
      <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
};

export default UploadProfilePic