import { useCallback, useEffect, useState } from "react";

interface UseSearchOptions{
    debounce?: number;
    onSearch?: (searchTerm: string) => void;
    minLength?: number;
}

export const useSearch = (options: UseSearchOptions = {}) => {

    const { debounce = 300, onSearch, minLength = 1 } = options;
    const [searchValue, setSearchValue] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        if(!onSearch) return;

        if (searchValue.length < minLength) {
            setIsSearching(false);
            return;
          }
      
          setIsSearching(true);
          const timeoutId = setTimeout(() => {
            onSearch(searchValue.trim());
            setIsSearching(false);
          }, debounce);
      
          return () => {
            clearTimeout(timeoutId);
            setIsSearching(false);
          };

        }, [searchValue, onSearch, debounce, minLength]);

        const handleSearch = useCallback((value: string) => {
            if(onSearch && value.trim().length >= minLength){
                onSearch(value.trim());
            }
        }, [onSearch, minLength]);

        const clearSearch = useCallback(() => { setSearchValue('')},[]);

  return {searchValue, setSearchValue, isSearching, handleSearch, clearSearch };
}
