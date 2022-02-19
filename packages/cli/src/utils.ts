import os from 'os';
import net from 'net';

export function findRemoteHost() {
  return Object.values(os.networkInterfaces()).flatMap((v) =>
    (v || []).filter(
      (details) => details.family === 'IPv4' && !details.address.includes('127.0.0.1')
    )
  );
}

export async function findFreePort(start: number): Promise<number> {
  function isPortFree(port: number) {
    return new Promise((resolve) => {
      const server = net.createServer((socket) => {
        socket.write('Echo server\r\n');
        socket.pipe(socket);
      });

      server.listen(port, '127.0.0.1');
      server.on('error', () => {
        resolve(false);
      });
      server.on('listening', () => {
        server.close();
        resolve(true);
      });
    });
  }

  if (await isPortFree(start)) return start;
  return findFreePort(start + 1);
}