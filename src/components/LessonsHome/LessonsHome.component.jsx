function LessonsHome(props) {

  return (
      <>
        {props.lessons.map((i) =>
          <p>{JSON.stringify(i)}</p>
        )}
      </>
  );

};

export default LessonsHome;
