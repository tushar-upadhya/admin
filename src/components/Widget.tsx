import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

interface IWidgetProps {
  heading: string;
  value: number;
  percentage: number;
  color: string;
  amount?: boolean;
}

const Widget = ({
  heading,
  color,
  percentage,
  value,
  amount,
}: IWidgetProps) => {
  return (
    <article className="widget">
      <div className="widget_info">
        <p>{heading}</p>
        <h4>{amount ? `${value}` : value}</h4>

        {percentage > 0 ? (
          <span className="green">
            <HiTrendingUp /> + {percentage}
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown /> - {percentage} %{" "}
          </span>
        )}
      </div>

      <div
        className="widget_circle"
        style={{
          background: `conic-gradient(
            ${color} ${(Math.abs(percentage) / 100) * 360}deg,
            rgb(255, 255, 255) 0
          )`,
        }}
      >
        <span
          style={{
            color,
          }}
        >
          {percentage} %
        </span>
      </div>
    </article>
  );
};

export default Widget;
