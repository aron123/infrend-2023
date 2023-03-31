import { Component } from '@angular/core';
import { Message } from '../chat-gpt.models';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: Message[] = [
    { role: 'user', content: 'asdasdasdasdasd adasdasdasd asdasdasd.' },
    { role: 'assistant', content: 'adasdasd asdasd asdsad.' },
    { role: 'user', content: 'asdasdasdasdasd adasdasdasd asdasdasd.' },
    { role: 'assistant', content: 'adasdasd asdasd asdsad.' },
    { role: 'user', content: 'asdasdasdasdasd adasdasdasd asdasdasd.' },
    { role: 'assistant', content: 'adasdasd asdasd asdsad.' },
    { role: 'user', content: 'asdasdasdasdasd adasdasdasd asdasdasd.' },
    { role: 'assistant', content: 'adasdasd asdasd asdsad.' },
    { role: 'user', content: 'asdasdasdasdasd adasdasdasd asdasdasd.' },
    { role: 'assistant', content: 'adasdasd asdasd asdsad.' },
    { role: 'user', content: 'asdasdasdasdasd adasdasdasd asdasdasd.' },
    { role: 'assistant', content: 'adasdasd asdasd asdsad.' },
    { role: 'user', content: 'asdasdasdasdasd adasdasdasd asdasdasd.' },
    { role: 'assistant', content: 'adasdasd asdasd asdsad.' },
  ]
}
