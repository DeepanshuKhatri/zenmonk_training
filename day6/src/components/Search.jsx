import React from 'react'
import { Select } from 'antd';
import data from '../user.js'

const Search = () => {
    function onChange(e){
        return console.log(e)
    }
    function onSearch(e){
      return  console.log(e)
    }
  return (
    <div>
        {/* <ul>
        {data.map((d)=><li>{d.name}</li>)}

        </ul>
         */}
         <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={(e)=>onChange(e)}
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