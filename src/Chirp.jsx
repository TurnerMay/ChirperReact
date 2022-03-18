const Chirp = (props) => {
  return (
    <>
      <div className="m-2">
        <div className="card">
          <div className="card-header p-0">
            <div className="card-body media-body">
              <h5 className="d-inline font-weight-bold">{props.username}</h5>
              <h6 className="text-muted">{props.message}</h6>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Chirp;
