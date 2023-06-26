import React from 'react'
import { Select } from 'antd';
import data from '../user.js'

const Search = ({setName}) => {
    function onChange(e){
        return console.log(e)
    }
    function onSearch(e){
      return  console.log(e)
    }
  return (
    <div>
         <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={(e)=>setName(e)}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.value ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={data}
  />
    </div>
  )
}

export default Search