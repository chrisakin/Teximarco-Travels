import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Plane, User, Check, X } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const SeatSelectionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { flight, fare, passengers, contactDetails } = location.state || {};

  const [selectedSeats, setSelectedSeats] = useState<{ [passengerId: number]: string }>({});

  // Mock seat map data
  const seatMap = {
    rows: 30,
    seatsPerRow: 6,
    aisles: [2, 3], // After seats B and D
    exitRows: [12, 13],
    premiumRows: [1, 2, 3],
    occupiedSeats: ['1A', '1B', '3C', '5F', '7A', '12D', '15B', '20C'],
    blockedSeats: ['13A', '13F'], // Exit row restrictions
  };

  const getSeatClass = (row: number, seat: string) => {
    const seatId = `${row}${seat}`;
    
    if (seatMap.occupiedSeats.includes(seatId)) return 'occupied';
    if (seatMap.blockedSeats.includes(seatId)) return 'blocked';
    if (Object.values(selectedSeats).includes(seatId)) return 'selected';
    if (seatMap.exitRows.includes(row)) return 'exit';
    if (seatMap.premiumRows.includes(row)) return 'premium';
    return 'available';
  };

  const getSeatPrice = (row: number) => {
    if (seatMap.premiumRows.includes(row)) return 25000;
    if (seatMap.exitRows.includes(row)) return 15000;
    return 0;
  };

  const handleSeatSelect = (row: number, seat: string) => {
    const seatId = `${row}${seat}`;
    const seatClass = getSeatClass(row, seat);
    
    if (seatClass === 'occupied' || seatClass === 'blocked') return;

    // Find next passenger without a seat
    const nextPassenger = passengers.find((p: any) => !selectedSeats[p.id]);
    if (nextPassenger) {
      setSelectedSeats(prev => ({ ...prev, [nextPassenger.id]: seatId }));
    }
  };

  const removeSeat = (passengerId: number) => {
    setSelectedSeats(prev => {
      const newSeats = { ...prev };
      delete newSeats[passengerId];
      return newSeats;
    });
  };

  const getTotalSeatFees = () => {
    return Object.values(selectedSeats).reduce((total, seatId) => {
      const row = parseInt(seatId);
      return total + getSeatPrice(row);
    }, 0);
  };

  const handleContinue = () => {
    navigate('/booking-review', {
      state: {
        flight,
        fare,
        passengers,
        contactDetails,
        selectedSeats,
        seatFees: getTotalSeatFees(),
      }
    });
  };

  const seatLetters = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <div>
      <PageHeader
        title="Select Your Seats"
        subtitle="Choose your preferred seats for the flight"
        icon={Plane}
        backgroundImage="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Seat Map */}
          <div className="lg:col-span-3">
            <Card>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Aircraft Seat Map</h2>
                
                {/* Legend */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 rounded"></div>
                    <span>Available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-sky-500 rounded"></div>
                    <span>Selected</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                    <span>Occupied</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                    <span>Premium (+₦25,000)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                    <span>Exit Row (+₦15,000)</span>
                  </div>
                </div>

                {/* Seat Map */}
                <div className="bg-gray-50 p-6 rounded-lg overflow-x-auto">
                  <div className="min-w-max">
                    {/* Header */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-gray-300 px-4 py-2 rounded-lg text-sm font-medium">
                        Front of Aircraft
                      </div>
                    </div>

                    {/* Seat Letters Header */}
                    <div className="flex items-center justify-center mb-2">
                      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-600">
                        <div className="w-8"></div>
                        {seatLetters.map((letter, index) => (
                          <React.Fragment key={letter}>
                            <div className="w-8">{letter}</div>
                            {seatMap.aisles.includes(index) && <div className="w-4"></div>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Seats */}
                    <div className="space-y-1">
                      {Array.from({ length: seatMap.rows }, (_, rowIndex) => {
                        const row = rowIndex + 1;
                        return (
                          <div key={row} className="flex items-center justify-center">
                            <div className="grid grid-cols-7 gap-2">
                              <div className="w-8 text-center text-sm font-medium text-gray-600">
                                {row}
                              </div>
                              {seatLetters.map((letter, seatIndex) => {
                                const seatClass = getSeatClass(row, letter);
                                const seatPrice = getSeatPrice(row);
                                
                                return (
                                  <React.Fragment key={letter}>
                                    <button
                                      onClick={() => handleSeatSelect(row, letter)}
                                      disabled={seatClass === 'occupied' || seatClass === 'blocked'}
                                      className={`w-8 h-8 rounded text-xs font-medium transition-all ${
                                        seatClass === 'available' ? 'bg-green-500 hover:bg-green-600 text-white' :
                                        seatClass === 'selected' ? 'bg-sky-500 text-white' :
                                        seatClass === 'occupied' ? 'bg-gray-400 text-white cursor-not-allowed' :
                                        seatClass === 'blocked' ? 'bg-red-400 text-white cursor-not-allowed' :
                                        seatClass === 'premium' ? 'bg-yellow-500 hover:bg-yellow-600 text-white' :
                                        seatClass === 'exit' ? 'bg-orange-500 hover:bg-orange-600 text-white' :
                                        'bg-green-500 hover:bg-green-600 text-white'
                                      }`}
                                      title={`Seat ${row}${letter}${seatPrice > 0 ? ` (+₦${seatPrice.toLocaleString()})` : ''}`}
                                    >
                                      {seatClass === 'selected' ? <Check className="w-4 h-4 mx-auto" /> :
                                       seatClass === 'occupied' ? <X className="w-4 h-4 mx-auto" /> :
                                       letter}
                                    </button>
                                    {seatMap.aisles.includes(seatIndex) && <div className="w-4"></div>}
                                  </React.Fragment>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Passenger List & Summary */}
          <div className="space-y-6">
            {/* Selected Seats */}
            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Selected Seats</h3>
              <div className="space-y-3">
                {passengers.map((passenger: any, index: number) => (
                  <div key={passenger.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">
                        {passenger.firstName} {passenger.lastName}
                      </div>
                      <div className="text-sm text-gray-600">
                        Passenger {index + 1}
                      </div>
                    </div>
                    <div className="text-right">
                      {selectedSeats[passenger.id] ? (
                        <div>
                          <div className="font-bold text-sky-600">
                            {selectedSeats[passenger.id]}
                          </div>
                          <button
                            onClick={() => removeSeat(passenger.id)}
                            className="text-xs text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">
                          No seat selected
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Booking Summary */}
            <Card className="sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="font-medium">{flight?.airline}</div>
                  <div className="text-sm text-gray-600">{flight?.from} → {flight?.to}</div>
                </div>
                <div>
                  <div className="font-medium">{fare?.name}</div>
                  <div className="text-sm text-gray-600">
                    {passengers.length} passenger{passengers.length > 1 ? 's' : ''}
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Base Fare</span>
                  <span className="font-medium">
                    ₦{((parseInt(fare?.price?.replace(/[₦,]/g, '') || '0') + 45000) * passengers.length).toLocaleString()}
                  </span>
                </div>
                {getTotalSeatFees() > 0 && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Seat Selection</span>
                    <span className="font-medium">₦{getTotalSeatFees().toLocaleString()}</span>
                  </div>
                )}
                <div className="border-t pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-xl font-bold text-sky-600">
                      ₦{(((parseInt(fare?.price?.replace(/[₦,]/g, '') || '0') + 45000) * passengers.length) + getTotalSeatFees()).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full" 
                  onClick={handleContinue}
                  disabled={Object.keys(selectedSeats).length !== passengers.length}
                >
                  Continue to Review
                </Button>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(-1)}>
                  Back to Passenger Details
                </Button>
              </div>

              {Object.keys(selectedSeats).length !== passengers.length && (
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    Please select seats for all passengers to continue.
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionPage;