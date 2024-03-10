/** @format */
"use client"
import { useState, useEffect, useRef, useCallback } from 'react';
// import io, { Socket } from 'socket.io-client';
import Websocket from '../service/subscription';
// const SOCKET_URL = 'http://localhost:3030';
const SOCKET_URL = 'https://firstcommercialbank-9ac085739969.herokuapp.com/';



type MessageEventType<T> = {
	channel?: string;
	handler?: (msg: T) => void;
};

type MessagePayload = {
	messageType: any;
};

type SubscriptionResponse = {
	messageType: any;
};

type SubscriptionType = {
	channel: string;
	room?: string;
};

	const ws = new Websocket({ channel: 'subscribeChannel', room: 'stage3_controlBoard' });

export const useSubscribe = <
	T,
	U extends SubscriptionResponse = any
>({
	channel,
	room = '',
}: SubscriptionType) => {

	// const socketHandler = useRef<Socket | null>(null);
	// const [subscription, setSubscription] = useState<SubscriptionType>(() => ({
	// 	channel,
	// 	room,
	// }));
	// const socketHandler = new WebSocket({ channel, room });
	const registerRoomHelper = useCallback(() => {
	
		// socketHandler.current?.emit(subscription.channel, {
		// 	room: subscription.room,
		// });

		function sendEvent(message: T) {
			// socketHandler.current?.emit('sendRoomMsg', {
			// 	room: subscription.room,
			// 	message,
			// });
			console.log('sendEvent', message);
			ws.sendEvent(message);
		}

		function receivedEvent(callback: (msg: U) => void) {
			// socketHandler.current?.on(subscription.room!, callback);
			
			ws.receivedEvent(callback);
		}

		function leaveRoomEvent() {
			// socketHandler.leaveRoomEvent();
			// socketHandler.current?.emit('leaveRoom', { room: subscription.room! });
		}

		// function changeRoomEvent(newRoomId: string) {
		// 	setSubscription((prevState) => ({ ...prevState, room: newRoomId }));
		// }

		return { sendEvent, receivedEvent, leaveRoomEvent };
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);



	useEffect(() => {
		return () => {
			ws.destroyConnection();
		};
	}, []);

	return {
		registerRoomHelper,
	};
};
