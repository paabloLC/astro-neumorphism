import { useState, useEffect } from 'preact/hooks';

interface StarCountProps {
  repo: string;
}

export default function StarCount({ repo }: StarCountProps) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`);
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error('Error fetching star count:', error);
        setStars(0); // Fallback to 0 or handle error gracefully
      }
    }
    fetchStars();
  }, [repo]);

  return (
    <a 
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center text-sm ml-1"
      onClick={(e) => {
        // Optional: Add a small delay before re-fetching to give GitHub time to update
        setTimeout(() => {
          fetchStars();
        }, 2000); // 2 seconds delay
      }}
    ><span class="mr-1">{stars !== null ? stars : '...'}</span>⭐️</a>
  );
}