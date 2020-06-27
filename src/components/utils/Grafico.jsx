import React, { useState, useEffect } from "react";
import "../../styles/css/Grafico.css";
import axios from "axios";
import Chart from "chart.js";
import { Line } from "react-chartjs-2";
import { FECHAMENTO_URL } from "./URLS";
import { Fragment } from "react";

export default (props) => {
    useEffect(() => {
        buscarVariacao();
    }, []);


    const buscarVariacao = async () => {
        
        const dataAtual = new Date();
        const diaAtual = dataAtual.getDate();
        const mesAtual = dataAtual.getMonth()>8?dataAtual.getMonth()+1:`0${dataAtual.getMonth()+1}`
        const anoAtual = dataAtual.getFullYear();
        const dataInicio = `${anoAtual}-${mesAtual}-${diaAtual-15}`
        const dataFinal = `${anoAtual}-${mesAtual}-${diaAtual}`
        
        console.log(dataInicio);

        const result = await axios({
            method: "GET",
            url: `https://api.exchangerate.host/timeseries?start_date=${dataInicio}&end_date=${dataFinal}&base=${props.moeda}&symbols=BRL`,
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
                    display: false,
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "index",
                    intersect: false,
                },
                deferred: {
                    // xOffset: 150, // defer until 150px of the canvas width are inside the viewport
                    // yOffset: "50%", // defer until 50% of the canvas height are inside the viewport
                    delay: 50000, // delay of 500 ms after the canvas is considered inside the viewport
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                fontFamily: "Roboto Mono",
                                fontColor: "#556F7B",
                                fontStyle: "bold",
                                //   beginAtZero: true,
                                maxTicksLimit: 10,
                                padding: 20,
                            },
                            gridLines: {
                                drawTicks: false,
                                // display: false,
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
                                maxTicksLimit: 10,
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
