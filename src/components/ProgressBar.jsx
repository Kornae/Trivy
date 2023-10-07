import React, { useEffect, useRef } from "react";

const ProgressBar = ({ value, max, width = '100%', className = "" }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        const SVG_DASHARRAY_MAX = 126;
        const dashOffset = Math.round((value * SVG_DASHARRAY_MAX) / max);

        const svg = svgRef.current;
        if (!svg) return;

        const style = document.createElement("style");
        style.textContent = `
      @keyframes progress {
        from { stroke-dashoffset: ${SVG_DASHARRAY_MAX}; }
        to { stroke-dashoffset: ${SVG_DASHARRAY_MAX - dashOffset}; }
      }
    `;

        const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttribute("d", "M20,50 A10,10 0 1,1 100,50");
        path1.setAttribute("fill", "none");
        path1.setAttribute("stroke-linecap", "round");
        path1.setAttribute("stroke-width", "6");
        path1.setAttribute("stroke", "#eaedf1 ");

        const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttribute("d", "M20,50 A10,10 0 1,1 100,50");
        path2.setAttribute("fill", "none");
        path2.setAttribute("stroke-linecap", "round");
        path2.setAttribute("stroke-width", "6");
      path2.setAttribute("stroke", "#abdbe3");
        path2.setAttribute("stroke-dasharray", SVG_DASHARRAY_MAX);
        path2.setAttribute("stroke-dashoffset", SVG_DASHARRAY_MAX);
        path2.style.animation = "progress 1s ease-out forwards";

        svg.innerHTML = "";
        svg.appendChild(style);
        svg.appendChild(path1);
        svg.appendChild(path2);
    }, [value, max, svgRef]);

    return (
        <svg ref={svgRef} viewBox="0 0 120 60" width={width.toString()} className={className} />
    );
};

export default ProgressBar;
