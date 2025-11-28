import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function Dock({ items }) {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="dock-container"
    >
      {items.map((item, i) => (
        <AppIcon mouseX={mouseX} key={i} item={item} />
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseX, item }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="dock-icon"
      onClick={item.onClick}
    >
      <i className={`bi ${item.icon}`} style={{ fontSize: "1.5rem", color: "white" }}></i>
    </motion.div>
  );
}

export default Dock;
