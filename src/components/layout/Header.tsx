import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { SearchInput } from './SearchInput';

const Header = () => {

    const handleHeaderSearch = (searchTerm: string) => {
        console.log('Header search:', searchTerm);
        // Ideally the whole application search logic happens here
      };

  return (
      <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
        <div className="flex items-center gap-3 cursor-pointer">
            <img
            src="/task1/logo.png"
            alt="Wortionary logo"
            className="w-8 h-8 "
            />
            <h1 className="text-white font-semibold text-xl">Wortionary</h1>
        </div>

        <div className="flex items-center gap-4">
            <SearchInput
                variant="header"
                placeholder="Search"
                onSubmit={handleHeaderSearch}
                onChange={handleHeaderSearch}
            />

            <Avatar className="w-8 h-8 ring-2 ring-gray-700 hover:ring-gray-600 transition-all duration-200">
                <AvatarImage src="/avatar.jpg" alt="User avatar" />
                <AvatarFallback className="bg-gray-700 text-white text-sm cursor-pointer">
                    User
                </AvatarFallback>
            </Avatar>
        </div>
      </header>
  )
}

export default Header