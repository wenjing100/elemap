function bd(ctx: CanvasRenderingContext2D, c: string, w: number) {
  ctx.beginPath();
  ctx.strokeStyle = c;
  ctx.lineWidth = w;
}

export {
  bd
}