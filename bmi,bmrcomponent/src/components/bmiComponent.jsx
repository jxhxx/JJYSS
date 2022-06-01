export default function BmiComponents(props) {
  const { bmi, grade } = props;

  return (
    <>
      <p>BMI</p>
      <p>
        {bmi}이고 {grade}입니다
      </p>
      
    </>
  );
}
