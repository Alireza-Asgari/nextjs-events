import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../helper/api-util";

import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";
export default function AllEventsPage({ events }) {
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return { props: { events: events.posts }, revalidate: 60 };
}
