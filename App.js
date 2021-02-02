import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
     timer: 0,
     buttonStart:'START',
     buttonStop: 'STOP',
     last: null
    }

    this.timer = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    
  }

  start(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;

      this.setState({buttonStart:'START'});
    }else {
      this.timer = setInterval(() => {
        this.setState({timer: this.state.timer + 0.1 })
      }, 100);

      this.setState({buttonStart:'PAUSE'})
    }
  }

  stop(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;

      this.setState({
        buttonStop:'CLEAR',
        buttonStart:'START'
      });
  } else {
    this.timer == null;
    this.setState({
      last: this.state.timer,
      timer: 0,
      buttonStop: 'STOP',
      buttonStart:'START'
    })
  }
}

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
  
        <Image 
          source={require('./src/cronometro.png')}
          style={ styles.cronometro} 
        />
  
        <Text style={styles.timer}>{ this.state.timer.toFixed(2) }</Text>
  
        <View style={styles.buttonArea}>
  
          <TouchableOpacity style={styles.buttonStart} onPress={this.start}>
            <Text style={styles.buttonText}>{this.state.buttonStart}</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.buttonStop} onPress={this.stop} >
            <Text style={styles.buttonText}>{this.state.buttonStop}</Text>
          </TouchableOpacity>
        
        </View>

        <View style={styles.lastArea}>
          <Text style={styles.lastText}>
            {this.state.last > 0 ? 'Last time scored:' + this.state.last.toFixed(1) : ''}
          </Text>
        </View>
  
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#9F7CF4'
  },
  timer:{
    marginTop:-160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  buttonArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  buttonStart:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#0ABA1D',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  buttonStop:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F70C0C',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  lastArea: {
    marginTop: 45
  },
  lastText: {
    fontSize: 25,
    color:'#fff'
  }
});

export default App;