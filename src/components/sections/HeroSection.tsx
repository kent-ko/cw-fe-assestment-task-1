import {SearchInput} from '../layout/SearchInput'

export interface HeroSectionProps {
    onSearch: (search: string) => void;
}


const HeroSection = ({ onSearch }: HeroSectionProps) => {
  return (
    <section className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8">
        <img
            src="/task1/hero-bg.png"
            alt="Abstract colorful background with geometric shapes"
            className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
                Search for words, phrases and meanings
            </h1>
            <SearchInput
                variant="hero"
                onSubmit={onSearch}
                onChange={onSearch}
            />
        </div>
    </section>
  )
}

export default HeroSection