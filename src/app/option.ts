import {JsonObject, JsonProperty} from 'json2typescript';
import {Value} from './value';

@JsonObject('Option')
export class Option {
    @JsonProperty('label', String)
    label: string = undefined;

    @JsonProperty('value', String)
    value: string = undefined;


    getLabel(): string {
        return this.label;
    }

    getText(): string {
        return this.value;
    }
}
