import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./Box";

const Boxes = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <div className="boxes">
      {[...Array(count)].map((item, itemindex) => (
        <Box key={itemindex} num={itemindex + 1} />
      ))}
    </div>
  );
};

export default Boxes;
