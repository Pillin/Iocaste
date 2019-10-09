import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { News } from "../interfaces/new.interface";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  baseUrl = "http://localhost:3001/api";
  constructor(private http: HttpClient) {}

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || "Server error");
  }
  getNews(page: number) {
    return this.http.get(`${this.baseUrl}/news?page=${page}`).pipe(
      map((data: any) => {
        return data.news;
      }),
      catchError(this.handleError)
    );
  }

  delete(newsId: string) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const url = `${this.baseUrl}/news/${newsId}`;

    return this.http.delete<News>(url).pipe(catchError(this.handleError));
  }
}
