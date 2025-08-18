"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface Commit {
  id: string;
  x: number;
  y: number;
  parentId?: string;
  opacity: number;
  size: number;
  color: string;
  children: string[];
}

const COLORS = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"];

const GitGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const commitsRef = useRef<Commit[]>([]);
  const nextIdRef = useRef(0);
  const viewportOffsetRef = useRef(0);
  const lastFrameTimeRef = useRef(0);
  const canvasRealSizeRef = useRef({ width: 0, height: 0 });

  const createRootCommit = useCallback(() => {
    const { width } = canvasRealSizeRef.current;
    const rootCommit: Commit = {
      id: "root",
      x: width / 2,
      y: 50,
      opacity: 1,
      size: 15,
      color: "#ffffff",
      children: [],
    };
    commitsRef.current = [rootCommit];
    nextIdRef.current = 1;
  }, []);

  const createChildCommit = useCallback((parentCommit: Commit): Commit => {
    const childId = `commit-${nextIdRef.current++}`;
    const spreadAngle = ((Math.random() - 0.5) * Math.PI) / 1.5;
    const distance = 100 + Math.random() * 80;
    const { width } = canvasRealSizeRef.current;

    const newCommit: Commit = {
      id: childId,
      x: Math.max(
        10,
        Math.min(width - 10, parentCommit.x + Math.sin(spreadAngle) * distance)
      ),
      y: parentCommit.y + Math.cos(spreadAngle) * distance,
      parentId: parentCommit.id,
      opacity: 1,
      size: 8 + Math.random() * 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      children: [],
    };

    parentCommit.children.push(childId);
    return newCommit;
  }, []);

  const drawCommit = useCallback(
    (ctx: CanvasRenderingContext2D, commit: Commit, viewportOffset: number) => {
      const screenY = commit.y - viewportOffset;

      if (screenY < -100 || screenY > ctx.canvas.height + 100) return;

      ctx.globalAlpha = commit.opacity;
      ctx.fillStyle = commit.color;
      ctx.shadowColor = commit.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(commit.x, screenY, commit.size, 0, Math.PI * 2);
      ctx.fill();
    },
    []
  );

  const drawConnection = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      parent: Commit,
      child: Commit,
      viewportOffset: number
    ) => {
      const parentScreenY = parent.y - viewportOffset;
      const childScreenY = child.y - viewportOffset;

      if (
        Math.max(parentScreenY, childScreenY) < -100 ||
        Math.min(parentScreenY, childScreenY) > ctx.canvas.height + 100
      ) {
        return;
      }

      ctx.globalAlpha = Math.min(parent.opacity, child.opacity) * 0.6;
      ctx.strokeStyle = parent.color;
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.moveTo(parent.x, parentScreenY);
      ctx.lineTo(child.x, childScreenY);
      ctx.stroke();
    },
    []
  );

  const animate = useCallback(
    (currentTime: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      if (currentTime - lastFrameTimeRef.current < 16.67) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimeRef.current = currentTime;

      viewportOffsetRef.current += 0.5;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.08) {
        const eligibleParents = commitsRef.current.filter(
          (commit) => commit.children.length < 5
        );

        if (eligibleParents.length > 0) {
          const randomParent =
            eligibleParents[Math.floor(Math.random() * eligibleParents.length)];
          const newCommit = createChildCommit(randomParent);
          commitsRef.current.push(newCommit);
        }
      }

      if (Math.random() < 0.02) {
        const eligibleParents = commitsRef.current.filter(
          (commit) => commit.children.length < 3
        );

        if (eligibleParents.length > 0) {
          const randomParent =
            eligibleParents[Math.floor(Math.random() * eligibleParents.length)];
          const branchCount = 2 + Math.floor(Math.random() * 2);

          for (let i = 0; i < branchCount; i++) {
            const newCommit = createChildCommit(randomParent);
            commitsRef.current.push(newCommit);
          }
        }
      }

      const minY = viewportOffsetRef.current - 100;
      commitsRef.current = commitsRef.current.filter(
        (commit) => commit.y > minY
      );

      if (viewportOffsetRef.current > 1500 || commitsRef.current.length > 500) {
        viewportOffsetRef.current = 0;
        commitsRef.current = [];
        createRootCommit();
      }

      ctx.save();

      for (const commit of commitsRef.current) {
        if (commit.parentId) {
          const parent = commitsRef.current.find(
            (c) => c.id === commit.parentId
          );
          if (parent) {
            drawConnection(ctx, parent, commit, viewportOffsetRef.current);
          }
        }
      }

      for (const commit of commitsRef.current) {
        drawCommit(ctx, commit, viewportOffsetRef.current);
      }

      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    },
    [createChildCommit, drawCommit, drawConnection, createRootCommit]
  );

  useEffect(() => {
    console.log(
      "%c" +
        "██╗  ██╗██╗   ██╗██╗████████╗" +
        "\n" +
        "██║ ██╔╝██║   ██║██║╚══██╔══╝" +
        "\n" +
        "█████╔╝ ██║   ██║██║   ██║   " +
        "\n" +
        "██╔═██╗ ██║   ██║██║   ██║   " +
        "\n" +
        "██║  ██╗╚██████╔╝██║   ██║   " +
        "\n" +
        "╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝   " +
        "\n\n" +
        "🚀 개발자 모드를 연 당신! KUIT 해커톤에 참가하세요 >.< 🚀" +
        "\n\n" +
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "color: #9ACD32; font-weight: bold; font-family: monospace; font-size: 12px;"
    );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      const oldWidth = canvasRealSizeRef.current.width;
      const newWidth = window.innerWidth;
      const widthRatio = oldWidth > 0 ? newWidth / oldWidth : 1;

      canvasRealSizeRef.current = {
        width: newWidth,
        height: window.innerHeight,
      };

      canvas.width = newWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = newWidth + "px";
      canvas.style.height = window.innerHeight + "px";

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
        ctx.imageSmoothingEnabled = false;
      }

      if (oldWidth > 0 && widthRatio !== 1) {
        commitsRef.current.forEach((commit) => {
          commit.x = Math.max(
            10,
            Math.min(newWidth - 10, commit.x * widthRatio)
          );
        });
      }

      if (commitsRef.current.length === 0) {
        createRootCommit();
      }
    };

    resizeCanvas();

    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };

    window.addEventListener("resize", debouncedResize);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createRootCommit, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        background:
          "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #0c0c0c 100%)",
        zIndex: -1,
      }}
    />
  );
};

export default GitGraph;
