import { Component } from '@angular/core';
import { Message } from 'src/models/chat-gpt';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: Message[] = [
    { role: 'user', content: 'test' },
    { role: 'assistant', content: 'test2' },
    { role: 'user', content: 'test' },
    { role: 'assistant', content: 'test2' },
    { role: 'user', content: 'test' },
    { role: 'assistant', content: 'test2' },
    { role: 'user', content: 'test' },
    { role: 'assistant', content: 'test2' },
  ];
}
