import * as React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function ApiScreen() {
	const [users, setUsers] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				// 요청이 시작 할 때에는 error 와 users 를 초기화하고
				setError(null);
				setUsers(null);
				// loading 상태를 true 로 바꿉니다.
				setLoading(true);
				const response = await axios.get('http://10.177.193.15:8080/user/all');
				setUsers(response.data); // setUsers로 response.data 값 넣기
			} catch (e) {
				setError(e);
			}
			setLoading(false);
		};

		fetchUsers();
	}, []);

	if (loading) return <Text>로딩중..</Text>;
	if (error) return <Text>에러가 발생했습니다</Text>;
	if (!users) return null;
	return (
		<View>
			<Text style={styles.title}>Server api test</Text>
			<Text style={styles.api}>
				{users.map(user => (
					<Text key={user.id}>
						{user.id}-{user.name}-{user.phone}-{user.address}
					</Text>
				))}
				{/* {users.id}-{users.name}-{users.phone}-{users.address} */}
			</Text>
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
});
