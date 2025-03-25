import React, { useEffect, useState } from 'react'

const useDebounce = (value, delay=500) => {

  const [debouncedSearch, setDebouncedSearch] = useState(value);

  useEffect(()=>{
    const id = setTimeout(() => {
        setDebouncedSearch(value)
    }, delay);

    return () => {
        clearTimeout(id);
    }
  })

  return debouncedSearch;
}

export default useDebounce
