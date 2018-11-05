import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'editor-text',
	templateUrl: './editor-text.component.html',
	styleUrls: ['./editor-text.component.less']
})
export class EditorTextComponent {
	private _value: any = null

	get value(): any {
		return this._value;
	}
	@Input() set value(x) {
		this._value = x;
		this.valueChange.emit(this.value);
	}
	@Output() valueChange = new EventEmitter<any>();
	@Input() label: string;
	@Input() name: string = 'name' + Math.random().toString().replace('.', '_');
	@Input() readonly = false;
}
