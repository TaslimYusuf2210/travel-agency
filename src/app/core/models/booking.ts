/**
 * A booking made by a traveler.
 * Initial shape — will evolve as the real screens/API are defined.
 */
export interface Booking {
  id: string;
  tourId: string;
  travelerName: string;
  travelerEmail: string;
  departureDate: string; // ISO-8601 date
  guests: number;
  status: BookingStatus;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';
