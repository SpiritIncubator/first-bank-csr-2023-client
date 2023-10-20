'use client'
import styles from './page.module.css'
import { useSubscribe } from './hooks/useSubscribe'

export default function Home() {
  const { registerSubscriptionEvent } = useSubscribe();
  const { sendMessage } = registerSubscriptionEvent({channel: 'chat', handler: receivedMessage});

  function receivedMessage(msg: any) {} 

  return (
    <main className={styles.main}>
      <button onClick={() => sendMessage({message: {now: new Date()}})}>send</button>
    </main>
  )
}
