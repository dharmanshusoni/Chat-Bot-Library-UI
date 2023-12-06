import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat-bot-library';
  chatMessages: { class?:string, content: string; isUser: boolean; isButton?: boolean; buttonLabel?: string; buttonAction?: string }[] = [
    { class:'message bot-message',content: "Hi there! How can I assist you?", isUser: false },
    {
      content: "We provide a range of services. Would you like more information?",
      isUser: true,
      isButton: true,
      buttonLabel: "Yes, tell me more",
      buttonAction: "moreInfo",
      class:'message user-message-option',
    }
  ];

  userInput: string = '';

  async toggleChat() {
    const chatPopup = document.getElementById('chat-popup');
    if (chatPopup) {
      chatPopup.style.display = (chatPopup.style.display === 'none' || chatPopup.style.display === '') ? 'block' : 'none';
    }
  }

  async sendMessage() {
    if (this.userInput.trim() !== "") {
      this.chatMessages.push({ class:'message user-message',content: this.userInput, isUser: true });
      this.chatMessages.push({ class:'message bot-message', content: 'Processing: ' + this.userInput, isUser: false });
      this.userInput = '';
    }
  }

  async handleButtonClick(action: any) {
    // Handle button click based on the specified action
    if (action === 'moreInfo') {
      this.chatMessages.push({ class:'message bot-message',content: 'Here is more information about our services...', isUser: false });
    }
    // Add more button actions as needed
  }
}
