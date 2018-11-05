import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
	selector: 'editor-enum',
	templateUrl: './editor-enum.component.html',
	styleUrls: ['./editor-enum.component.less']
})

export class EditorEnumComponent implements OnInit, OnChanges {
	private _value: any = null;

	get value(): any {
		return this._value;
	}

	@Input() set value(x) {
		this._value = x;
		this.valueChange.emit(this.value);
	}
	@Input() enumValues: any;
	@Input() label: string;

	@Output() valueChange = new EventEmitter<any>();

	ngOnInit() {

	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.enumValues && !this.enumValues.length) {
			let keys = [];
			for (let enumMember in this.enumValues) {
				let isValueProperty = parseInt(enumMember, 10) > 0;
				if (isValueProperty) {
					keys.push({ value: enumMember, text: this.enumValues[enumMember] });
				}
			}
			this.enumValues = keys;
		}
	}

	updateValue(v: any) {
		this.value = v;
	}
}