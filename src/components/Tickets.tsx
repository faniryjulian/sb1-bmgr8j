import React, { useState } from 'react';
import { Ticket, CreditCard } from 'lucide-react';

const ticketTypes = [
  {
    name: 'Day Pass',
    price: 45,
    description: 'Access to all events for one day',
  },
  {
    name: 'Weekend Pass',
    price: 80,
    description: 'Full weekend access with priority entry',
  },
  {
    name: 'VIP Experience',
    price: 150,
    description: 'All access pass with exclusive areas and meet & greet',
  },
];

export function Tickets() {
  const [selectedTicket, setSelectedTicket] = useState(ticketTypes[0]);

  return (
    <section id="tickets" className="py-24 bg-[#350B89]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#F4F3EE] text-center mb-16">Get Your Tickets</h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {ticketTypes.map((ticket) => (
            <div
              key={ticket.name}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedTicket.name === ticket.name
                  ? 'bg-[#FFD84D] transform scale-105'
                  : 'bg-[#353B3C] hover:bg-[#353B3C]/80'
              }`}
              onClick={() => setSelectedTicket(ticket)}
            >
              <div className="flex justify-between items-start mb-4">
                <Ticket className={`w-6 h-6 ${
                  selectedTicket.name === ticket.name ? 'text-[#350B89]' : 'text-[#FFD84D]'
                }`} />
                <span className={`text-2xl font-bold ${
                  selectedTicket.name === ticket.name ? 'text-[#350B89]' : 'text-[#F4F3EE]'
                }`}>
                  €{ticket.price}
                </span>
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                selectedTicket.name === ticket.name ? 'text-[#350B89]' : 'text-[#F4F3EE]'
              }`}>
                {ticket.name}
              </h3>
              <p className={
                selectedTicket.name === ticket.name ? 'text-[#350B89]/80' : 'text-[#F4F3EE]/80'
              }>
                {ticket.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-md mx-auto">
          <button className="w-full bg-[#FD8AB9] hover:bg-[#FD8AB9]/90 text-[#350B89] px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 flex items-center justify-center gap-2">
            <CreditCard className="w-5 h-5" />
            Purchase {selectedTicket.name} - €{selectedTicket.price}
          </button>
        </div>
      </div>
    </section>
  );
}