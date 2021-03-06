import styled from "styled-components";

type DotGridProps = {
  className?: string;
  width?: number;
  height?: number;
  space?: number;
  radius?: number;
  fill?: string;
};

function DotGrid({
  className,
  width = 10,
  height = 10,
  space = 10,
  radius = 1.5,
  fill = "#000",
}: DotGridProps) {
  const viewWidth = width * radius * 2 + (width - 1) * (space - radius * 2);
  const viewHeight = height * radius * 2 + (height - 1) * (space - radius * 2);
  let dots = [];

  for (let indexWidth = 0; indexWidth < width; indexWidth++) {
    for (let indexHeight = 0; indexHeight < height; indexHeight++) {
      dots.push(
        <circle
          key={`${indexWidth}-${indexHeight}`}
          cx={radius + indexWidth * space}
          cy={radius + indexHeight * space}
          r={radius}
        />,
      );
    }
  }

  return (
    <svg
      className={className}
      width={viewWidth}
      height={viewHeight}
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      version="1.1"
    >
      <g fill={fill}>{dots}</g>
    </svg>
  );
}

export default styled(DotGrid)``;
