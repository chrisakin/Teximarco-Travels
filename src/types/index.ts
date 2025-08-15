export interface Airport {
  iata: string;
  name: string;
  city: string;
  country: string;
}

export interface SearchFormData {
  tripType: 'oneWay' | 'roundTrip' | 'multiCity';
  from: string;
  to: string;
  departureDate: Date | null;
  returnDate: Date | null;
  passengers: string;
  rooms: string;
  multiCityTrips?: MultiCityTrip[];
}

export interface MultiCityTrip {
  from: string;
  to: string;
  date: Date | null;
}