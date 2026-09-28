import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Buen ritmo,</Text>
      <Text style={styles.user}>Nerea 👋</Text>

      <View style={styles.goalCard}>
        <Text style={styles.goalLabel}>META DE MOVIMIENTO</Text>
        <Text style={styles.steps}>9.280</Text>
        <Text style={styles.stepsLabel}>pasos de 12.000</Text>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.percentage}>77% completado</Text>
      </View>

      <Text style={styles.sectionTitle}>Tu resumen</Text>

      <View style={styles.grid}>
        <StatCard icon="🔥" value="684" label="kcal activas" />
        <StatCard icon="⏱" value="1 h 12" label="en movimiento" />
        <StatCard icon="❤️" value="68" label="ppm en reposo" />
        <StatCard icon="📍" value="8,4 km" label="distancia" />
      </View>

      <Text style={styles.sectionTitle}>Últimos entrenos</Text>
      <Activity title="Paseo matinal" detail="3,1 km · 36 min" />
      <Activity title="Entreno funcional" detail="32 min · 214 kcal" />
    </ScrollView>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Activity({ title, detail }: { title: string; detail: string }) {
  return (
    <View style={styles.activity}>
      <View>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activityDetail}>{detail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f5ef',
    paddingHorizontal: 20,
  },
  greeting: {
    marginTop: 60,
    color: '#71817a',
    fontSize: 17,
  },
  user: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  goalCard: {
    backgroundColor: '#173b35',
    padding: 24,
    borderRadius: 18,
  },
  goalLabel: {
    color: '#b8c9be',
    fontWeight: 'bold',
  },
  steps: {
    marginTop: 12,
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
  },
  stepsLabel: {
    color: '#d7e2d9',
  },
  progressBackground: {
    height: 10,
    backgroundColor: '#36564e',
    borderRadius: 5,
    marginTop: 24,
    overflow: 'hidden',
  },
  progress: {
    width: '77%',
    height: '100%',
    backgroundColor: '#c7f36b',
  },
  percentage: {
    color: '#d7e2d9',
    marginTop: 9,
  },
  sectionTitle: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 21,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'column',
    gap: 10,
  },
  statCard: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
  },
  statIcon: {
    width: 34,
    fontSize: 24,
  },
  statValue: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#173b35',
  },
  statLabel: {
    color: '#71817a',
  },
  activity: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#c7f36b',
  },
  activityTitle: {
    fontWeight: 'bold',
    color: '#173b35',
  },
  activityDetail: {
    marginTop: 4,
    color: '#71817a',
  },
});