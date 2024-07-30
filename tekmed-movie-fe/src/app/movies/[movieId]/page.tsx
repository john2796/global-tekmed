"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { Movie } from "@/app/types/move";
import { LuTicket } from "react-icons/lu";

export default function MoviePage({
  params: { movieId },
}: {
  params: { movieId: string };
}) {
  const [movie, setMovie] = useState<Movie | null>(null);

  const fetchMovieById = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/movies/${movieId}`);
    const data = await res.json();
    setMovie(data);
  };

  useEffect(() => {
    fetchMovieById();
  }, [movieId]);

  return (
    <div className={styles.detail}>
      <div className={styles.detail_container}>
        <div className={styles.detail_left}>
          <div className={styles.genre_container}>
            <p className={styles.genre}>{movie?.genres.join(", ")}</p>
          </div>
          <h1>{movie?.title}</h1>
          <p className={styles.extract}>{movie?.extract}</p>
          <div className={styles.buttons}>
            <button className={styles.get_tickets}>
              <LuTicket size={16} /> Get Tickets
            </button>
            <button className={styles.see_details}>See Details</button>
          </div>
        </div>
        <div className={styles.detail_image}>
          {movie?.thumbnail && <Image
            width={500}
            height={500}
            src={movie?.thumbnail}
            alt={movie?.title}
            className={styles.thumbnail}
          />}
        </div>
      </div>
    </div>

  );
}
