import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
const MatchPairsModalShow = (props) => {
  const { data } = props;
  console.log(data);

  const getAbjadForOptionDup = (abjad) => {
    let result = data.options.find((r) => r.userAnswer === abjad);
    if (!result) return <CircleOutlinedIcon className="fs-17" />;
    return result.abjad;
  };
  const getColorForOptionDup = (abjad) => {
    let result = data.options.find((r) => r.userAnswer === abjad);
    if (!result) return "#D4D7DB";
    return result.color;
  };

  const getBorderColor = (userAnswer, abjad) => {
    if (userAnswer !== abjad) return "border-danger-400";
    if (userAnswer === abjad) return "border-success-600";
    if (!userAnswer) return "border-neutral-100";
  };

  const handleTextLeftView = (r, i) => {
    return (
      <div className="col-6 mb-24 d-flex align-items-center">
        <div
          className={`w-full radius-bl-4   ${getBorderColor(
            r.userAnswer,
            r.abjad
          )}   border radius-tl-4 font-sm  py-8 px-16 `}
        >
          {r.question}
        </div>
        <div
          className={`w-full w-52 h-36  radius-br-4 radius-tr-4 d-flex align-items-center justify-content-center`}
          style={{
            border: `1px solid ${r.userAnswer ? r.color : "#D4D7DB"}`,
            backgroundColor: r.userAnswer ? r.color : "#D4D7DB",
          }}
        >
          {r.userAnswer ? r.abjad : <CircleOutlinedIcon className="fs-17" />}
        </div>
      </div>
    );
  };

  const handleTextRightView = (r, i) => {
    return (
      <div className="col-6 d-flex align-items-center mb-24 ">
        <div
          className=" w-52 h-36  radius-bl-4 radius-tl-4 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: getColorForOptionDup(data.options_dup[i].abjad),
            border: `1px solid ${getColorForOptionDup(
              data.options_dup[i].abjad
            )}`,
          }}
        >
          {getAbjadForOptionDup(data.options_dup[i].abjad)}
        </div>
        <div className="w-full">
          <div
            className={`radius-br-4 radius-tr-4 font-sm border py-8 px-16  ${
              checkAnswer(data.options_dup[i].abjad, r.abjad)
                ? "border-success-600 "
                : "border-danger-500"
            }`}
          >
            {data.options_dup[i].answer}
          </div>
        </div>
      </div>
    );
  };

  const handleImageLeftView = (r, i) => {
    return (
      <div className="col-6 mb-24 d-flex align-items-center position-relative">
        <div className={` w-full`}>
          <img
            src={r.question}
            alt=""
            className={`w-full   radius-16 ${getBorderColor(
              r.userAnswer,
              r.abjad
            )}`}
            style={{ border: "2px dashed" }}
          />
        </div>
        <div
          className=" w-52 h-36 ml-4 radius-br-4 radius-tr-4 d-flex align-items-center justify-content-center"
          style={{
            border: `1px solid ${r.color}`,
            backgroundColor: r.color,
          }}
        >
          {r.abjad}
        </div>
        <div className={`position-absolute bottom-8`} style={{ left: "40%" }}>
          {r.abjad !== r.userAnswer ? (
            <CancelIcon className="fs-20 text-danger-400" />
          ) : (
            <CheckCircleOutlineOutlinedIcon className="fs-20 text-success-600" />
          )}
        </div>
      </div>
    );
  };

  const checkAnswer = (abjad) => {
    let result = data.options.find((r) => r.userAnswer === abjad);
    if (result) {
      if (result.abjad === result.userAnswer) {
        return true;
      }
    }
    return false;
  };

  const handleImageRightView = (r, i) => {
    return (
      <div className="col-6 d-flex align-items-center  mb-24 position-relative">
        <div
          className=" w-52 h-36  radius-bl-4 radius-tl-4 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: getColorForOptionDup(data.options_dup[i].abjad),
            border: `1px solid ${getColorForOptionDup(
              data.options_dup[i].abjad
            )}`,
          }}
        >
          {getAbjadForOptionDup(data.options_dup[i].abjad)}
        </div>
        <div className="w-full">
          <div>
            <img
              src={data.options_dup[i].question}
              alt=""
              className={`w-full h-full  radius-16  ${
                checkAnswer(data.options_dup[i].abjad, r.abjad)
                  ? "border-success-600 "
                  : "border-danger-500"
              }`}
              style={{ border: "2px dashed" }}
            />
          </div>
        </div>
        <div className={`position-absolute bottom-8`} style={{ left: "55%" }}>
          {!checkAnswer(data.options_dup[i].abjad, r.abjad) ? (
            <CancelIcon className="fs-20 text-danger-400" />
          ) : (
            <CheckCircleOutlineOutlinedIcon className="fs-20 text-success-600" />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="card-content   ">
      <div className="row px-40 gx-0">
        {data.options.map((r, i) => {
          return (
            <div className="col-12" key={"left" + i}>
              <div className="row">
                {r.question.includes("data:image/")
                  ? handleImageLeftView(r, i)
                  : handleTextLeftView(r, i)}{" "}
                {data.options_dup[i].question.includes("data:image/")
                  ? handleImageRightView(r, i)
                  : handleTextRightView(r, i)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MatchPairsModalShow;
