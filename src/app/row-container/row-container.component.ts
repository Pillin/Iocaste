import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NewsService } from "../services/news.service";
import { News } from "../interfaces/new.interface";

export interface RowNew {
  title: string;
  createdAt: Date;
}
@Component({
  selector: "app-row-container",
  templateUrl: "./row-container.component.html",
  styleUrls: ["./row-container.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class RowContainerComponent implements OnInit {
  actualPage: number;
  finishPage: number;
  news: News[];
  constructor(private newsService: NewsService) {
    this.actualPage = 0;
    this.finishPage = 5;
  }

  ngOnInit() {
    this.newsService
      .getNews(this.actualPage)
      .subscribe((news: any) => (this.news = news));
  }

  goTo(storyUrl: string) {
    window.open(storyUrl, "_blank");
  }

  delete(newsId: string) {
    this.newsService.delete(newsId).subscribe(() => {
      this.news = this.news.filter(elem => elem._id != newsId);
    });
  }

  onScroll() {
    if (this.actualPage < this.finishPage) {
      this.actualPage++;
      this.newsService.getNews(this.actualPage).subscribe((news: any) => {
        Array.prototype.push.apply(this.news, news);
      });
    } else {
      console.log("No more lines. Finish page!");
    }
  }
}
