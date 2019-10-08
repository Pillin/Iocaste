import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  baseUrl = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || "Server error");
  }
  getNews(page: number) {
    return this.http.get(`${this.baseUrl}/news?page=${page}`).pipe(
      map(data => {
        return data.news;
      }),
      catchError(this.handleError)
    );
  }
}
