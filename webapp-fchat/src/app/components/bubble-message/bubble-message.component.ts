import { Component, Input } from "@angular/core";
import { Message } from "src/app/stores/message/message.interface";


@Component({
    selector: 'app-bubble-message',
    templateUrl: './bubble-message.component.html',
    styleUrls: [
        './bubble-message.component.scss'
    ]
})
export class BubbleMessageComponent{

    @Input() message: Message;
    @Input() isSender: boolean;
}