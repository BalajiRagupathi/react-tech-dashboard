import React, { Component } from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import axios from "axios";

import "./Dashboard.css";

class Dashboard extends Component {
  state = {
    data01: [
      { name: "Group A", popularity: 400 },
      { name: "Group B", popularity: 300 },
      { name: "Group C", popularity: 300 },
      { name: "Group D", popularity: 200 },
      { name: "Group E", popularity: 278 },
      { name: "Group F", popularity: 189 },
    ],
    isLoaded: false,
  };

  componentDidMount() {
    this.getTableList();
  }

  async getTableList() {
    let tech_list = await axios.get(
      "https://tech-dashboard-nest-api.herokuapp.com/dashboard/list"
    );
    console.log(tech_list.data.top);

    this.setState({
      data01: tech_list.data.top,
      isLoaded: true,
    });
    
    console.log(...this.state.data01);
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div style={{ textAlign: "center" }}>
          <h1>Graphical Representation</h1>
          <div className="graph">
            <PieChart width={400} height={400}>
              <Pie
                dataKey="popularity"
                isAnimationActive={false}
                data={this.state.data01}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
            <BarChart
              width={500}
              height={300}
              data={this.state.data01}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey="popularity"
                fill="#8884d8"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </div>
        </div>
      );
    } else {
      return (
        <div className="dashboard">
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

export default Dashboard;
