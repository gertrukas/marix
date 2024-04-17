import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/interfaces/blog';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  blogs: Blog[]= [];
  item: string  = '';
  search: boolean  = false;
  private actualPage: number = 1;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: SearchService
    ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.blogs = [];
    this.service.getBlogs().subscribe(response => {
      for(let i=0;response.blogs.length>i;i++){
        this.blogs.push(response.blogs[i]);
      }
    }, error => {
      console.error(error);
    });
  }

  getPlus() {
    this.actualPage = this.actualPage + 1;
    this.service.getBlogs(this.actualPage).subscribe(response => {
      for(let i=0;response.blogs.length>i;i++){
        this.blogs.push(response.blogs[i]);
      }
    }, error => {
      console.error(error);
    });
  }

}
