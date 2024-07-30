"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Movie } from "./types/move";
import React, { useEffect, useState } from 'react';
import Pagination from "./components/pagination";
import Rating from "./components/rating";


export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);
  const page_size: number = 8
  const totalPages: number = Math.floor(count / page_size);

  useEffect(() => {
    fetchData();
  }, [currentPage]);


  const fetchData = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/movies?page=${currentPage}&page_size=${page_size}`);
    const data = await res.json();
    setMovies(data.results);
    setCount(data.count)
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  return (
    <main className={styles.main}>
      <div className={styles.movie_card_container}>
        {movies.map((movie: Movie) =>
          <Link href={`/movies/${movie.id}`} key={movie.id} className={styles.movie_card}>
            <Image src={movie.thumbnail}
              width={250}
              height={250}
              alt={movie.href}
              className={styles.movie_thumbnail} priority={false}
            />
            <div className={styles.movie_labels}>
              <h2 className={styles.title}>{movie.title}</h2>
              <Rating />
            </div>
            <p className={styles.genre}>{movie?.genres[0]}</p>
          </Link>
        )}

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>

    </main>
  );
}
