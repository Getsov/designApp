import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DataService {
  url = "https://newsapi.org/v2";
  apiKey = "";
  totalPosts = null;
  pages: any;

  constructor(private http: HttpClient) {}

  getTopNews(cat) {
    return this.http
      .get(
        `${this.url}/top-headlines?category=${cat}&country=bg&apiKey=${this.apiKey}`
      )
      .pipe(map((res) => res["articles"]));
  }

  getSportSources() {
    return this.http
      .get(
        `${this.url}/sources?category=sports&country=bg&apiKey=${this.apiKey}`
      )
      .pipe(map((res) => res["sources"]));
  }

  getRandomUser() {
    return this.http
      .get(`https://randomuser.me/api?results=20`)
      .pipe(map((res) => res["results"]));
  }
}
