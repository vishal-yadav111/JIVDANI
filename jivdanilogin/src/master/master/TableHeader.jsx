
import { Color } from "../../visitConstant/Color";

export const TableHeader = ({ headerName }) => {
  return (
    <thead
      className="table-light sticky-top "
      style={{
        width: "100%",
        backgroundColor: Color.header,
        height: "45px",
        verticalAlign: "middle",
        color: Color.graydark,
        fontSize: 14,
      }}
    >
      <tr>
        {headerName.map((item, index) => (
          <th
            className={` ${
              index == headerName.length - 1
                ? "pe-4  text-end"
                : "ps-2 text-start"
            }`}
            key={index}
            style={{
              width: item?.w,
            }}
          >
            {item?.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};
