import { useRouter } from "next/router";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/events/error-alert";
import { getFeaturedEvents, getEventById } from "../../helper/api-util";
export default function EventDetail(props) {
  const event = props.event;
  if (!event) {
    return <ErrorAlert>Loading...</ErrorAlert>;
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.imageAlt}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventid;
  const event = await getEventById(eventId);
  return { props: { event: event }, revalidate: 30 };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({
    params: { eventid: event.id },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}
