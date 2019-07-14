import React from 'React';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = () => {
	return (
		<View style={styles.spinner}>
			<ActivityIndicator size='large' />
		</View>
	)
}

const styles = StyleSheet.create({
	spinner: {
		flex: -1,
		marginTop: 12,
		marginBottom: 12, 
		position:'absolute', 
		top:0, 
		bottom:0, 
		left:0, 
		right:0, 
		padding:10
	}
}) 

export default Loading; 