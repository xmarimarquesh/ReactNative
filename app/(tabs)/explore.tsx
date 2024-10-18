import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text} from 'react-native';


export default function TabTwoScreen() {
  return (
    <>
      <Text>PAGINA PARA ESTUO DOS COMPONNTES RACT NATIVE</Text>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
