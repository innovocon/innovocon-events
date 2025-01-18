import { createContext, useContext, useState, ReactNode } from 'react';
import { EventDetails } from '../types';
import { initialEventData } from '../data/eventData';

interface EventContextType {
  eventData: Record<string, EventDetails>;
  updateEventData: (pageId: string, data: EventDetails) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: ReactNode }) {
  const [eventData, setEventData] = useState(initialEventData);

  const updateEventData = (pageId: string, data: EventDetails) => {
    setEventData(prev => ({
      ...prev,
      [pageId]: data
    }));
  };

  return (
    <EventContext.Provider value={{ eventData, updateEventData }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEventData() {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEventData must be used within an EventProvider');
  }
  return context;
}