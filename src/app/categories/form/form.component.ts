import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { Category } from '../category.dto';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './form.component.html',
  styles: ``,
})
export class CategoryFormComponent {
  @Output() back = new EventEmitter();
  @Output() save = new EventEmitter<Category>();

  @Input()
  set category(category: Category) {
    this.categoryForm.setValue(category);
  }

  private fb = inject(FormBuilder);
  categoryForm = this.fb.group({
    id: [null],
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', Validators.required],
  });

  onSubmit() {
    console.log('Button save clicked in the CategoryComponent');
    this.save.emit(this.categoryForm.value as Category);
  }

  onBack() {
    this.back.emit();
  }
}
