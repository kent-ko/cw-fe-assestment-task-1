import { useSearch } from '@/hooks/useSearch';
import { cn } from '@/lib/utils';
import { useCallback } from 'react'
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';

interface SearchInputProps{
    value?: string;
    onChange? : (value: string) => void;
    onSubmit?: (value: string) => void;
    placeholder?: string;
    className?: string;
    variant?: 'header' | 'hero';
}


export const SearchInput = ({value = '', onChange,onSubmit,placeholder = 'Type to search...',className, variant = 'hero',}: SearchInputProps) => {

      const { searchValue, setSearchValue } = useSearch({
        onSearch: onChange,
        debounce: 300,
      });
    
      const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (searchValue.trim() && onSubmit) {
            onSubmit(searchValue.trim());
          }
        }
      }, [searchValue, onSubmit]);
    
      const handleButtonClick = useCallback(() => {
        if (searchValue.trim() && onSubmit) {
          onSubmit(searchValue.trim());
        }
      }, [searchValue, onSubmit]);
    
      const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        onChange?.(e.target.value);
      }, [setSearchValue, onChange]);
    
      const isHeroVariant = variant === 'hero';
    
      if (isHeroVariant) {
        return (
          <div
            className={cn(
              'flex items-center bg-gray-900/90 backdrop-blur-sm px-4 py-3 w-full max-w-xl shadow-lg border border-gray-700 rounded-full',
              className
            )}
            role="search"
            aria-label="Search for words and meanings"
          >
            <Search
              className="text-gray-400 mr-3 flex-shrink-0"
              size={20}
              aria-hidden="true"
            />
            
            <Input
              value={value || searchValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder={placeholder}
              className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-0 text-base"
              aria-label="Search input"
            />
    
            <Button
              onClick={handleButtonClick}
              className="bg-blue-600 hover:bg-blue-700 text-white ml-4 cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              aria-label="Search"
            >
              Search
            </Button>
          </div>
        );
      }
    
      return (
        <div className={cn('relative', className)}>
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={16}
            aria-hidden="true"
          />
          
          <Input
            value={value || searchValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder={placeholder}
            className="pl-10 pr-4 py-2 bg-gray-800 text-white border-gray-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 rounded-full text-sm w-64"
            aria-label="Header search"
          />
        </div>
      );
    }