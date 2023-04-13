import { DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

const Component = () => (
  <div>
    <RangePicker onChange={onChange} />
    <br />
  </div>
);

export default Component;
