import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/events/error-alert";

export default function FilteredEvent() {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <ErrorAlert>Loading...</ErrorAlert>;
  }

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear < 2020 ||
    filteredYear > 2025 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>Invalide filter . please adjust your values!.</ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }
  const filteredevents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });
  if (!filteredevents || filteredevents.length === 0) {
    return (
      <>
        <ErrorAlert>No events found for your choosen filter!</ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }
  const date = new Date(filteredYear, filteredMonth - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredevents} />
    </>
  );
}
