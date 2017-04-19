import React, { Component } from 'react'
import Chart from 'chart.js'

import Styles from './index.scss'

export default class AppChart extends Component {

    componentDidMount() {
        console.log('------------------------------ Chart JS ---------------------------------')
        let ctx = document.getElementById("myChart")
        console.log(ctx)

        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    data: [12, 15, 3, 5, 2, 7],
                    backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                    borderColor: [
                        'rgba(255,99,132,1)'
                    ],
                    // pointBackgroundColor: 'rgba(255,99,132,1)',
                    borderWidth: 3
                }, {
                    data: [9, 4, 10, 8, 15, 10],
                    backgroundColor: ['rgba(0, 188, 212, .2)'],
                    borderColor: [
                        'rgba(0, 188, 212, 1)'
                    ],
                    // pointBackgroundColor: 'rgba(0, 188, 212, 1)',
                    borderWidth: 3
                }]
            },
            options: {
            	elements: { point: { radius: 0 } },
                legend: { display: false },
                animation: { easing: 'easeInOutCirc' },
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false
                    }],
                    yAxes: [{
                        display: false,
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }

    render() {
        return (
        	<div>
	            <canvas id="myChart" style={{width:'100%' , height:'200px'}}></canvas>
	            <div className={Styles['glass']}>
	            	<h1>CAT</h1>
	            </div>
            </div>
        )
    }
}
