import {JsonObject, JsonProperty} from 'json2typescript';
import {Option} from './option';

@JsonObject('Generic')
export class Generic {
    @JsonProperty('responseType', String)
    responseType: string = undefined;

    @JsonProperty('text', String)
    text: string = undefined;

    @JsonProperty('title', String)
    title: string = undefined;

    @JsonProperty('options', [Option])
    options: Option[] = [];

    @JsonProperty('suggestions', [Option])
    suggestions: Option[] = [];

    getResponseType(): string {
        return this.responseType;
    }

    getText(): string {
        return this.text;
    }

    getTitle(): string {
        return this.title;
    }

    getOptions(): Option[] {
        return this.options;
    }

    getSuggestions(): Option[] {
        return this.suggestions;
    }
}
