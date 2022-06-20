export default function BmrComponent(props) {
  
  const { state } = props;

  return (
    <>
      <h3>기초대사량</h3>
      
      <p>일일 기초 대사량은 {state.toFixed(2)}kcal 입니다.</p>
        
      <br />
      <br />
    </>
    
  );
}
