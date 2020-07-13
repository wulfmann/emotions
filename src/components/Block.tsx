function Block({ text, onClick }) {
  return (
    <div className="block" onClick={()=>onClick(text)}>
      {text}
    </div>
  )
}

export default Block;
