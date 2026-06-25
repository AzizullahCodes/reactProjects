//SearchProvider.jsx
import React, { useState } from "react";
import SearchContext from "./searchContext";
const SearchProvider = ({children})=>{
    const [searchTerm,setSearchTerm] = useState('')
    return(
        <SearchContext.Provider value={{searchTerm,setSearchTerm}}>
            {children}
        </SearchContext.Provider>
    )

}

export default SearchProvider;