import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-news-item",
  templateUrl: "./news-item.page.html",
  styleUrls: ["./news-item.page.scss"],
})
export class NewsItemPage implements OnInit {
  news = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.news = this.router.getCurrentNavigation().extras.state.news;
      }
    });
  }

  ngOnInit() {}
}
