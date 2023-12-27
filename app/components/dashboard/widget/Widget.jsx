import "./widget.scss";

const Widget = ({ rate, label, value }) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-12 mx-auto py-2 p-0 px-2">
      <div className="widget px-4">
        <div className="d-flex items-center">
          <h6 className="title">{label}</h6>
        </div>
        <div className="d-flex items-center justify-between">
          <div className="counter">{value}</div>
          <div className="rate float-right">+11.01%</div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
