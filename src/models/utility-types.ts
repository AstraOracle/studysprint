import { Flashcard } from './flashcard.model';

export type FlashcardPreview = Pick<Flashcard, 'id' | 'question' | 'category'>;

export type FlashcardUpdate = Partial<Omit<Flashcard, 'id'>>;
