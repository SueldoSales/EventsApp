import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

import { getFilteredEvents } from '../../dummy-data';

export default function FilteredEventsPage() {

  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Carregando...</p>
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Filtro de pesquisa inválido. Por favor, ajuste seu valores!</p>
        </ErrorAlert>
        
        <div className="center">
          <Button link="/events">Mostrar todos os Eventos</Button>
        </div>
      </>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>Nenhum evento encontrado com a filtragem escolhida!</p>
        </ErrorAlert>
        
        <div className="center">
          <Button link="/events">Mostrar todos os Eventos</Button>
        </div>
      </>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  )
}