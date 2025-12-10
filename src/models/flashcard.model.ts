export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: FlashcardCategory;
  createdAt: number; // timestamp
}
