import React, { useState, useEffect } from "react";
import "../../styles/css/Grafico.css";
import axios from "axios";
import Chart from "chart.js";
import { Line } from "react-chartjs-2";
import { FECHAMENTO_URL } from "../../utils/URLS";
import { Fragment } from "react";

export default (props) => {
    useEffect(() => {
        buscarVariacao();
    }, []);

    const buscarVariacao = async () => {
        const result = await axios({
            method: "GET",
            url: `https://api.exchangerate.host/timeseries?start_date=2020-06-01&end_date=2020-06-16&base=USD&symbols=BRL`,
        })
            .then((response) => {
                return Object.entries(response.data.rates);
            })
            .catch((error) => {
                console.log(error);
            });

        const variacaoValores = [];
        const variacaoDatas = [];
        const arr = result.sort();
        const date = new Date();
        const month = date.toLocaleString("pt", { month: "short" });
        arr.forEach(([key, value]) => {
            variacaoValores.push(value.BRL.toFixed(2));
            variacaoDatas.push(`${month.toUpperCase()} ${key.split("-")[2]}`);
        });

        Charts(variacaoValores, variacaoDatas);
    };

    const Charts = (variacaoValores, variacaoDatas) => {
        const ctx = document.getElementById("myChart").getContext("2d");
        const width = window.innerWidth || document.body.clientWidth;
        const gradientStroke = ctx.createLinearGradient(0, 0, width, 0);
        gradientStroke.addColorStop(0, "#7C4DFF");
        gradientStroke.addColorStop(0.3, "#448AFF");
        gradientStroke.addColorStop(0.6, "#00BCD4");
        gradientStroke.addColorStop(1, "#1DE9B6");

        const myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: variacaoDatas,
                datasets: [
                    {
                        label: `Variação Dolar X Real`,
                        borderColor: gradientStroke,
                        pointBorderColor: gradientStroke,
                        pointBackgroundColor: gradientStroke,
                        pointHoverBackgroundColor: gradientStroke,
                        pointHoverBorderColor: gradientStroke,
                        pointBorderWidth: 8,
                        pointHoverRadius: 8,
                        pointHoverBorderWidth: 1,
                        pointRadius: 3,
                        fill: false,
                        borderWidth: 4,
                        data: variacaoValores,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                 },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                fontFamily: "Roboto Mono",
                                fontColor: "#556F7B",
                                fontStyle: "bold",
                                //   beginAtZero: true,
                                maxTicksLimit: 5,
                                padding: 20,
                            },
                            gridLines: {
                                drawTicks: false,
                                display: false,
                                drawBorder: false,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                zeroLineColor: "transparent",
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#556F7B",
                                fontStyle: "bold",
                                fontFamily: "Roboto Mono",
                                maxTicksLimit: 6,
                            },
                            gridLines: {
                                drawTicks: false,
                                display: false,
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    };

    return (
        <div className="grafico-container">
            <header className="grafico-header">
                <p>Variação Dolar x Real</p>
            </header>
            <div className="Grafico" id="line-chart">
                <canvas id="myChart"></canvas>
            </div>
        </div>
    );
};
