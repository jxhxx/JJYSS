import { ResponsiveBullet } from '@nivo/bullet';
import {data} from '../data';

const BmiGauge = (props) => {

  const { bmi } = props;

  data[0].measures = [bmi];

    return (
        <div style = {{height: "150px"}}>
             <ResponsiveBullet
                data={data}
                margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
                spacing={48}
                titleAlign="start"
                titleOffsetX={-70}
                rangeColors="seq:yellow_orange_red"
                measureColors="reds"
                measureSize={0.35}
                markerSize={0}
            />
        </div>
    )
}

export default BmiGauge;