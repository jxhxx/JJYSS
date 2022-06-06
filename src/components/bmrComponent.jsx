export default function BmrComponent(props) {
  const { state } = props;

  return (
    <>
      <p>기초대사량</p>
      <p>{state.toFixed(2)}kcal</p>
    </>
  );
}
