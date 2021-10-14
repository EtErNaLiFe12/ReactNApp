import * as React from 'react';
import DbServerData from '@components/DbServerData';
import {View, Text, Button} from 'react-native';
import {useState, useEffect} from 'react';


export default function DbServerScreen() {
	const fetchUsers = async () => {
		const response = await axios.get(
			'http://10.177.193.15:8080/memberTest/all',
		);
		console.log('res', response);
		setUsers(response.data); // setUsers로 response.data 값 넣기
	};
	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<View>
			<View>
				<DbServerData/>
				<DbServerData/>
			</View>
			<Button onPress={fetchUsers} title="Reload" />
		</View>
	);
}