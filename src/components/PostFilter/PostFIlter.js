import MySelect from "../UI/select/MySelect";
import React from "react";

const PostFIlter = ({searchQuery, setSearchQuery, sortPosts, selectedSort}) => {
  return (
      <>
          <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={'Поиск'}/>
          <MySelect defaultValue={'Сортировака'}
                    value={selectedSort}
                    onChange={sort => sortPosts(sort)}
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По содержанию'}
                    ]}/>
      </>
  )
}
export default PostFIlter;