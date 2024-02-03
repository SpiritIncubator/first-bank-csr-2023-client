/** @format */
"use client"
import { useState, useEffect, useRef, useCallback } from 'react';
import io, { Socket } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3030';

type MessageEventType<T> = {
	channel?: string;
	handler?: (msg: T) => void;
};

type MessagePayload = {
	message: any;
};

type SubscriptionResponse = {
	message: any;
};

type SubscriptionType = {
	channel: string;
	room?: string;
};

export const useSubscribe = <
	T extends MessagePayload,
	U extends SubscriptionResponse = any
>({
	channel,
	room = '',
}: SubscriptionType) => {
	const [connection, setConnection] = useState(false);
	const socketHandler = useRef<Socket | null>(null);
	const [subscription, setSubscription] = useState<SubscriptionType>(() => ({
		channel,
		room,
	}));

	const registerRoomHelper = useCallback(() => {
		socketHandler.current?.emit(subscription.channel, {
			room: subscription.room,
		});

		function sendEvent(message: T) {
			socketHandler.current?.emit('sendRoomMsg', {
				room: subscription.room,
				message,
			});
		}

		function receivedEvent(callback: (msg: U) => void) {
			socketHandler.current?.on(subscription.room!, callback);
		}

		function leaveRoomEvent() {
			socketHandler.current?.emit('leaveRoom', { room: subscription.room! });
		}

		function changeRoomEvent(newRoomId: string) {
			setSubscription((prevState) => ({ ...prevState, room: newRoomId }));
		}

		return { sendEvent, receivedEvent, leaveRoomEvent, changeRoomEvent };
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [subscription.channel, subscription.room]);

	function receivedConnection() {
		setConnection(true);
	}

	useEffect(() => {
		const socket = io(SOCKET_URL);
		socketHandler.current = socket;
		socketHandler.current.on('connect', receivedConnection);

		return () => {
			setConnection(false);
			socket.disconnect();
		};
	}, []);

	return {
		connection,
		registerRoomHelper,
	};
};
