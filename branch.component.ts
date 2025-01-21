import { Component, OnInit } from '@angular/core';
import { BranchService } from '../../services/branch.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // إضافة RouterModule

@Component({
  selector: 'app-branch',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
  branches: any[] = [];
  newBranch: any = { name: '', location: '' };

  constructor(private branchService: BranchService) {}

  ngOnInit(): void {
    this.loadBranches();
  }

  loadBranches(): void {
    this.branchService.getAllBranches().subscribe(data => {
      this.branches = data;
    });
  }

  addBranch(): void {
    if (this.newBranch.name && this.newBranch.location) {
      this.branchService.saveBranch(this.newBranch).subscribe(() => {
        this.newBranch = { name: '', location: '' };
        this.loadBranches();
      });
    }
  }

  deleteBranch(id: number): void {
    this.branchService.deleteBranch(id).subscribe(() => {
      this.loadBranches();
    });
  }
}
