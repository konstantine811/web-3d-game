import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { isMouseDragging, onMousePosition } from "../store/slices/eventSlice";

const useMouseEvent = () => {
  const dispatch = useDispatch();
  const onMouseUp = useCallback(() => {
    dispatch(isMouseDragging(false));
  }, [dispatch]);

  const onMouseDown = useCallback(() => {
    dispatch(isMouseDragging(true));
  }, [dispatch]);

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      dispatch(onMousePosition({ x: event.clientX, y: event.clientY }));
    },
    [dispatch]
  );

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseDown, onMouseMove, onMouseUp]);
  return;
};

export default useMouseEvent;
