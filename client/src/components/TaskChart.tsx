import { RadialBarChart, RadialBar, Tooltip } from 'recharts';

const TaskChart = () => {
  // Beispiel-Daten für die Anzahl der Aufgaben in jedem Status für jede Priorität
  const data = [
    { priority: 'Low', Todo: 10, Doing: 5, 'Code Review': 3, Testing: 7, Done: 20 },
    { priority: 'Medium', Todo: 15, Doing: 8, 'Code Review': 5, Testing: 10, Done: 25 },
    { priority: 'High', Todo: 5, Doing: 3, 'Code Review': 2, Testing: 4, Done: 15 }
  ];

  type RenderTooltipContentProps = {
    payload: any[]; // Verwenden Sie den Typ 'any' für payload
  }
  
  const renderTooltipContent = ({ payload }: RenderTooltipContentProps): JSX.Element | null => {
    if (!payload || payload.length === 0) return null;
    const priority = payload[0].payload.priority;
    return (
      <div className={`custom-tooltip  p-4 rounded-3xl`}>
        <p className='text-md font-bold '>Priorität: {priority}</p>
        {payload.map((entry: any, index: number) => ( // Geben Sie den Typ 'number' explizit für index an
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value} tasks
          </p>
        ))}
      </div>
    );
  };

  return (
    <RadialBarChart
    width={600}
    height={400}
    innerRadius="10%"
    outerRadius="80%"
    data={data}
    startAngle={180}
    endAngle={0}
  >
    <RadialBar minPointSize={15} background dataKey="Todo" fill="#8884d8" />
    <RadialBar minPointSize={15} background dataKey="Doing" fill="#82ca9d" />
    <RadialBar minPointSize={15} background dataKey="Code Review" fill="#ffc658" />
    <RadialBar minPointSize={15} background dataKey="Testing" fill="#8dd1e1" />
    <RadialBar minPointSize={15} background dataKey="Done" fill="#ff3300" />
    <Tooltip content={renderTooltipContent} />
    </RadialBarChart>
  );
};

export default TaskChart;
