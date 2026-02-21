import { Component, inject } from '@angular/core';
import { MovieService } from '../movie-service';
import { MovieDataList } from '../movie-data-list';

@Component({
  selector: 'app-recommendation',
  imports: [],
  templateUrl: './recommendation.html',
  styleUrl: './recommendation.css',
})
export class Recommendation {
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
