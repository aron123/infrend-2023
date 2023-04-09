import { Component, Input } from '@angular/core';
import { Message } from 'src/app/chat-gpt.models';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() message!: Message;
  username = localStorage.getItem('username');
}
