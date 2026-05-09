import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {
  // Typing Animation
  typingText = '';
  isPaused = false; // Controls cursor blinking
  private words = [
    'transformation digitale',
    'cybersécurité',
    'intelligence artificielle',
    'innovation IT'
  ];
  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeSpeed = 100; // Professional typing speed

  // 3D Tilt
  tiltTransform = '';

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('HeroComponent initialized');
    this.type();
  }

  type() {
    const currentWord = this.words[this.wordIndex];
    this.isPaused = false; // Cursor solid while typing

    if (this.isDeleting) {
      this.typingText = currentWord.substring(0, this.charIndex - 1);
      this.charIndex--;
      this.typeSpeed = 50; // Faster, smooth deletion
    } else {
      this.typingText = currentWord.substring(0, this.charIndex + 1);
      this.charIndex++;
      // Variable speed for natural typing feel
      this.typeSpeed = Math.random() * 100 + 80; // Random between 80-180ms
    }

    if (!this.isDeleting && this.charIndex === currentWord.length) {
      this.isDeleting = true;
      this.isPaused = true;
      this.typeSpeed = 2000; // Pause at end to let users read
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.isPaused = true;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      this.typeSpeed = 500; // Short pause before starting new word
    }

    this.cdr.detectChanges(); // Force update
    setTimeout(() => this.type(), this.typeSpeed);
  }

  onMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
    const rotateY = ((x - centerX) / centerX) * 10;

    this.tiltTransform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  onMouseLeave() {
    this.tiltTransform = 'perspective(1000px) rotateX(0) rotateY(0)';
  }

  requestDemo() {
    alert('Merci pour votre intérêt ! Nous vous contacterons bientôt.');
  }
}