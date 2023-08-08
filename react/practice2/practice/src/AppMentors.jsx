import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentors: [
      {
        name: "밥",
        title: "시니어개발자",
      },
      {
        name: "제임스",
        title: "시니어개발자",
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name == prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            }),
          }));
        }}
      >
        멘토의 이름을 바꾸기
      </button>
      <button
        onClick={() => {
          const newMentor = prompt(`추가하고 싶은 멘토의 이름이 뭐냐?`);
          const newTitle = prompt(`새로운 멘토의 타이틀이 뭐냐?`);
          setPerson((person) => ({
            ...person,
            mentors: [...person.mentors, { name: newMentor, title: newTitle }],
          }));
        }}
      >
        멘토 추가하기
      </button>
      <button
        onClick={() => {
          const deleteOne = prompt(`없애버리고 싶은 놈이 누구냐?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.filter((m) => m.name !== deleteOne),
          }));
        }}
      >
        멘토 삭제하기
      </button>
    </div>
  );
}
