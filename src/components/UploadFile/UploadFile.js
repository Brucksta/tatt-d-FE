import { useMutation } from "@apollo/client";
import { SINGLE_UPLOAD } from "../../api/mutations";

const UploadFile = () => {
  const [mutate, { loading, error }] = useMutation(SINGLE_UPLOAD);
  const onChange = ({
    target: {
      validity,
      files: [file],
    },
  }) => validity.valid && mutate({ variables: { file } });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

  return <input type="file" required onChange={onChange} />;
};

export default UploadFile;
