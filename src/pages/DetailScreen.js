import * as React from 'react';
import {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {children: []};
  }
  componentDidMount() {
    axios
      .get('https://www.reddit.com/.json?sort=new&limit=10')
      .then(response => {
        this.setState({children: response.data.data.children});
      });
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.api_txt}>Reddit API</Text>
        {this.state.children.map(value => (
          <Text key={value.data.id}>
            {value.data.id}-{value.data.title}
          </Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  api_txt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#bea',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
