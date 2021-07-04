import React from 'react';
import { MainStyle } from './MainStyle';
import { Button } from './ButtonStyle'

const Main = () => {
    return (
        <>
            <MainStyle>
            SMART goal setting gives structure to your plan of achieving your goal.
            </MainStyle><br /><br />
            <MainStyle>
            This type of goal setting also helps you track your progress and success rate throughout your journey.
            </MainStyle> <br /><br />
            <MainStyle>
            SMART goal setting provides you with a clear ojective of your goal.
            </MainStyle><br /><br />
            <MainStyle>
            You can use SMART goals for any goal you want to achieve, whether it is short-term, long-term, career-driven, or fitness-related.
            </MainStyle><br /><br />

            <Button>tap here</Button>to learn more!
        </>
    );
};

export default Main;