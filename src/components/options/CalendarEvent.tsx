export const Event = ({ event }: any) => {
  return (
    <span style={{ border: "2px dashed red" }}>
      <strong>{event.title}</strong>
      {event.desc && ":  " + event.desc}
    </span>
  );
};
