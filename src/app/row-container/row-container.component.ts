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
  constructor(private newsService: NewsService) {}

  news: News[];
  ngOnInit() {
    this.newsService.getNews(0).subscribe((news: any) => (this.news = news));
  }

  goTo(storyUrl: string) {
    window.open(storyUrl, "_blank");
  }

  delete(newsId: string) {
    this.newsService.delete(newsId).subscribe(() => {
      this.ngOnInit();
    });
  }
}
