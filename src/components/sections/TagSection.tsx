import Tag from "../layout/Tag";

interface Tags{
    id: string;
    label: string;
}

interface TagSectionProps{
    title: string;
    tags: Tags[];
    onTagClick?: (search: string) => void

}

const TagSection = ({ title, tags, onTagClick }: TagSectionProps) => {

  const sectionId = title.toLowerCase().replace(/\s+/g, '-');

  return (
        <section className="mt-8 px-6 max-w-5xl mx-auto" aria-labelledby={`${sectionId}-heading`}>
            <h2  id={`${sectionId}-heading`} className="text-white text-lg font-semibold mb-4">
                {title}
            </h2>
            <div className="flex flex-wrap gap-3"role="list" aria-label={`${title} tags`}>
                {tags.map((tag, index) => (
                    <div key={index} role="listitem">
                        <Tag
                            tag={tag}
                            onClick={onTagClick}
                            variant="interactive"
                        />
                    </div>
                ))}
            </div>
        </section>
  )
}

export default TagSection