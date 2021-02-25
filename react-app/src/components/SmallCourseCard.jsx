import React, {Component} from 'react';
import '../time-table.css';

class SmallCourseCard extends Component {
    state = {
        course: {},
        rows: [],
        columns: [],
        durations: [],
        times: [],
        time: 0,
    };

    constructor(props) {
        super(props);
        this.state.course = props.course;
    }

    render() {
        return (
            <span>
				<div className='small-card-container'>
					<div
                        className='small-card-content d-flex flex-column justify-content-center align-items-start h-100'>
						<h1 className='class-time'>
							{' '}
                            {this.state.course.classTimeArray[0].startHour}:
                            {this.state.course.classTimeArray[0].startMin}-{' '}
                            {this.state.course.classTimeArray[0].endHour}:
                            {this.state.course.classTimeArray[0].endMin}{' '}
						</h1>
						<h1 className='class-name'>
							{' '}
                            {this.state.course.title}{' '}
						</h1>
						<h1 className='class-master'>
							{this.state.course.instructor}
						</h1>
						<h1 className='class-exam'>
							{' '}
                            امتحان : {this.state.course.examTime}
						</h1>
					</div>
				</div>
			</span>
        );
    }
}

export default SmallCourseCard;
