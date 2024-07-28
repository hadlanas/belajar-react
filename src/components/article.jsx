function InfoStatus({ status }) {
  return status && <span>--baru</span>;
}

function Article(props) {
  return (
    <>
      <div>{props.title}</div>
      <small>
        date: {props.date}, tag:{props.tag.join(", ")},
        <InfoStatus status={props.status} />
      </small>
    </>
  );
}

export default Article;
