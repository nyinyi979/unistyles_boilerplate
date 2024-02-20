import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Button from './lib/ui/button';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import DatePicker from './lib/ui/calendar';

export default function App() {
  const {styles} = useStyles(styleSheet);
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <View style={styles.container}>
        <Button title='HELLO' variant='primary'/>
        <DatePicker />
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

const styleSheet = createStyleSheet((theme)=>({
  container:{
    flex:1,
    backgroundColor: theme.color['base'],
    padding: 2,
  }
}))