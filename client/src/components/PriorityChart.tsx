import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const PriorityChart = () => {
  // Beispiel-Daten für die Anzahl der Aufgaben in jeder Priorität
  const data = [
    { name: 'Low', value: 20, color: '#8884d8' },
    { name: 'Medium', value: 30, color: '#82ca9d' },
    { name: 'High', value: 15, color: '#ffc658' }
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PriorityChart;
