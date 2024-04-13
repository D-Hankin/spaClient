interface Day {
  "arbetsfri dag": string;
  "dag i vecka": string;
  datum: string;
  flaggdag: string;
  helgdag: string;
  namnsdag: string[];
  "röd dag": string;
  vecka: string;
  veckodag: string;
}

const getRedDays = () => {

  const thisYear: Date = new Date();
  const fetchThisYear: string = "http://sholiday.faboul.se/dagar/v2.1/" + thisYear.getFullYear()
  const fetchNextYear: string = "http://sholiday.faboul.se/dagar/v2.1/" + (thisYear.getFullYear() + 1);
  
  const redDaysPromise = Promise.all([
    fetch(fetchThisYear).then(res => res.json()),
    fetch(fetchNextYear).then(res => res.json())
  ]).then(([dataThisYear, dataNextYear]) => {
    const redDaysThisYear = dataThisYear.dagar
      .filter((day: Day) => day.hasOwnProperty("helgdag"))
      .map((day: Day) => new Date(day.datum).toDateString());

    const redDaysNextYear = dataNextYear.dagar
      .filter((day: Day) => day["röd dag"] === "Ja")
      .map((day: Day) => new Date(day.datum).toDateString());

    return [...redDaysThisYear, ...redDaysNextYear];
  });

  return redDaysPromise;
}

export default getRedDays