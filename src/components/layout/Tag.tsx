import { cn } from "@/lib/utils";
import { useCallback } from "react";
import { Badge } from "../ui/badge";


interface Tag{
    id: string;
    label: string;
}

export interface TagBadgeProps{
    tag: Tag;
    onClick? : (tag: Tag) => void;
    variant: 'default' | 'interactive';
}


const Tag = ({ tag, onClick, variant = 'interactive' }: TagBadgeProps) => {

    const handleClick = useCallback(() => {
        onClick?.(tag);
      }, [tag, onClick]);
    
      const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleClick();
        }
      }, [handleClick]);
    
      const isInteractive = variant === 'interactive' && onClick;

      
  return (
    <Badge
        className={cn(
        'bg-gray-800 text-white transition-colors duration-200',
        isInteractive && [
            'hover:bg-gray-700 cursor-pointer',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black'
        ]
        )}
        onClick={isInteractive ? handleClick : undefined}
        onKeyDown={isInteractive ? handleKeyDown : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        role={isInteractive ? 'button' : undefined}
        aria-label={isInteractive ? `Search for ${tag.label}` : undefined}
    >
        {tag.label}
    </Badge>
  )
}

export default Tag