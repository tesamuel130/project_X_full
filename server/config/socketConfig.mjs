export const socketConfig = (io) => {
  io.on("connection", (socket) => {
    socket.emit("me", socket.id);

    socket.on("disconnect", () => {
      socket.brodcast.emit("callEnded");
    });

    socket.on("callUser", (data) => {});
  });
};
