import {
  Button,
  MovieList,
  Notification,
  SearchBar,
  SkeletonMovie,
} from 'components';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TMDB_API } from 'services';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMoreMovie, setIsLoadingMoreMovie] = useState(false);
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const movieListRef = useRef();

  const handleSubmit = value => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (query) return;
    const controller = new AbortController();

    const getTrendMovieByParam = async () => {
      setIsLoading(true);
      try {
        const response = await TMDB_API.getTrendMovieByParam(
          'week',
          controller
        );
        setMovies(response);

        setError(false);
        setIsLoading(false);
      } catch (error) {
        if (error.message === 'canceled') return;
        setError(error.message);
        setIsLoading(false);
      }
    };
    getTrendMovieByParam();
    return () => controller.abort();
  }, [query]);

  useEffect(() => {
    if (!query) return;
    if (page === 1) {
      setMovies([]);
      setIsLoading(true);
    }

    const controller = new AbortController();

    const searchMovieByQuery = async () => {
      try {
        setIsLoadingMoreMovie(true);
        const {
          total_pages,
          results,
          page: currentPage,
        } = await TMDB_API.searchMovieByQuery(query, page, controller);
        console.log('response:', results);

        setMovies(prev => [...prev, ...results]);
        setIsVisible(currentPage < total_pages);
        setError(false);
        setIsLoadingMoreMovie(false);
        setIsLoading(false);
      } catch (error) {
        if (error.message === 'canceled') return;
        setError(error.message);
        setIsLoadingMoreMovie(false);
      }
    };
    searchMovieByQuery();

    return () => controller.abort();
  }, [page, query]);

  useEffect(() => {
    if (page === 1) {
      return;
    }

    window.scrollBy({
      top: movieListRef.current?.scrollHeight || 0,
      behavior: 'smooth',
    });
  }, [page, movies]);

  const handleLoadMore = () => {
    console.log('click');
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {!isLoading && !error && !query && (
        <Notification $marginBottom={'25px'}>In this week's trend</Notification>
      )}
      {!isLoading && !error && query && movies?.length !== 0 && (
        <Notification $marginBottom={'25px'}>
          {`Movies by result '${query}'`}
        </Notification>
      )}
      <Notification $marginBottom={'25px'}>
        {!isLoading &&
          !error &&
          movies?.length === 0 &&
          query &&
          `Sorry. There are no movies by result '${query}' ... 😭  `}
      </Notification>
      {error && (
        <Notification> {`❌ Something went wrong - ${error}`}</Notification>
      )}
      {!isLoading && <MovieList ref={movieListRef} movies={movies} />}
      {isLoading && <SkeletonMovie />}
      {isVisible && query && (
        <Button onClick={handleLoadMore} $marginLeft={'auto'}>
          {loadingMoreMovie ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </>
  );
};

export default Movies;
