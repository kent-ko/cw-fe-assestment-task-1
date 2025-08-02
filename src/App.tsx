import { useCallback } from "react"
import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import TagSection from "./components/sections/TagSection";
import { PERSONAL_TAGS, TRENDING_TAGS } from "./constants/tags";

interface Tag{
  id: string;
  label: string;
}
export default function App() {
  // Main search handler
  const handleSearch = useCallback((searchTerm: string) => {
    console.log('Searching for:', searchTerm);
    // Implement the actual search logic, which could be calling the API, routing and db state management
  }, []);

  const handleTagClick = useCallback((tag: Tag) => {
    console.log('Tag clicked:', tag);
    handleSearch(tag.label);
  }, [handleSearch]);

  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
      <HeroSection onSearch={handleSearch} />
      <TagSection
        title="Trending"
        tags={TRENDING_TAGS}
        onTagClick={handleTagClick}
      />
      <TagSection
        title="For you"
        tags={PERSONAL_TAGS}
        onTagClick={handleTagClick}
      />
    </main>
  );
}