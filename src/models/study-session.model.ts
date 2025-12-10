import { Flashcard } from './flashcard.model';

export interface StudySession {
  id: string;
  flashcardsReviewed: number;
  correctCount: number;
  wrongCount: number;
  durationMinutes: number;
  date: number; // timestamp
  cards: Flashcard[];
}
