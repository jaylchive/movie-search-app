import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getMovie } from '../api/apiMovie';

export function useMovie() {
  const { movie: movieParam } = useParams();

  const { data: movie, isLoading } = useQuery({
    queryKey: ['movie', movieParam],
    queryFn: () => getMovie(movieParam),
  });

  return { movie, isLoading };
}
