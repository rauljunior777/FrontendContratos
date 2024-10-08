/**
 * Imports Angular
 */
import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * Imports Primeng
 */
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { City, Customer } from '../interface/demo';
import { getCities, getCustomers } from '../common/demo.utils';
@Component({
  selector: 'app-demo-signal',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    AccordionModule,
    CalendarModule,
    DropdownModule, 
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    TagModule, 
    TableModule
  ],
  templateUrl: './demo-signal.component.html',
  styleUrl: './demo-signal.component.scss'
})
export class DemoSignalComponent implements OnInit {
  router = inject(Router);

  value     = signal<string>("");
  birthDate = signal<string>("");

  filterValue = signal<string>("");
  cities      = signal<City[]>([]);
  selectedCity= signal<City | null>(null);

  customers = signal<Customer[]>([]);

  isValid = computed(() => {
    return (this.value() && this.selectedCity())
  });


  ngOnInit(): void {
    this.cities.update(() => getCities());
    this.customers.update(() => getCustomers());
  }

  goToDemoForm(): void {
    this.router.navigate(['demo-form']);
  }
}
