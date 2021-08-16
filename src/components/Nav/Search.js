import React, { useState } from 'react'
import { Input } from 'antd';
import { useQuery } from '@apollo/client';
import { FIND_USER } from '../../api/queries';
import Autocomplete from '@material-ui/lab/Autocomplete';


 


export default function SearchFeature() {

const { data } = useQuery(FIND_USER);
 

const [open, setOpen] = React.useState(false);
const [options, setOptions] = React.useState([]);
const loading = open && options.length === 0;

React.useEffect(() => {
let active = true;

if (!loading) {
  return undefined;
}

(async () => {
  const response = await data
 
  const userList = await response.json();

console.log(userList)
  if (active) {
    setOptions(Object.keys(userList).map((key) => userList[key].item[0]));
  }
})();

return () => {
  active = false;
};
}, [loading]);

React.useEffect(() => {
if (!open) {
  setOptions([]);
}
}, [open]);

return (
    <div className="ml-10">
      <Autocomplete
  id="combo-box-demo"
  options={options}
  style={{ width: 300, }}
  renderInput={(params) => (
    <div ref={params.InputProps.ref}>
      <input style={{ width: 200 }} type="text" {...params.inputProps} />
    </div>)} />
  </div>
)
}


// const { Search } = Input;

// const GetUsers = async () => {
//     const response = await useQuery(FIND_USER)
//     return response.data
// }

// function SearchFeature(props) {

//     const [SearchTerms, setSearchTerms] = useState("")

//     const onChangeSearch = (event) => {
//         setSearchTerms(event.currentTarget.value)

//         props.refreshFunction(event.currentTarget.value)

//     }

//     return (
//         <div>
//             <Search
//                 value={SearchTerms}
//                 onChange={onChangeSearch}
//                 placeholder="Search By Typing..."
//             />
//         </div>
//     )
// }

// export default SearchFeature