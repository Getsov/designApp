import { Component, OnInit } from "@angular/core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab);
  }

  ngOnInit() {}
}
