export default function BmiComponents(props) {

  const { bmi, grade } = props;

  return (
    <>
      <h3>BMI</h3>
      <p>
       {/* {bmi}이고 {grade}입니다. */}
       신체질량지수(BMI)는 {bmi}으로, {grade}입니다.
      </p>
    </>
  );
}



