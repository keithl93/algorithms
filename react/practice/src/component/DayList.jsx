import dummy from "../db/data.json";

function DayList() {
  console.log(dummy);
  return (
    <>
      <ul className="list_day">
        {dummy.days.map((day) => (
          <li key={day.id}>Day {day.day}</li>
        ))}
        <li></li>
      </ul>
    </>
  );
}

export default DayList;
