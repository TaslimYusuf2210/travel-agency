/**
 * A bookable tour / package.
 * Initial shape — will evolve as the real screens/API are defined.
 */
export interface Tour {
  id: string;
  destinationId: string;
  title: string;
  description: string;
  durationDays: number;
  price: number;
  currency: string;
  imageUrl: string;
}
