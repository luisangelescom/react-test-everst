function LoadingData(): JSX.Element {
  return (
    <div className="center-loading">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1>Loading</h1>
    </div>
  );
}

export default LoadingData;
