import React from 'react'

const Filter = ({filter, handleFilter}) => {
    return (
        <form>
               <div>
        input to show with: 
        <input
        value={filter}
        onChange={handleFilter} />
         </div>
        </form>
    )
}
export default Filter