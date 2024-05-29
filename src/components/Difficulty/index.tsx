import { FC } from "react";
import { capitalizeString, getColors } from "./utils";
import { DifficultyType } from "../../types/questions";

interface Props {
  difficulty: DifficultyType;
}

export const DifficultyBadge: FC<Props> = ({ difficulty }) => {
  const { first, second, third } = getColors(difficulty);

  return (
    <div
      style={{
        verticalAlign: "middle",
      }}
    >
      <svg
        data-v-10f0ce1a=""
        className="h-icon difficulty-level easy-level align-baseline"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="rgb(220, 220, 220)"
        xmlns="http://www.w3.org/2000/svg"
        data-component-name="DifficultyLevelIcon"
      >
        <rect
          x="4"
          y="16"
          width="4"
          height="8"
          rx="1"
          transform="rotate(-180 4 16)"
          fill={first}
        ></rect>
        <rect
          x="10"
          y="16"
          width="4"
          height="12"
          rx="1"
          transform="rotate(-180 10 16)"
          fill={second}
        ></rect>
        <rect
          x="16"
          y="16"
          width="4"
          height="16"
          rx="1"
          transform="rotate(-180 16 16)"
          fill={third}
        ></rect>
      </svg>
      <span
        style={{
          marginLeft: ".4rem",
        }}
      >
        {capitalizeString(difficulty)}
      </span>
    </div>
  );
};
