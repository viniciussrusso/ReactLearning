import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard><h4>Warning!</h4> Are you sure you want to do this?</ApprovalCard>


            <ApprovalCard>
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 3:32PM" 
                avatar={faker.image.avatar()} 
                comment="Nice blog! Loved it!" 
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 00:45AM" 
                avatar={faker.image.avatar()} 
                comment="Nice blog! Well done!" 
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 5:45PM" 
                avatar={faker.image.avatar()} 
                comment="Well done, nice post!" 
            />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));