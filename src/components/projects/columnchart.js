import React, {Component, Fragment} from 'react';
import TuiChart from 'tui-chart';
var data = {
    categories: [
        'June, 2015',
        'July, 2015',
        'August, 2015',
        'September, 2015',
        'October, 2015',
        'November, 2015',
        'December, 2015'
    ],
    series: [
        {
            name: 'Budget',
            data: [
                5000,
                3000,
                5000,
                7000,
                6000,
                4000,
                1000
            ]
        }, {
            name: 'Income',
            data: [
                8000,
                1000,
                7000,
                2000,
                6000,
                3000,
                5000
            ]
        }, {
            name: 'Expenses',
            data: [
                4000,
                4000,
                6000,
                3000,
                4000,
                5000,
                7000
            ]
        }, {
            name: 'Debt',
            data: [
                6000,
                3000,
                3000,
                1000,
                2000,
                4000,
                3000
            ]
        }
    ]
};
class ColumnChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnData: data
        },
        this.options = {
            chart: {
                width: 1160,
                height: 650,
                title: 'Project stats',
                format: '1,000'
            },
            yAxis: {
                title: 'Amount',
                min: 0,
                max: 9000
            },
            xAxis: {
                title: 'Month'
            },
            legend: {
                align: 'top'
            }
        };
    }
    componentDidMount() {
        var container = document.getElementById(this.props.chartid);
        TuiChart.columnChart(container, this.state.columnData, this.options);
    }
    componentDidUpdate() {
        console.log('On Updated mount in columnchart', this.props);
        let columnData = {
            categories: this.props.project_data
        };
    }

    render() {
        return (
            <Fragment>
                <div id={this.props.chartid}></div>
            </Fragment>
        );
    }
}

export default ColumnChart;