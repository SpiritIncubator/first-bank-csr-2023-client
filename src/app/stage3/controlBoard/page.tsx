'use client'
import Button from '@/app/_components/Button/Button';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import { STAGE3_ROOM } from '@/constants'

export default function ControlBoard() {
  const { registerRoomHelper } = useSubscribe({ channel: 'subscribeChannel', room: 'stage3_controlBoard' });
  const { sendEvent } = registerRoomHelper();

  const onClickStart = () => {
    sendEvent({ messageType: 'start' });
  }
  return (
    <div>
      <h1>ControlBoard</h1>
      <Button onClick={onClickStart} width="200px">
        Start
      </Button>
    </div>
  )
}