import {LoadGeneralStorageValueUseCase} from '@/core/shared/application/general-value/LoadGeneralStorageValueUseCase';
import {SOCKET_URL} from '@/core/shared/domain/Constants';
import {SharedLocator} from '@/core/shared/domain/SharedLocator';
import {StorageKeys} from '@/core/shared/domain/StorageKeys';
import {SharedContainer} from '@/core/shared/sharedContainer';
import io, {Socket} from 'socket.io-client';

class SocketIOUtil {
  private static instance: SocketIOUtil;
  socket: Socket;

  private constructor() {
    const socketUrl = SOCKET_URL;
    this.socket = io(socketUrl, {
      reconnection: true,
      reconnectionDelay: 4000,
      transports: ['websocket'],
    });
  }

  public static getInstance(): SocketIOUtil {
    if (!SocketIOUtil.instance) {
      SocketIOUtil.instance = new SocketIOUtil();
    }
    return SocketIOUtil.instance;
  }

  createSocketListener(eventName: string, callback: any) {
    this.connect();
    SocketIOUtil.getInstance().socket.on(eventName, callback);
  }

  connect() {
    if (SocketIOUtil.getInstance().socket) {
      if (SocketIOUtil.getInstance().socket.connected) {
        return;
      }
      SocketIOUtil.getInstance().socket.connect();
      return;
    }
    const usecase = SharedContainer.get<LoadGeneralStorageValueUseCase>(
      SharedLocator.LoadGeneralStorageValueUseCase,
    );
    const token = usecase.get(StorageKeys.TOKEN);
    SocketIOUtil.getInstance().socket.removeAllListeners();
    SocketIOUtil.getInstance().socket.on('connect', async () => {
      // Verify identity
      const loginInfo = {
        app: 'DRIVER',
        clientId: 'APP',
        remToken: '',
        token,
      };
      SocketIOUtil.getInstance().socket.emit('login', loginInfo, () => {});

      SocketIOUtil.getInstance().socket = this.socket;
    });
  }
}

export default SocketIOUtil;
