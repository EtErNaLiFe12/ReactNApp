import * as React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function DbServerScreen() {
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		const response = await axios.get(
			'http://10.177.198.253:8080/memberTest/all',
		);
		console.log('res', response);
		setUsers(response.data); // setUsers로 response.data 값 넣기
	};
	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<View>
			<Text style={styles.title}>Server + DB test</Text>
			<Text style={styles.api}>
				{users.map(user => (
					<Text key={user.mbrNo}>
						{user.id}-{user.name}
						{'\n'}
					</Text>
				))}
			</Text>
			<Button style={styles.reload} onPress={fetchUsers} title="Reload" />
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fb5849',
		textAlign: 'center',
	},
	api: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
		textAlign: 'left',
		marginTop: 20,
	},
	// reload: {
	// 	width: 150,
	// 	height: 50,
	// 	fontSize: 20,
	// 	backgroundColor: '#333',
	// 	color: '#fff',
	// 	lineHeight: 50,
	// 	textAlign: 'center',
	// 	marginLeft: 50,
	// 	borderRadius: 10,
	// },
});
