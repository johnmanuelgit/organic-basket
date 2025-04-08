// blog.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

interface Blog {
  title: string;
  image: string;
  date: string;
  category: string;
  author: string;
  content: string;
  id: number;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  imageUrl: string = 'assets/icon/search-icon.svg';
  blogs: Blog[] = [];
  displayedBlogs: Blog[] = [];
  currentPage: number = 1;
  blogsPerPage: number = 5;
  totalPages: number = 8;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.http.get<Blog[]>('assets/blogs.json').subscribe((data) => {
      this.blogs = data;
      this.totalPages = Math.ceil(this.blogs.length / this.blogsPerPage);
      this.updateDisplayedBlogs();
    });
  }

  updateDisplayedBlogs() {
    const startIndex = (this.currentPage - 1) * this.blogsPerPage;
    this.displayedBlogs = this.blogs.slice(startIndex, startIndex + this.blogsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedBlogs();
    }
  }
  viewblog(blogId:number){
this.router.navigate(['/blog',blogId]);
  }
}
