const Box = (props) => {
  const { className, message } = props;
  const containerClassName = `container ${className}`;

  return (
    <div className={containerClassName}>
      <p className="info-para">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="main-heading">Boxes</h1>
    <div className="sub-container">
      <Box className="small-container" message="Small" />
      <Box className="medium-container" message="Medium" />
      <Box className="large-container" message="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
