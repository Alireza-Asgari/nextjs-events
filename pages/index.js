import EventList from "../components/events/event-list";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { getAllEvents, getFeaturedEvents } from "../helper/api-util";
export default function HomePage({ events }) {
  const [eventsState, setEventsState] = useState(events);

  return (
    <div>
      <EventList items={eventsState} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getFeaturedEvents();

  return { props: { events: data }, revalidate: 120 };
}
