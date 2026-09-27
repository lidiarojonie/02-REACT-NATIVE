import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Diseño de interfaces con React Native</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </View>
      </View>
      <View style={styles.card2}>
        <Text style={styles.title2}>¡Bienvenido!</Text>
        <Text style={styles.subtitle2}>Diseño de interfaces con React Native</Text>
        <View style={styles.button2}>
          <Text style={styles.buttonText2}>COMENZAR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#eef2f7',
  },
  card: {
    backgroundColor: 'white',
    padding: 28,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card2: {
    backgroundColor: '#3b3b3b',
    padding: 28,
    borderRadius: 20,
    marginTop: 10,
  },
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  subtitle2: {
    marginTop: 10,
    fontSize: 16,
    color: '#b2b3b3',
    textAlign: 'center',
  },
  button2: {
    marginTop: 24,
    backgroundColor: '#29c019',
    padding: 15,
    borderRadius: 12,
  },
  buttonText2: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});