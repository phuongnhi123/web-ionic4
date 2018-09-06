import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Issue } from '../models/issue';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  listIssues: Issue[] = [];
  private count = new Subject<number>();
  constructor() { }
  getNumberIssue(): Observable<number> {
    return this.count.asObservable();
  }
  public addIssues(isse: Issue) {
    this.listIssues.push(isse);
    this.count.next(this.listIssues.length);
  }
  public deleteIsses(issue: Issue) {
    this.listIssues = this.listIssues.filter(r => r.id !== issue.id);
    this.count.next(this.listIssues.length);
  }
}
