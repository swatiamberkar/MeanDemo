
import { Injectable } from '@angular/core';
import {
	NgbCalendar,
	NgbDateAdapter,
	NgbDateParserFormatter,
	NgbDatepickerModule,
	NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



declare var $: any; // declare $ as a global variable to access the jQuery object

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {
	readonly DELIMITER = '-';

	fromModel(value: string | null): NgbDateStruct | null {
		if (value) {
			const date = value.split(this.DELIMITER);
			return {
				day: parseInt(date[0], 10),
				month: parseInt(date[1], 10),
				year: parseInt(date[2], 10),
			};
		}
		return null;
	}

	toModel(date: NgbDateStruct | null): string | null {
		return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
	}
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
	readonly DELIMITER = '/';

	parse(value: string): NgbDateStruct | null {
		if (value) {
			const date = value.split(this.DELIMITER);
			return {
				day: parseInt(date[0], 10),
				month: parseInt(date[1], 10),
				year: parseInt(date[2], 10),
			};
		}
		return null;
	}

	format(date: NgbDateStruct | null): string {
		return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
	}
}

@Component({
	selector: 'app-date-picker',
	standalone: true,
	imports: [NgbDatepickerModule, FormsModule, JsonPipe],
	templateUrl: './date-picker.component.html',
	styleUrls: ['./date-picker.component.scss'],

	// NOTE: For this example we are only providing current component, but probably
	// NOTE: you will want to provide your main App Module
	providers: [
		{ provide: NgbDateAdapter, useClass: CustomAdapter },
		{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
	],
})

export class DatePickerComponent {
	selectedDate!: NgbDate;
	public model1: string = ''
	public model2: string = ''

	constructor(private ngbCalendar: NgbCalendar,
		private dateAdapter: NgbDateAdapter<string>) { }

	get today() {
		return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
	}

	@ViewChild('datepicker')
	datepicker!: ElementRef; // get a reference to the datepicker input element

	ngAfterViewInit(): void {
		$(this.datepicker.nativeElement).datepicker(); // initialize the Bootstrap datepicker plugin
	}

}
