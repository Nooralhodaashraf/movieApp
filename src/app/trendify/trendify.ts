import { MovieDataList } from './../movie-data-list';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../movie-service';
import { RouterLink } from '@angular/router';
import { Recommendation } from '../recommendation/recommendation';

@Component({
  selector: 'app-trendify',
  imports: [RouterLink, Recommendation],
  templateUrl: './trendify.html',
  styleUrl: './trendify.css',
})
export class Trendify implements OnInit {
  private readonly movieService = inject(MovieService);

  moviesList: MovieDataList[] = [];
  ngOnInit(): void {
    this.getMoviesData();
  }

  getMoviesData(): void {
    this.movieService.getMovies().subscribe({
      next: (res) => {
        this.moviesList = res.results;
        console.log(this.moviesList);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
