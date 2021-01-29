import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TutorialGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const hasSeen = await this.storage.get("tutorialSeen");
    if (!hasSeen) {
      this.router.navigateByUrl("/tutorial");
    }

    return hasSeen;
  }
}
