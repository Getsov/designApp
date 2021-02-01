import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  dummyTweets = [
    {
      username: "Max Lynch",
      handle: "maxlynch",
      likeCount: "34",
      shareCount: "15",
      text:
        "Put something under the domain http://ionicjs.com  for the first time tonight...",
      date: "1485601506000",
      img: "twitter-max.jpg",
    },
    {
      username: "Simon Reimler",
      handle: "schlimmson",
      likeCount: "41",
      shareCount: "5",
      text:
        "Really love the way of Building Layouts with Ionic 2 and the grid system!",
      date: "1485701506000",
      img: "profile-img.jpg",
    },
    {
      username: "ionic",
      handle: "ionicframework",
      likeCount: "42",
      shareCount: "22",
      text:
        "The day has finally come!  Announcing Ionic 2.0.0 final ???  http://blog.ionic.io/announcing-ionic-2-0-0-final/ …",
      date: "1485801506000",
      img: "twitter-ionic.jpg",
    },
    {
      username: "Ben Sperry",
      handle: "benjsperry",
      likeCount: "15",
      shareCount: "11",
      text:
        "One of my all time favorite Ionic Meetup logos: Ionic San Francisco. ❤️",
      date: "1485901506000",
      img: "twitter-ben.jpg",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
