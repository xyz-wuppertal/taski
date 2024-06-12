import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const DoneBarChart = () => {
  // Beispiel-Daten für die Anzahl der erledigten Aufgaben für jeden Monat der letzten sechs Monate
  const data = [
    { month: 'Jan', Done: 20 },
    { month: 'Feb', Done: 30 },
    { month: 'Mar', Done: 25 },
    { month: 'Apr', Done: 35 },
    { month: 'May', Done: 40 },
    { month: 'Jun', Done: 45 }
  ];

  return (
    <BarChart
      width={600}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="month"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false} />
      <YAxis 
          fontSize={12}
          tickLine={false}
          axisLine={false}/>
      <Tooltip   cursor={false}/>
      <Bar dataKey="Done" fill="#8884d8"  radius={[4, 4, 0, 0]}  />
    </BarChart>
  );
};

export default DoneBarChart;
