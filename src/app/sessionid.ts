import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('SessionId')
export class SessionId {
    @JsonProperty('session_id', String)
    stringid: string = undefined;

    logResult(): void {
       console.log(this.stringid);
    }

    getSessionId(): string {
        return this.stringid;
    }
}
