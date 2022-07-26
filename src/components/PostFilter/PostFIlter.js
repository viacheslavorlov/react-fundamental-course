import MySelect from "../UI/select/MySelect";
import React from "react";
import MyInput from "../UI/input/MyInput";

const PostFIlter = ({filter, setFilter}) => {
  return (
      <>
          <MyInput
              value={filter.query}
              onChange={e => setFilter({...filter, query: e.target.value})}
              placeholder={'Поиск'}/>
          <MySelect defaultValue={'Сортировака'}
                    value={filter.sort}
                    onChange={selectedSort =>  setFilter({...filter, sort: selectedSort})}
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По содержанию'}
                    ]}/>
      </>
  )
}
export default PostFIlter;