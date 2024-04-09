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


const getRedDays = async () => {

  const thisYear: Date = new Date();
  const fetchThisYear: string = "http://sholiday.faboul.se/dagar/v2.1/" + thisYear.getFullYear()
  const fetchNextYear: string = "http://sholiday.faboul.se/dagar/v2.1/" + (thisYear.getFullYear() + 1);
  let redDays: Date[] = [];

  console.log(fetchThisYear);
  console.log(fetchNextYear);
  
  await fetch(fetchThisYear)
  .then(res => res.json())
  .then(data => { 
    redDays = data.dagar
      .filter((day: Day) => day["röd dag"] === "Ja")
      .map((day: Day) => new Date(day.datum).toDateString); 
  });

  await fetch(fetchNextYear)
  .then(res => res.json())
  .then(data => {
    redDays = [...redDays, ...data.dagar
      .filter((day: Day) => day["röd dag"] === "Ja")
      .map((day: Day) => new Date(day.datum).toDateString())]; 
  });

  console.log(redDays);
}

export default getRedDays