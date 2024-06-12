import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DashboardCards = () => {
  const tasks = {
    high: 10,
    medium: 20,
    low: 30,
  };

  return (
    <div className='flex gap-5 w-full justify-between'>
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>High Priority Tasks</CardTitle>
          <CardDescription>Tasks that need immediate attention</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{tasks.high} tasks</p>
        </CardContent>
        <CardFooter>
          <p>Review these tasks soon</p>
        </CardFooter>
      </Card>
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Medium Priority Tasks</CardTitle>
          <CardDescription>Tasks that should be done soon</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{tasks.medium} tasks</p>
        </CardContent>
        <CardFooter>
          <p>Plan to complete these tasks</p>
        </CardFooter>
      </Card>
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Low Priority Tasks</CardTitle>
          <CardDescription>Tasks that can be addressed later</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{tasks.low} tasks</p>
        </CardContent>
        <CardFooter>
          <p>Handle these tasks at your convenience</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DashboardCards;
